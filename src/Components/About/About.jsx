import React from 'react'
import '../About/About2.css'
import self from '../../assets/self_full.jpg'

const About = () => {
  return (
    <div className="about">
        <div className="head">
            <span>Get To Know More</span>
            <h1>About Me</h1>
        </div>

        <div className="about-content"> {/* flex row */}
            <div className="about-image">
                <img src={self} alt="ankur_vasani" />
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
                    <p>Hi, I’m Ankur Vasani, an enthusiastic Information Technology student with a passion for crafting innovative digital solutions. My academic journey and hands-on experience have honed my skills in software development and problem-solving. I thrive on continuous learning and am always eager to embrace new challenges that push the boundaries of technology. With a solid foundation in both front-end and back-end development, I aim to create impactful and user-centered applications that drive progress in the tech industry. Whether it’s developing responsive web applications or exploring cutting-edge technologies, I am dedicated to making a meaningful contribution to the digital landscape.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About