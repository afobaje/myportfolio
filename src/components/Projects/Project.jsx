import React from "react";
import "../Projects/Projects.css";
import Advice from "../assets/629535d5008792598b41bf76.png";
import Shop from "../assets/62953512d1c9ec38de3b665c.png";
import Photo from "../assets/Photoviewr- Search for any photos.png";
import Web from "../assets/React App.png";
import Xchange from "../assets/xchangefx-netlify-app-1024x768desktop-9a5e32.jpg";

const Project = () => {
  return (
    <article className="Projects">
      <h2>Our Projects</h2>
      <div className="proj">
        <div className="cardone">
          <figure className="config">
            <img src={Advice}  alt="" srcset="" />
          </figure>
          <div className="zeh">
          <p>
            This is an advice app. It generates a random advice when you click a shiny button
           
          </p>
          <a className="checkout" href="http://writtenadvice.netlify.app">Advice App</a>
          </div>
         
        </div>
        <div className="cardone">
          <figure className="config">
            <img src={Shop} w alt="" srcset="" />
          </figure>
          <div className="zeh">
          <p>
            This is an ecommerce app useful for sale of different goods and even integrated with a payment API for fast track of payments.
           
          </p>
          <a className="checkout" href="http://shopafrica.netlify.app">Shop Africa</a>
          </div>
         
        </div>
        <div className="cardone">
          <figure className="config">
            <img src={Xchange} w alt="" srcset="" />
          </figure>
          <div className="zeh">
          <p>
            This is an exchange rate app. You can quicky check exchange rate in real time
           
          </p>
          <a className="checkout" href="http://xchangefx.netlify.app">XchangeFX App</a>
          </div>
         
        </div>
        <div className="cardone">
          <figure className="config">
            <img src={Photo} w alt="" srcset="" />
          </figure>
          <div className="zeh">
          <p>
            This is a photo app. Search for any photos and get new creative ideas for your projects
           
          </p>
          <a className="checkout" href="http://photoviewr.netlify.app">Photo App</a>
          </div>
         
        </div>
        <div className="cardone">
          <figure className="config">
            <img src={Web} w alt="" srcset="" />
          </figure>
          <div className="zeh">
          <p>
            This is resume builder. Build and vet your tools and also download one in real time
           
          </p>
          <a className="checkout" href="http://resm.netlify.app">CV Maker</a>
          </div>
         
        </div> 
      </div>
    </article>
  );
};

export default Project;
