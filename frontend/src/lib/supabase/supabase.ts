import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const STORAGE_BUCKET = "attachments";
export const MAX_VIDEO_MB = 30;
export const MAX_VIDEO_BYTES = MAX_VIDEO_MB * 1024 * 1024;
