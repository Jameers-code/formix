from __future__ import annotations

import uvicorn
import os
import re
import uuid
from typing import Any, Optional

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, ConfigDict, Field, field_validator
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_SERVICE_KEY = os.environ["SUPABASE_SERVICE_KEY"]

supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

app = FastAPI(title="Formix API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "Accept"],
    expose_headers=["*"],
)

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": str(exc)},
        headers={"Access-Control-Allow-Origin": "*"},
    )

# ─── Models ──────────────────────────────────────────────────────────────────

class LogicRule(BaseModel):
    fieldId: str
    operator: str
    value: str
    effect: str
    targetFieldId: str


class FieldSchema(BaseModel):
    id: str
    type: str
    label: str
    required: bool = False
    placeholder: Optional[str] = None
    options: Optional[list[str]] = None
    dataSource: Optional[str] = None
    maxLength: Optional[int] = None
    rules: Optional[list[LogicRule]] = None

    @field_validator("type")
    @classmethod
    def validate_type(cls, v: str) -> str:
        allowed = {
            "text", "large_text", "email", "phone", "number",
            "date", "select", "radio_group", "image_upload", "video_upload",
        }
        if v not in allowed:
            raise ValueError(f"Unknown field type: {v}")
        return v

class FormSchema(BaseModel):
    title: str
    description: Optional[str] = None
    fields: list[FieldSchema]

class CreateFormPayload(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    title: str
    form_schema: FormSchema = Field(alias="schema")

class UpdateFormPayload(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    title: str
    form_schema: FormSchema = Field(alias="schema")

class SubmissionPayload(BaseModel):
    branch_id: Optional[str] = None
    data: dict[str, Any]

# ─── Validation helpers ───────────────────────────────────────────────────────

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
PHONE_RE = re.compile(r"^\+?[\d\s\-().]{7,15}$")

def evaluate_rule(rule: LogicRule, form_data: dict[str, Any]) -> bool:
    source_val = form_data.get(rule.fieldId)
    raw_source = str(source_val).strip() if source_val is not None else ""

    if rule.operator == "==":
        return raw_source == rule.value
    elif rule.operator == "!=":
        return raw_source != rule.value

    try:
        num_source = float(raw_source) if raw_source else 0.0
        num_val = float(rule.value) if rule.value else 0.0
        if rule.operator == ">=":
            return num_source >= num_val
        elif rule.operator == "<=":
            return num_source <= num_val
        elif rule.operator == ">":
            return num_source > num_val
        elif rule.operator == "<":
            return num_source < num_val
    except ValueError:
        pass

    return False

def is_field_visible(field: FieldSchema, form_data: dict[str, Any]) -> bool:
    if not field.rules:
        return True

    hide_rule = next((r for r in field.rules if r.effect ==
                     "hide" and r.targetFieldId == field.id), None)
    show_rule = next((r for r in field.rules if r.effect ==
                     "show" and r.targetFieldId == field.id), None)

    if hide_rule and evaluate_rule(hide_rule, form_data):
        return False
    if show_rule:
        return evaluate_rule(show_rule, form_data)

    return True

def is_field_required(field: FieldSchema, form_data: dict[str, Any]) -> bool:
    if field.required:
        return True
    if not field.rules:
        return False
    return any(r.effect == "require" and evaluate_rule(r, form_data) for r in field.rules)

def validate_submission_data(schema: FormSchema, data: dict[str, Any]) -> None:
    has_any_data = False
    for field in schema.fields:
        if not is_field_visible(field, data):
            continue

        value = data.get(field.id)
        raw = str(value).strip() if value is not None else ""

        if raw:
            has_any_data = True

        if is_field_required(field, data) and not raw:
            raise HTTPException(
                status_code=422,
                detail=f"'{field.label}' is required",
            )

        if not raw:
            continue

        if field.type == "number":
            try:
                float(raw)
            except (ValueError, TypeError):
                raise HTTPException(
                    status_code=422,
                    detail=f"'{field.label}' must be a number",
                )

        if field.type == "email" and not EMAIL_RE.match(raw):
            raise HTTPException(
                status_code=422,
                detail=f"'{field.label}' must be a valid email address",
            )

        if field.type == "phone" and not PHONE_RE.match(raw):
            raise HTTPException(
                status_code=422,
                detail=f"'{field.label}' must be a valid phone number",
            )

        if field.maxLength and len(raw) > field.maxLength:
            raise HTTPException(
                status_code=422,
                detail=f"'{field.label}' exceeds max length of {field.maxLength}",
            )

    if not has_any_data:
        raise HTTPException(
            status_code=422,
            detail="Form is empty. Please fill at least one field."
        )

# ─── Routes ───────────────────────────────────────────────────────────────────

@app.get("/metadata/branches")
def list_branches():
    result = supabase.table("branches").select("id, name, location").execute()
    return result.data

@app.get("/forms/definitions")
def list_form_definitions():
    result = (
        supabase.table("forms")
        .select("id, title, schema, schema_version, created_at")
        .order("created_at", desc=True)
        .execute()
    )
    return result.data

@app.post("/forms/definitions", status_code=201)
def create_form_definition(payload: CreateFormPayload):
    row = {
        "id": str(uuid.uuid4()),
        "title": payload.title,
        "schema": payload.form_schema.model_dump(),
        "schema_version": 1,
    }
    result = supabase.table("forms").insert(row).execute()
    if not result.data:
        raise HTTPException(status_code=500, detail="Failed to save form")
    return result.data[0]

@app.put("/forms/{form_id}")
def update_form_definition(form_id: str, payload: UpdateFormPayload):
    check_result = (
        supabase.table("forms")
        .select("id")
        .eq("id", form_id)
        .single()
        .execute()
    )
    if not check_result.data:
        raise HTTPException(status_code=404, detail="Form not found")

    update_data = {
        "title": payload.title,
        "schema": payload.form_schema.model_dump(),
    }
    result = (
        supabase.table("forms")
        .update(update_data)
        .eq("id", form_id)
        .execute()
    )
    if not result.data:
        raise HTTPException(status_code=500, detail="Failed to update form")
    return result.data[0]

@app.get("/forms/{form_id}")
def get_form(form_id: str):
    result = (
        supabase.table("forms")
        .select("id, title, schema, schema_version, created_at")
        .eq("id", form_id)
        .single()
        .execute()
    )
    if not result.data:
        raise HTTPException(status_code=404, detail="Form not found")
    return result.data

@app.post("/forms/{form_id}/submission", status_code=201)
def submit_form(form_id: str, payload: SubmissionPayload):
    form_result = (
        supabase.table("forms")
        .select("schema")
        .eq("id", form_id)
        .single()
        .execute()
    )
    if not form_result.data:
        raise HTTPException(status_code=404, detail="Form not found")

    schema = FormSchema(**form_result.data["schema"])
    validate_submission_data(schema, payload.data)

    if payload.branch_id:
        branch_result = (
            supabase.table("branches")
            .select("id")
            .eq("id", payload.branch_id)
            .execute()
        )
        if not branch_result.data:
            raise HTTPException(status_code=400, detail="Invalid branch_id")

    row: dict[str, Any] = {
        "id": str(uuid.uuid4()),
        "form_id": form_id,
        "data": payload.data,
    }
    if payload.branch_id:
        row["branch_id"] = payload.branch_id

    result = supabase.table("submissions").insert(row).execute()
    if not result.data:
        raise HTTPException(
            status_code=500, detail="Failed to save submission")
    return {"id": result.data[0]["id"], "message": "Submission recorded"}

@app.get("/forms/{form_id}/submissions")
def list_submissions(form_id: str):
    form_result = (
        supabase.table("forms")
        .select("id, title, schema")
        .eq("id", form_id)
        .single()
        .execute()
    )
    if not form_result.data:
        raise HTTPException(status_code=404, detail="Form not found")

    result = (
        supabase.table("submissions")
        .select("id, data, branch_id, created_at")
        .eq("form_id", form_id)
        .order("created_at", desc=True)
        .execute()
    )
    return {
        "form": form_result.data,
        "submissions": result.data,
    }

@app.delete("/forms/{form_id}", status_code=204)
def delete_form(form_id: str):
    supabase.table("submissions").delete().eq("form_id", form_id).execute()

    result = supabase.table("forms").delete().eq("id", form_id).execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Form not found")
    return None

if __name__ == "__main__":
    uvicorn.run("src.main:app", host="0.0.0.0", port=8000, reload=True)
