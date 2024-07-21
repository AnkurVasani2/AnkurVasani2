import React from 'react'
import '../Skill/Skill.css'
import react from '../../assets/React-Dark.svg'
import python from '../../assets/Python-Dark.svg'
import node from '../../assets/NodeJS-Dark.svg'
import github from '../../assets/Github-Dark.svg'
import firebase from '../../assets/Firebase-Dark.svg'
import flutter from '../../assets/Flutter-Dark.svg'
import java from '../../assets/Java-Dark.svg'
import cs from '../../assets/CS.svg'

const Skill = () => {
  return (
    <div className="skill">
        <div className="head">
            <span>My</span>
            <h1>Skills</h1>
        </div>
        <div class="carrosel">
            <div class="caixa__card cc__1"><img src={react} alt="" className="logo-skill" /> <br />React.js</div>
            <div class="caixa__card cc__2"><img src={node} alt="" className="logo-skill" /> <br />Node.js</div>
            <div class="caixa__card cc__3"><img src={python} alt="" className="logo-skill" /><br />Python</div>
            <div class="caixa__card cc__4"><img src={cs} alt="" className="logo-skill" /><br />C#</div>
            <div class="caixa__card cc__5"><img src={java} alt="" className="logo-skill" /><br />Java</div>
            <div class="caixa__card cc__6"><img src={flutter} alt="" className="logo-skill" /><br />Flutter</div>
            <div class="caixa__card cc__7"><img src={firebase} alt="" className="logo-skill" /><br />Firebase</div>
            <div class="caixa__card cc__8"><img src={github} alt="" className="logo-skill" /><br />GitHub</div>
            
        </div>
    </div>
  )
}

export default Skill