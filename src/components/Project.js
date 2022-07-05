import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import projects from "../data";

const Projects = () => {
  return (
    <>
      <h1 style={{ fontStyle: "italic" }}>Projects</h1>
      <div>
        <Row xs={1} md={3} className="g-4">
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
    </>
  );
};

export default Projects;
