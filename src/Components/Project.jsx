// import React, { useState } from 'react';
import React, { useState } from 'react';
// import React from 'react';
import "./Project.css"

const Project = (props) => {

  // const projectInfoBoxTextHidden = {
  //   color: "white",
  //   position: "relative",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   zIndex: "99",
  //   position: "top",
  //   top: "30px",
  //   opacity: "1"
  // }

//   const  projectInfoBoxNotHovered = {
//     margin: "5px",
//     height: "55vh",
//     width: "95vw",
//     backgroundImage: "url(props.notHoveredBgUrl)",
//     backgroundSize: "max(620px, 45.5vw)",
//     backgroundPosition: "center center",
//     backgroundRepeat: "no-repeat",
//     transitionDuration: ".3s",
//     zIndex: "99"
// }

// const  projectInfoBoxHovered = {
//   margin: "5px",
//   height: "55vh",
//   width: "95vw",
//   backgroundImage: "url(props.HoveredBgUrl)",
//   backgroundSize: "max(620px, 45.5vw)",
//   backgroundPosition: "center center",
//   backgroundRepeat: "no-repeat",
//   transitionDuration: ".3s",
//   zIndex: "99",
//   border: "none"
// }

    const [isHovered, setIsHovered] = useState(false);
 
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
   
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <div className="project-info-box">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={isHovered?"project-info-box-hovered":"project-info-box-not-hovered"} style={isHovered?{backgroundImage:"url("+ props.notHoveredBgUrl + ")"}:{backgroundImage:"url("+ props.HoveredBgUrl + ")"}}>
        
      <div className={isHovered?"project-info-box-text":"project-info-box-text-hidden"}>
        <span className="project-info-text-title">{props.projectName}</span>
        <span className="project-info-text-description">{props.projectDescription}</span>
       <button className="view-source-code">Source Code</button>
      </div>
      </div>
    </div>
  )
}

export default Project
