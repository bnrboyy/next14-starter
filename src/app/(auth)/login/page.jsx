import { handleGithubLogin } from "@/lib/action";

async function Login() {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
}

export default Login;
