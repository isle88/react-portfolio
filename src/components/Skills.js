import React from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/Skills.module.css";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div id="skills" className={styles.layout}>
          <h3 className={styles.title}>Skills</h3>
      <Container >
        <Row lg={4} md={2} xs={1} >
          <>
            <Skill
              subTitle={styles.subTitle}
              container={styles.container}
              border={styles.border}
            />
          </>
        </Row>
      </Container>
      <div className={styles.down}>
        <a href="#projects">
          <ChevronDown color="grey" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Skills;
