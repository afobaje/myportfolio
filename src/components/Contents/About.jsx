import React from "react";
import "../Contents/css/About.css";

const About = () => {
  return (
    <article className="aboutcard" id="about">
      <h2>About Us</h2>
      <p>
        Hi, I am a software engineer with specialty in the front end
        development. I create various visuals tailored for different needs and
        different niches as per demand. I have had experience developing
        professionally as a freelancer where I was opportuned to work on
        different projects. I have also created different personal projects out
        of sheer curiosity and hunger to increase my knowledge or otherwise,
        skillset. I recognize I am in the business of learning and developing so
        I am never scared to take up new skills as per demand and job tasks. I
        am also knowledgeable in various frameworks and continue to research on
        how to become better.
      </p>
      <div className="blob">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF00FF" d="M54.9,-48.3C63.2,-33.3,56.6,-11,52,12.9C47.4,36.8,44.8,62.1,31.7,70.1C18.6,78,-4.9,68.5,-27.1,57.4C-49.2,46.3,-70,33.5,-76,15.1C-81.9,-3.2,-73,-27.1,-57.8,-43.6C-42.7,-60.2,-21.3,-69.2,1,-70C23.3,-70.8,46.6,-63.3,54.9,-48.3Z" transform="translate(100 100)" />
</svg>
      </div>
    </article>
  );
};

export default About;
