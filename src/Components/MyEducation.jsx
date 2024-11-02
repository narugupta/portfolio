import React from 'react'
import Box from './Box'
import "./MyEducation.css"
// import Navbar from './Navbar'
// import { useRef } from "react";

const MyEducation = () => { 

  return (
<>
     
     <div className="my-card myEdu" id='MyEducation'>
     {/* <Navbar/> */}
     <div id='education1' className="my-education">MY EDUCATION</div>
    <div className="firstRow container">
       <div className="firstColumn container">
        

        <Box url = "https://res.cloudinary.com/dfew9we6n/image/upload/v1729182864/portfolioFiles/nitSilcharLogo.png" project = "Project1" projectInfo = "Bachelor of Technology(2023-27)" instituteName = "NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR"/>

        <Box url = "https://res.cloudinary.com/dfew9we6n/image/upload/v1729182231/portfolioFiles/chsLogo.png" project = "Project1" projectInfo = "Senior Secondary School(2020-22)" instituteName = "CENTRAL HINDU SCHOOL"/>

        <div className="hide">
      <Box url = "https://res.cloudinary.com/dfew9we6n/image/upload/v1729175484/portfolioFiles/jpsLogo.png" project = "Project1" projectInfo = "Secondary School(2014-2020)" instituteName = "JEEWAN PUBLIC SCHOOL" />
      </div>

    

     
      </div>

     </div>
     </div>

</>
     

  )
}

export default MyEducation
