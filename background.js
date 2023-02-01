import "./supabase.js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNob3J1bWNjY3pkdWxmZm1hbml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NDYyMjQsImV4cCI6MTk4NTIyMjIyNH0.30Vfv-1bIxthJlmFjVFtUWXVAa98sb9ZPv4urC6jUDk";
const SUPABASE_URL = "https://shorumccczdulffmaniy.supabase.co";
const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { "x-my-custom-header": "my-app-name" },
    fetch: fetch.bind(globalThis),
  },
};
const { createClient } = supabase;

supabase = createClient(SUPABASE_URL, SUPABASE_KEY, options);

console.log("supabase?", supabase);


