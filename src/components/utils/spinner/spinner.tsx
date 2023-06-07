import React from "react";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.loader}>
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.outerCircle}></div>
        <div className={styles.innerCircle}></div>
        <div className={styles.middleCircle}></div>
      </div>
    </div>
  </div>
  );
};

export default Spinner;
