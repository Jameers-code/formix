import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_SERVICE_KEY = os.environ["SUPABASE_SERVICE_KEY"]

supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

def setup_storage():
    bucket_name = "attachments"
    
    # 1. Try to create the bucket (it might already exist)
    try:
        supabase.storage.create_bucket(bucket_name, options={"public": True})
        print(f"✅ Bucket '{bucket_name}' created successfully")
    except Exception as e:
        print(f"Bucket creation error (might already exist): {e}")

if __name__ == "__main__":
    setup_storage()
