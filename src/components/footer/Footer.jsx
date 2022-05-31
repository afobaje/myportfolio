import React from "react";
import "../footer/footer.css";
import gmail from '../footer/assets/icons8-gmail.svg'
import Github from "../footer/assets/icons8-github.svg";
import Linkedin from "../footer/assets/icons8-linkedin-circled.svg";
import Twitter from "../footer/assets/icons8-twitter (1).svg";

const Footer = () => {
  return (
    <footer>
      <article className="footh">
        <div className="handles">
          <img src={Github} alt="" srcset="" />
          <a href="http://github.com/afobaje">Github</a>
        </div>
        <div className="handles">
          <img src={Linkedin} alt="" srcset="" />
          <a href="https://linkedin.com/in/ikukoyi-david">Linkedin</a>
        </div>
        <div className="handles">
          <img src={Twitter} alt="" srcset="" />
          <a href="http://twitter.com/davidblaqq">Twitter</a>
        </div>
        <div className="handles">
          <img src={gmail} alt="" srcset="" />
          <a href="http://ikukoyidave@gmail.com">Gmail</a>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
