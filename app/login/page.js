'use server'
import FormLogin from "@/components/formLogin";
import ".././css/login.css";
import readUserSession from "../lib/actions";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from 'next/cache';

export default async function Login() {
  noStore();
  const {data} = await readUserSession()

if (data.user) {
  redirect('/dashboard')
}
  return (
    <div className="mt-20">
      <FormLogin />
    </div>
  );
}


