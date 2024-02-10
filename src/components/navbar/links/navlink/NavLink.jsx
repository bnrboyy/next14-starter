"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navlink.module.css";

function NavLink({ item, icon = null }) {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      href={item.path}
      key={item.title}
    >
      {icon && icon}
      {item.title}
    </Link>
  );
}

export default NavLink;
