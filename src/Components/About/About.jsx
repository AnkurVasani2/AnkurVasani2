import React, { useState, useEffect } from 'react';
import '../About/About2.css';
import image1 from '../../assets/image (1).jpg';
import image2 from '../../assets/image (2).jpg';
import image3 from '../../assets/image (3).jpg';
import image4 from '../../assets/image (4).jpg';
import image5 from '../../assets/image (5).jpg';
import image6 from '../../assets/image (6).jpg';
import image7 from '../../assets/image (7).jpg';
import image8 from '../../assets/image (8).jpg';
import image9 from '../../assets/image (9).jpg';
import image10 from '../../assets/image (10).jpg';
import image11 from '../../assets/image (11).jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="about">
      <div className="head">
        <span>Get To Know More</span>
        <h1>About Me</h1>
      </div>

      <div className="about-content"> {/* flex row */}
        <div className="about-image">
          <img src={images[currentImageIndex]} alt="ankur_vasani" />
        </div>

        <div className="about-text">{/* flex column */}
          <div className="about-boxes">  {/* flex row */}
            <div className="about-container">
              <div className="about-icon">
                <i className="fa-solid fa-briefcase fa-beat icon-details" style={{color: "rgb(225,212,59)"}}></i>
                <p>Experience</p>
              </div>
              <div className="box-content">
                <ul>
                  <li>Former Intern <b>Adani Power</b> (Web Developer)</li>
                  <li>Former Intern <b>CodeClause</b> (Python Developer)</li>
                </ul>
              </div>
            </div>
            <div className="about-container">
              <div className="about-icon">
                <i className="fa-solid fa-graduation-cap fa-beat icon-details" style={{color: "rgb(225,212,59)"}}></i>
                <p>Education</p>
              </div>
              <div className="box-content">
                <ul>
                  <li><b>Diploma in Information Technology</b> - Grade: 94% <p>SVKM's Shri Bhagubhai Mafatlal Polytechnic, Mumbai</p></li>
                  <li><b>SSC</b> - Grade: 80% <p>H.M.P High School Dahanu</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="paragraph">
            <p>Hi, I'm Ankur Vasani, an Information Technology student with a strong background in software development and problem-solving. My academic journey and hands-on experience have honed my skills in developing responsive web applications, mobile apps, RESTful APIs etc. I am passionate about continuous learning and tackling new challenges in technology. My goal is to create impactful, user-centered solutions that drive progress in the tech industry.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
