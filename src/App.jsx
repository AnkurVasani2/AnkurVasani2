import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Project from './Components/Projects/Project';

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
    </>
  );
};

export default App;
