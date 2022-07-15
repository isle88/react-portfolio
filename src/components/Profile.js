import React from "react";
import { ChevronDown, Github, Linkedin } from "react-bootstrap-icons";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  return (
    <div id="profile" className={styles.layout}>
      <h2 className={styles.title}>Hi, My name is Hyunjung Kim 👋 </h2>
      <div className={styles.body}>
        <p>I graduated Northcoders' bootcamp in 2022</p>
        <p>I'm excited for you to see my portfolio!</p>
        <p>Please check out also my Github and LinkedIn</p>
      </div>
      <div>
        <a href="https://github.com/isle88" target="blank">
          <Github size={48} className={styles.svg} />
        </a>
        <a
          href="https://www.linkedin.com/in/hyunjung-kim-2843b3233/"
          target="blank"
        >
          <Linkedin color="black" size={48} className={styles.svg} />
        </a>
      </div>
      <div className={styles.down} >
      <a href="#skills">
        <ChevronDown color="grey" size={25} />
      </a>
      </div>
    </div>
  );
};

export default Profile;
