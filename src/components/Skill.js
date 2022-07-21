import React from "react";
import skills from "../data/skills";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const Skill = ({ subTitle, container }) => {
  return (
    <>
      {skills.map((category, index) => {
        return (
          <Col key={index}>
            <div>
              <h4 className={subTitle}>{category.title}</h4>
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
