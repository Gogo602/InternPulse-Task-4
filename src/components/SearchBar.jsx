import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search..."}
        className={styles.input}
      />
      <span className={styles.icon}>🔍</span>
    </div>
  );
}