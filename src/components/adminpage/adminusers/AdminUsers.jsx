import { getUsers } from "@/lib/data"
import styles from "./adminusers.module.css"
import Image from "next/image";
import { deleteUser } from "@/lib/action";

async function AdminUsers() {

  const users = await getUsers();


  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users?.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/images/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.userTitle}>{user.title}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete User</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminUsers