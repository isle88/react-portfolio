import React from "react";

const Skill = ({ image, description, name }) => {
  return (
    <div>
      <span>
        <img src={image} alt={description}></img>
         {name} 
      </span>
    </div>
  );
};

export default Skill;
