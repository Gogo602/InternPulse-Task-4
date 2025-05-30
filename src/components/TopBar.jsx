import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.homeText}>Home</div>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
        />
        <span className={styles.searchIcon}>
          <FaSearch />
        </span>
      </div>
    </div>
  );
}