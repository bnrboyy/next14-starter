import LoginForm from "@/components/loginform/LoginForm";
import styles from "./login.module.css";

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
