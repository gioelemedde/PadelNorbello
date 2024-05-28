import FormLogin from "@/components/formLogin";
import ".././css/login.css";
import readUserSession from "../lib/actions";
import { redirect } from "next/navigation";

export default async function Login() {
  const {data} = await readUserSession()
  console.log(data.user);

if (data.user) {
  redirect('/dashboard')
}
  return (
    <div className="mt-20">
      <FormLogin />
    </div>
  );
}

