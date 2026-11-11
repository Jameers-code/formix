import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ??
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error(
            "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY."
        );
    }

    return createBrowserClient(supabaseUrl, supabaseKey);
};
