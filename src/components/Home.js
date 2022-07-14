import React from "react";
import styles from "../styles/Home.module.css";
import { ChevronDown } from "react-bootstrap-icons";

const Home = () => {
  return (
    <div id="home" className={styles.layout}>
      <h1>Hello World! 🙋‍♀️</h1>
      <h1>🕊 Welcome to My Portfolio 🦥 </h1>
      <div className={styles.down}>
        <a href="#profile">
          <ChevronDown color="grey" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Home;
