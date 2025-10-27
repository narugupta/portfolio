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

      <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1728906228/netflixBgWithoutText.jpg" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1761548501/snapTrack-front.png" projectName = "Snap Track" projectDescription ="High-Performance SaaS Application" />

            <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1729262715/portfolioFiles/cspvhuyyq9vqvdffnyjn.avif" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1761550956/CongestSim1.png" projectName = "CongestSim" projectDescription ="Congestion Game Analysis Tool" />

  
       
      </div>
      </div>
      <div className="firstRow container">
      <div className="firstColumn container">

             <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1729246923/portfolioFiles/amazonLogoTextRemoved.jpg" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1761548981/fleetflow.jpg" projectName = "FLEET FLOW" projectDescription ="ML-Driven Logistics Solution" />
             
      <Project notHoveredBgUrl="https://res.cloudinary.com/dfew9we6n/image/upload/v1729261567/portfolioFiles/portfolioBGText1.avif" HoveredBgUrl = "https://res.cloudinary.com/dfew9we6n/image/upload/v1729261245/portfolioFiles/portfolioBg.webp" projectName = "Insight dash" projectDescription ="Data-Driven CRM Dashboard" />


      </div>
      </div>
      </div>
    </div>
  )
}

export default MyProjects
