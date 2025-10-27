import React from 'react'
import "./Myskills.css"
import SkillGraph from './SkillGraph'
import { useRef } from 'react'

const MySkills = () => {

  const mySkill = useRef(null);


  return (
    <div>
        <div ref={mySkill} className="my-skills mySkill" id='mySkills'>
        <span className="my-skill-heading">MY SKILLS</span>
        <div className="my-skill-box">
      <div className="skill-text" style={{
        color:document.body.style.backgroundColor=="white"?"black":"white"
        }}>
        <span className="skill-text-about-me">
           More About My Skills
        </span>
<span className="skill-text-description">
  I specialize in building scalable full-stack web applications with seamless integration across frontend, backend, databases, and cloud infrastructure. 
  My work spans from architecting SaaS platforms and ML-powered systems to designing interactive data dashboards and traffic simulations.
  
  <br /><br />
  
  I’m proficient in React, Node.js, Express, MongoDB, PostgreSQL, and TailwindCSS, with hands-on experience in machine learning (PyTorch, Scikit-learn) and REST API design. 
  I also implement automation, authentication, and payment integrations (Stripe, Nodemailer) to enhance usability and performance.
  
  <br /><br />
  
  Combining strong software engineering principles with analytical problem-solving, 
  I focus on developing reliable, high-performance systems that deliver measurable results.
</span>


      </div>

      <div className="skill-graph-container">
      <SkillGraph title = "HTML" skillPercentage = "90%" backColor = "green"/>
      <SkillGraph title = "CSS" skillPercentage = "85%" backColor = "blue"/>
      <SkillGraph title = "JavaScript" skillPercentage = "90%" backColor = "black"/>
      <SkillGraph title = "C/C++" skillPercentage = "95%" backColor = "yellow"/>
      <SkillGraph title = "DSA" skillPercentage = "90%" backColor = "red"/>
      </div>
      </div>
    </div>
    </div>
    // </div>
  )
}

export default MySkills
