"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";
import Image from "next/image";

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

function Links() {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <button className={styles.menuBtn} onClick={() => setOpen(prev => !prev)}>Menu</button> */}
      <Image  className={styles.menuBtn} src="/images/menu.png" alt="" width={30} height={30} onClick={() => setOpen(prev => !prev)} />
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
