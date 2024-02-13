import { signIn } from "@/helper/auth";
import React from "react";

function page() {
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <h1>This is the auth login page</h1>
    </div>
  );
}

export default page;
