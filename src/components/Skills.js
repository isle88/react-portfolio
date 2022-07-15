import React from "react";
import skills from "../data/skills";
import { ChevronDown } from "react-bootstrap-icons";
import styles from "../styles/Skills.module.css";
import Skill from "./Skill";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const { frontend, backend, deployment } = skills;

  return (
    <div id="skills" className={styles.layout}>
      <Container>
        <Row>
          <Col lg>
            <div>
              <h2 className={styles.title}>FrontEnd</h2>
              <div className={styles.container}>
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
            </div>
          </Col>
          <Col sm>
            <div>
              <h2 className={styles.title}>BackEnd</h2>
              <div className={styles.container}>
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
            </div>
          </Col>
          <Col sm>
            <div>
              <h2 className={styles.title}>Deployment</h2>
              <div className={styles.container}>
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
            </div>
          </Col>
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
