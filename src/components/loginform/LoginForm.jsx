"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { handleGithubLogin, login } from "@/lib/action";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from "./loginform.module.css";

function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <>
      {/* <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form> */}
      <form className={styles.form} action={formAction}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button className={styles.btnlogin}>Login</button>
        <button className={styles.githublogin}><GitHubIcon /> Login With Github</button>
        {state?.error && <p className={styles.error}>{state.error}</p>}
      </form>
    </>
  );
}

export default LoginForm;
