import React from 'react'
import "./MyProjects.css";
import Project from './Project';
// import { useRef } from "react";

const MyProjects = () => {
  return (
    <div>
      <div className="my-projects" id='myProjects'>
        <span className="my-project-text">MY PROJECTS</span>
      <div className="firstRow container">
      <div className="firstColumn container">

      <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1728906228/netflixBgWithoutText.jpg" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1728887591/netflixBg.jpg" projectName = "NETFLIX CLONE" projectDescription ="USING HTML CSS AND JAVASCRIPT" />

       <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1729246923/portfolioFiles/amazonLogoTextRemoved.jpg" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1729246896/portfolioFiles/amazonLogo.jpg" projectName = "AMAZONE CLONE" projectDescription ="USING HTML CSS AND JAVASCRIPT" />
       
      </div>
      </div>
      <div className="firstRow container">
      <div className="firstColumn container">
      <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1729261567/portfolioFiles/portfolioBGText1.avif" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1729261245/portfolioFiles/portfolioBg.webp" projectName = "MY PORTFOLIO" projectDescription ="USING HTML CSS AND JAVASCRIPT" />
      <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1729262715/portfolioFiles/cspvhuyyq9vqvdffnyjn.avif" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1729262715/portfolioFiles/cspvhuyyq9vqvdffnyjn.avif" projectName = "BIRTHDAY WISHER" projectDescription ="USING HTML CSS AND JAVASCRIPT" />
      </div>
      </div>
      </div>
    </div>
  )
}

export default MyProjects
