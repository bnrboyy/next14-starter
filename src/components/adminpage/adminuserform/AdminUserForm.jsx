"use client";

import { useFormState } from "react-dom";

import { addUser } from "@/lib/action";
import styles from "./adminuserform.module.css";

function AdminUserForm() {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Users</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Is admin ?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state?.error && <p className={styles.error}>{state.error}</p>}
    </form>
  );
}

export default AdminUserForm;
