import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ezwxqeggltbqnqpykusy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6d3hxZWdnbHRicW5xcHlrdXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNTUyMjcsImV4cCI6MjA0MzYzMTIyN30.c7msjxCekoanCf4j5wUmqwXNmFcYkZLsHWY1V-tagrY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
