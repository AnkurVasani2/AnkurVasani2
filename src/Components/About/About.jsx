import React from 'react'
import '../About/About.css'
import self from '../../assets/self_full.jpg'

const About = () => {
  return (
    <div className="about">
        <div className="head">
            <span>Get to Know More</span>
            <h1>About Me</h1>
        </div>
        <div className="content">
            <div className="image-about">
                <img src={self} alt="Ankur Vasani" />
            </div>
            <div className="details">
                <table>
                    <tr>
                        <td className="icon-text-cell">
                            <i class="fa-solid fa-briefcase fa-beat icon-details" style={{color: "#FFD43B",}}></i>
                            <span>
                                <h3>
                                Exprience
                                </h3>
                                <ul>
                                    <li>Former Intern <b>Adani Power</b> (Web Developer)</li>
                                    <li>Former Intern <b>CodeClause</b> (Python Developer)</li>
                                </ul>
                            </span>
                        </td>
                        <td className="icon-text-cell">
                            <i class="fa-solid fa-building-columns fa-beat icon-details" style={{color: "#FFD43B",}}></i>
                            <h3>
                                Education
                            </h3>
                            <ul>
                                <li>
                                    <b>Diploma</b> in Information Technology - (Grade: 94%) <br /><em>SVKM's Shri Bhagubhai Mafatlal Polytechnic, Mumbai</em>
                                </li>
                                <li>
                                    <b>SSC</b> - (Grade: 80%) <br /><em>HMP High School, Dahanu</em>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <div className="text-about">
                    <p>
                    Hi, I’m Ankur Vasani, an enthusiastic Information Technology student with a passion for crafting innovative digital solutions. My academic journey and hands-on experience have honed my skills in software development and problem-solving. I thrive on continuous learning and am always eager to embrace new challenges that push the boundaries of technology. With a solid foundation in both front-end and back-end development, I aim to create impactful and user-centered applications that drive progress in the tech industry. Whether it’s developing responsive web applications or exploring cutting-edge technologies, I am dedicated to making a meaningful contribution to the digital landscape.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About