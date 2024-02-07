import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BNRDEV</div>
      <div className={styles.text}>
        BRN Creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
