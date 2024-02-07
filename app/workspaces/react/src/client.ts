import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tmwowlcdosxcssyzbdpy.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtd293bGNkb3N4Y3NzeXpiZHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1OTQyNTUsImV4cCI6MjAyMjE3MDI1NX0.uUNZBlnO_weaBMGxw9kB0Q-9xPTQ1eREt9n9SyZBeH4'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
