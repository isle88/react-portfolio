import React from "react";
import skills from "../data/skills";
import { ArrowDown } from "react-bootstrap-icons";
import styles from "../styles/Skills.module.css";
import Skill from "./Skill";

const Skills = () => {
  const { frontend, backend, deployment } = skills;

  return (
    <div id="skills" className={`${styles.padding} ${styles.text}`}>
      <div>
        <h3 className={styles.title}>FrontEnd</h3>
        {frontend.map((data) => {
          return (
            <Skill
              image={data.image}
              description={data.description}
              name={data.name}
              key={data.name}
            />
          );
        })}
      </div>
      <div>
        <h3 className={styles.title}>BackEnd</h3>
        {backend.map((data) => {
          return (
            <Skill
              image={data.image}
              description={data.description}
              name={data.name}
              key={data.name}
            />
          );
        })}
      </div>
      <div>
        <h3 className={styles.title}>Deployment</h3>
        {deployment.map((data) => {
          return (
            <Skill
              image={data.image}
              description={data.description}
              name={data.name}
              key={data.name}
            />
          );
        })}
      </div>
      <a href="#projects">
        <ArrowDown color="grey" size={25} className={styles.arrow} />
      </a>
    </div>
  );
};

export default Skills;
