import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Welcome!</h1>
      <p className={styles.description}>
        Don't have an account yet? Register now to access all the features and
        benefits.
      </p>
      <div className={styles.buttons}>
        <Link to="/register" className={styles.button}>
          Register
        </Link>
        <Link to="/login" className={styles.button}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
