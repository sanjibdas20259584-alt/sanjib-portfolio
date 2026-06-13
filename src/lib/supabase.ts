import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Only create the client if both values are provided
// Otherwise provide a dummy client that won't crash the app
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ error: null }),
        select: () => ({ data: null, error: null }),
      }),
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
      },
    } as any;