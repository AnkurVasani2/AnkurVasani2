import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Project from './Components/Projects/Project';
import Loader from './Components/Loader/Loader';
import Publication from './Components/Publication/Publication';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="publications">
          <Publication />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;
