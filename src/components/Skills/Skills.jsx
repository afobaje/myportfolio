import React from "react";
import CSS from "../Skills/css-3.svg";
import react from "../Skills/react-2.svg";
import sass from "../Skills/sass-1.svg";
import tailwind from "../Skills/tailwind-css-2.svg";
import javascript from "../Skills/logo-javascript.svg";
import "../Skills/Skills.css";

const Skills = () => {
  return (
    <article className="skills">
      <h2>Skills</h2>
      <div className="actual">
        <div className="frame">
          <img src={react} width={40} height={40} alt="" />
        </div>
        <div className="frame">
          <img src={javascript} width={40} height={40} alt="" />
        </div>
        <div className="frame">
          <img src={CSS} width={40} height={40} alt="" />
        </div>

        <div className="frame">
          <img src={sass} width={40} height={40} alt="" />
        </div>
        <div className="frame">
          <img src={tailwind} width={40} height={40} alt="" />
        </div>
      </div>
    </article>
  );
};

export default Skills;
