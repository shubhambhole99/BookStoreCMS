"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={signInWithCredentials}
  //   onSubmit={async (data: {
  //     email: string;
  //     password: string;
  //   }): Promise<{
  //     success: boolean;
  //     error?: string;
  //   }> => {
  //     console.log("hi");
  //     return { success: true };
  //   }}
  />
  // <p>hi</p>
);

export default Page;
