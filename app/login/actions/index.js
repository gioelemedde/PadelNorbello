'use server'
import createSupabaseServerClient from "@/app/lib/supabase/server";

export default async function signInWhitYourPassword(data){
  const supabase =  await createSupabaseServerClient();
  const result =  supabase.auth.signInWithPassword({email: data.email, password: data.password})
 return result;
}