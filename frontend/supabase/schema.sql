-- =============================================
-- Dynamic Safety Form Engine - Database Schema
-- =============================================

-- BRANCHES: Static list of job sites/locations
CREATE TABLE IF NOT EXISTS branches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- FORMS: Form templates with JSONB field schema
-- schema_version: included to signal versioning awareness (even if not fully implemented)
CREATE TABLE IF NOT EXISTS forms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    schema JSONB NOT NULL,
    schema_version INT NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- SUBMISSIONS: User-submitted data validated against a form's schema
CREATE TABLE IF NOT EXISTS submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_id UUID NOT NULL REFERENCES forms(id) ON DELETE CASCADE,
    branch_id UUID REFERENCES branches(id),
    data JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- INDEXES for common lookups
CREATE INDEX IF NOT EXISTS idx_submissions_form_id ON submissions(form_id);

-- =============================================
-- RLS: Disable for all tables
-- This is a POC with no user authentication.
-- All access goes through the FastAPI backend
-- which uses the service_role key (bypasses RLS).
-- Disabling explicitly prevents silent block issues.
-- =============================================
ALTER TABLE branches DISABLE ROW LEVEL SECURITY;
ALTER TABLE forms DISABLE ROW LEVEL SECURITY;
ALTER TABLE submissions DISABLE ROW LEVEL SECURITY;

-- =============================================
-- SEED DATA: Sample branches
-- =============================================
INSERT INTO branches (name, location) VALUES
    ('Site Alpha', 'New York, NY'),
    ('Site Bravo', 'Los Angeles, CA'),
    ('Site Charlie', 'Chicago, IL'),
    ('Site Delta', 'Houston, TX')
ON CONFLICT DO NOTHING;


-- =============================================
-- EXAMPLE: What a form schema looks like in JSONB
-- =============================================
--
-- {
--   "title": "Daily Safety Walkthrough",
--   "fields": [
--     {
--       "id": "f_1",
--       "type": "text",
--       "label": "Inspector Name",
--       "required": true
--     },
--     {
--       "id": "f_2",
--       "type": "number",
--       "label": "Depth (meters)",
--       "required": false
--     },
--     {
--       "id": "f_3",
--       "type": "select",
--       "label": "Job Site",
--       "dataSource": "branches",
--       "required": true
--     },
--     {
--       "id": "f_4",
--       "type": "radio_group",
--       "label": "Safety Equipment Worn?",
--       "options": ["Yes", "No"],
--       "required": true
--     },
--     {
--       "id": "f_5",
--       "type": "video_upload",
--       "label": "Site Video",
--       "required": false
--     }
--   ]
-- }
