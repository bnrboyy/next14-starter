import Image from "next/image";
import { getUserById } from "@/lib/data";

import styles from "./postuser.module.css";

// FETCH DATA WITH AN API
// const getUser = async (userId) => {
//   // const url = `http://localhost:3000/api/users/${userId}`
//   const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
//   const res = await fetch(url, { cache: "no-store" });

//   // const res = getUserById(userId);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

export default async function PostUser({ userId }) {
  
  const user = await getUserById(userId);

  return (
    <>
      {user && (
        <div className={styles.container}>
          <Image
            className={styles.avatar}
            src={user.img ? user.img : "/images/noavatar.png"}
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.texts}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
          </div>
        </div>
      )}
    </>
  );
}
