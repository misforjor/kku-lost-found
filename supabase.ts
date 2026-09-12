import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rdcwbbkjrggxcdouqrra.supabase.co/rest/v1/'
const supabaseAnonKey = 'sb_publishable_yeqaof7nH0qOa1dgh40Wvg_Jdcsz4_1'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
