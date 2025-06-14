import { createClient } from "@supabase/supabase-js";

// supabase - settings - API
const supabaseUrl = "https://hiosucjvcqxnasljhqhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpb3N1Y2p2Y3F4bmFzbGpocWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMTMzNzUsImV4cCI6MjA0Nzg4OTM3NX0.DUVxwPdlfuNZ7Gxbe8tHfUbqpUsbEZ318Yidvgj3Fp4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
