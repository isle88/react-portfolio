import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { ChevronDown } from 'react-bootstrap-icons';
import projects from "../data/projects";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.layout}>
      <h3 className={styles.title}>Projects</h3>
      <div className={styles.card}>
        <Row sm={1} md={2} lg={3} className="g-4">
          {projects.map((project) => {
            return (
              <div key={project.title}>
                <a
                  href={project.link}
                  target="blank"
                  className={styles.a}
                >
                  <Col>
                    <Card className={styles.size}>
                      <Card.Img
                        variant="top"
                        src={project.image}
                        className={styles.image}
                      />
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                          {project.stack}
                          <br />
                          {project.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </a>
              </div>
            );
          })}
        </Row>
      </div>
      <div className={styles.down}>
        <a href="#contact">
          <ChevronDown color="grey" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
