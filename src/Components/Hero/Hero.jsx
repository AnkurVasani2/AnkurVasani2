import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import self from '../../assets/self.jpg';
import cv from '../../assets/ankur_resume_.pdf'; // Import your CV file
import '../Hero/Hero.css'


const Hero = () => {
  return (
    <div className="Hero">
      <div className="image">
        <img src={self} alt="Ankur Vasani" />
      </div>
      <div className="text">
        <p className='p1'>Hey, I'm</p>
        <h1 className='title'>Ankur Vasani</h1>
        <p className="p2">&#123; I'm a passionate <span className="role">
            <Typewriter
              words={['Web Developer', 'Flask Developer', 'Python Developer', 'Java Developer', 'App Developer', 'Backend Developer']}
              loop={true}
              cursor
              cursorStyle=" }"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <div className="button">

        <a href={cv} download="Resume_Ankur.pdf">
          <button className="download">
            Download Resume
          </button>
        </a>
        <a className='icon' href="https://www.linkedin.com/in/ankurmvasani" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin fa-beat" style={{color: "#0077B5"}}></i>
        </a>
        <a className='icon' href="https://github.com/ankurvasani2" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github fa-beat"></i>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
