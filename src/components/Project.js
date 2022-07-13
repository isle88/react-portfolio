import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div id="projects">
      <h1 style={{ fontStyle: "italic" }}>Projects</h1>
      <div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => {
            return (
              <a
                href={project.link}
                target="blank"
                key={project.title}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Col>
                  <Card style={{ width: "20rem" }}>
                    <Card.Img
                      variant="top"
                      src={project.image}
                      style={{ padding: 20 }}
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
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
