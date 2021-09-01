import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={styles.heading}>
        <span className={styles.light}>Weather</span> Forecast
      </h1>
    </header>
  );
}
