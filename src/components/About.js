import React from 'react';
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Any content of your choosing goes here.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
