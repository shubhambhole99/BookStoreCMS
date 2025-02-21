"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signUp}
    // onSubmit={async (data: { email: string; password: string; fullName: string; universityId: number; universityCard: string; }): Promise<{ success: boolean; error?: string }> => {
    //   console.log("hi")
    //   return { success: true };
    // }}
  />
  // <p>hi</p>
);

export default Page;
