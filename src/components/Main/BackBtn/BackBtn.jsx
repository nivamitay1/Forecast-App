import React from "react";
import styles from "./BackBtn.module.css";

export default function BackBtn({ setForcast }) {
  const back = () => {
    setForcast(null);
  };

  return (
    <button onClick={back} className={styles.btn}>
      <img
        src="https://img.icons8.com/flat-round/64/26e07f/circled-left.png"
        className={styles.img}
      />
    </button>
  );
}
