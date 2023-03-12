import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/src/assets/sprint.png" alt="logo" />
        <input type="text" placeholder="Search" />
      </div>

      <div className={styles.empty}>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
