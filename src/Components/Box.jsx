import React, { useState } from 'react';
import "./Box.css"


const Box = (props) => {

    const [isHovered, setIsHovered] = useState(false);
 
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
   
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`card ${props.project}`}>
        <div className ={isHovered?"my-education-box-hovered":"my-education-box-not-hovered"}>
        <span className="institute-name">{props.instituteName}</span>
        <div className="logo-div">
        <img className='logo' src={props.url} alt="" />
        </div>
          <span className="institute-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis sunt.</span>
        
        <div className="p-text">
        <hr />
        <p>{props.projectInfo}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Box
