import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 style={{ fontStyle: "italic" }}>Profile</h1>
      <h2>hello world ! 🙋‍♀️</h2>
      <h3>I am Hyunjung Kim</h3>
      <p>changed career to be a FrontEnd developer</p>
      <p>Graduate Northcoders' Bootcamp on March 2022</p>
      <p>i am blah blah</p>

      <a href="https://github.com/isle88"  target="blank" >
        <img
          src="https://img.icons8.com/fluency/48/000000/github.png"
          alt="github logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/hyunjung-kim-2843b3233/"  target="blank" >
        <img
          src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
          alt="linkedin logo"
        />
      </a>
    </div>
  );
};

export default Profile;
