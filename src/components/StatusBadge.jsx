import React from "react";
import styles from "./StatusBadge.module.css";

export default function StatusBadge({ status }) {
  const badgeClass =
    status === "In Stock" ? styles.inStock : styles.outOfStock;
  return <span className={badgeClass}>{status}</span>;
}