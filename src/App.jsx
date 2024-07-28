import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Project from './Components/Projects/Project';
import Loader from './Components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 15000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
      </div>
    </>
  );
};

export default App;
