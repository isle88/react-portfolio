import React from "react";
import styles from "../styles/Home.module.css";
import { ArrowDown } from "react-bootstrap-icons";

const Home = () => {
  return (
    <div id="home" className={`${styles.padding} ${styles.text}`}>
      <h1>Hello World! 🙋‍♀️</h1>
      <h1>🕊 Welcome to My Portfolio 🦥 </h1>
      <a href="#profile">
        <ArrowDown color='grey' size={25} className={styles.arrow}/>
      </a>
    </div>
  );
};

export default Home;
