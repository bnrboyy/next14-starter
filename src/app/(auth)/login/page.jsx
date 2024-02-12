import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginform/LoginForm";


async function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
