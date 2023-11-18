import React from 'react';
import { name, city } from "../data/data";

function Home() {
  const textStyle = {
    color: 'firebrick'
  };

  return (
    <div id="home">
      <h1 style={textStyle}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
}

export default Home;
