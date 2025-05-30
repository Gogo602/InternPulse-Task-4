import React from "react";
import styles from "./OrderStatusBadge.module.css";

export default function OrderStatusBadge({ status }) {
  let color = "#533FE4"; // Paid - purple
  if (status.toLowerCase() === "canceled") color = "#F93131";
  if (status.toLowerCase() === "refunded") color = "#2DCCFF";

  return (
    <span className={styles.badge}>
      <span
        className={styles.dot}
        style={{ background: color }}
      ></span>
      {status}
    </span>
  );
}