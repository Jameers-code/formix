import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_SERVICE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

try:
    with open("test.txt", "w") as f:
        f.write("test")
    res = supabase.storage.from_("attachments").upload("test.txt", "test.txt", {"upsert": True})
    print("Upload via SERVICE KEY succeeded!")
except Exception as e:
    print(f"Error: {e}")
