import React from "react";
import styles from "./OrderProgressBar.module.css";

const steps = [
  { number: 1, label: "Order received" },
  { number: 2, label: "Order generate" },
  { number: 3, label: "Order transmited" },
  { number: 4, label: "Order delivered" },
];

export default function OrderProgressBar() {
  return (
    <div className={styles.progressBar}>
      {steps.map((step, idx) => (
        <React.Fragment key={step.number}>
          <div className={styles.step}>
            <div className={styles.circle}>
              <span className={styles.circleNumber}>{step.number}</span>
            </div>
            <span className={styles.label}>{step.label}</span>
          </div>
          {idx < steps.length - 1 && (
            <div className={styles.line}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}