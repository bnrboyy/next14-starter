"use client";

import { useState } from "react";
import NavLink from "./navlink/NavLink";
import Image from "next/image";
import { handleGithubLogin, handleLogout } from "@/lib/action";
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from "./links.module.css";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

function Links({ session }) {
  const [open, setOpen] = useState(false);

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <>
            <NavLink item={{ title: "Login", path: "/login" }} />
            {/* <form action={handleGithubLogin}>
              <button className={styles.btnLogin}><GitHubIcon /> Login</button>
            </form> */}
          </>
        )}
      </div>
      {/* <button className={styles.menuBtn} onClick={() => setOpen(prev => !prev)}>Menu</button> */}
      <Image
        className={styles.menuBtn}
        src="/images/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
