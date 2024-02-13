import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminpage/adminposts/AdminPosts";
import AdminPostForm from "@/components/adminpage/adminpostform/AdminPostForm";
import AdminUsers from "@/components/adminpage/adminusers/AdminUsers";
import AdminUserForm from "@/components/adminpage/adminuserform/AdminUserForm";
import { auth } from "@/lib/auth";

async function Admin() {

  const session = await auth();
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
}

export default Admin;
