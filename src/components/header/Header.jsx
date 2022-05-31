import React from "react";
import "../header/css/Header.css";
import Transistor from "../header/css/transistor-man-places-cards-on-a-kanban-board.png";


const Header = () => {
  return (
    <header>
      <nav>
        <span>
          <h2 className="logo">Afobaje.</h2>
        </span>
        <ul className="links">
        <li>
            <a href='#proj'>Projects</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="https://ikukoyidave@gmail.com">Contact Us</a>
          </li>
        
         
        </ul>
      </nav>
      <article className="headbody">
        <p className="intro">
          Hi, my name is <h2>DAVID IKUKOYI.</h2> I am a{" "}
          <em>software developer</em>{" "}
          <br />
          
          <button className="starter">Get Started</button>
        </p>
        <figure className="img">
          <img src={Transistor} alt="Full stack developer" />
        </figure>
      </article>
    </header>
  );
};

export default Header;
