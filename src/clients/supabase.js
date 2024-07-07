import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://wixmggiqbdyifqgxkoqz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeG1nZ2lxYmR5aWZxZ3hrb3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NjE2OTAsImV4cCI6MjAzNTIzNzY5MH0.dwilYLiU_DstnmZlA0JrDZMYJZ8L46HdkUkzObasL2A");

export const insertContactRequest = ({name, email, consent}) => {
    return supabase.from("ContactRequests").insert({name, email, consent});
}

export const getServices = () => {
    return supabase.from("Services").select();
}