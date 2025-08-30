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
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi saepe voluptates maiores assumenda, voluptatibus rerum ab sint hic. Molestias suscipit, iusto modi harum maiores, consequatur provident ratione aut deserunt qui magnam fuga, vel esse ad quam dolorem voluptate molestiae odit. Quas corrupti sint odit quaerat dignissimos enim sunt doloremque at?
         </span>
      </div>

      <div className="skill-graph-container">
      <SkillGraph title = "HTML" skillPercentage = "80%" backColor = "green"/>
      <SkillGraph title = "CSS" skillPercentage = "75%" backColor = "blue"/>
      <SkillGraph title = "JavaScript" skillPercentage = "65%" backColor = "black"/>
      <SkillGraph title = "C/C++" skillPercentage = "70%" backColor = "yellow"/>
      <SkillGraph title = "DSA" skillPercentage = "50%" backColor = "red"/>
      </div>
      </div>
    </div>
    </div>
    // </div>
  )
}

export default MySkills
