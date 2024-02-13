"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from 'next/navigation'
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

import { handleGithubLogin, login } from "@/lib/action";
import { auth } from "@/lib/auth";
import styles from "./loginform.module.css";

function LoginForm() {
  const router = useRouter()
  const [state, formAction] = useFormState(login, undefined);
  const [loginGithubState, formActionGithub] = useFormState(handleGithubLogin, undefined);

  useEffect(() => {
    state?.success && router.push('/');
  }, [state?.success, router]);

  // useEffect(() => {
  //   loginGithubState?.success && router.push("/");
  // }, [loginGithubState?.success, router]);
  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button className={styles.btnlogin}>Login</button>
        {state?.success && <p className={styles.success}>{state.success}</p>}
        {state?.error && <p className={styles.error}>{state.error}</p>}
        <Link href="/register">Don't hav an account? <b>Register</b></Link>
      </form>
      <form className={styles.form} action={formActionGithub}>
        <button className={styles.githublogin}>
          <GitHubIcon /> Login With Github
        </button>
        {loginGithubState?.error && <p className={styles.error}>{loginGithubState.error}</p>}
      </form>
    </>
  );
}

export default LoginForm;
