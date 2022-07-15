import React from "react";
import skills from "../data/skills";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import Skills from "./Skills";

const Skill = ({ title, container }) => {
  return (
    <>
      {skills.map((category, index) => {
        return (
          <Col key={index}>
            <div>
              <h3 className={title}>{category.title}</h3>
              <div className={container}>
                {category.skill.map((data, index) => {
                  return (
                    <div key={index} className="align-middle">
                      <img src={data.image} alt={data.description}></img>
                      {data.name}
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  container: PropTypes.string.isRequired,
};

export default Skill;
