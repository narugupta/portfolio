import React from 'react'
import "./SkillGraph.css"

const SkillGraph = (props) => {
  return (
    <div>
      <div className="skill-graph" style={{color:`${document.body.backgroundColor=='white'?"black":"white"}`}}>
        <div className="skill-name">{props.title}</div>
        <div className="skill-percentage" style={{left:`${props.skillPercentage}`}}>
          {props.skillPercentage}
        </div>
      <div className="my-container" >
        <div className="my-container-colored" style={{width:`${props.skillPercentage}`,backgroundColor:`${props.backColor}`}} >
        </div>
        </div>
      </div>
      </div>
    // </div>
  )
}

export default SkillGraph
