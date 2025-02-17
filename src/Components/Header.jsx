import React, { useState } from 'react';
import "./Header.css"
import Navbar from './Navbar'
// import { useRef } from "react"


const Header = () => {

    const [mode, setMode] = useState('light');
    const [btnText, setbtnText] = useState("Enable Dark Mode");
    const [btnImg, setBtnImg] = useState('https://res.cloudinary.com/dfew9we6n/image/upload/v1729334239/portfolioFiles/darkMode.png')

    const toggleMode=()=>{
    if(mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setbtnText('Enable Dark Mode');
      setBtnImg('https://res.cloudinary.com/dfew9we6n/image/upload/v1729334239/portfolioFiles/darkMode.png')
    } else 
    {
      setMode('dark')
      setbtnText("Disable Dark Mode");
      setBtnImg('https://res.cloudinary.com/dfew9we6n/image/upload/v1729334288/portfolioFiles/lightMode.png')
       document.body.style.backgroundColor = '#18172c';

    }
 }
  return (
    <>
          <Navbar title="NARENDRA" toggleMode={toggleMode} btnText = {btnText}  mode ={mode} btnImg = {btnImg} />

    <header>
    <div className="bg-img">
    </div>
   
        <div id='introduction'className="introduction aboutMe">
        <div className="text">
          <span className="my-name">NARENDRA KUMAR GUPTA</span>
        <span className="more-about-me container">I’m a design engineer with a passion for interior design, and homelabbing. This is my personal space on the web, where I share a little bit of everything.lorem23 lorem23</span>
        <span className="hidden-in-phone">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eaque obcaecati sint rem, nam sequi ex saepe officiis. Quisquam culpa veniam nam nisi!</span>

        <span className="header-social-media">
              <a href="">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268312/portfolioFiles/voobthlxsioxvowhnqaa.png" alt="fbIcon" />
              </a>

              <a href="">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268576/portfolioFiles/linkedInicon.png" alt="linkedInIcon" />
              </a>

              <a href="">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268639/portfolioFiles/igIcon.png" alt="igIcon" />
              </a>

              <a href="./x.com">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268722/portfolioFiles/twitterIcon.png" alt="xIcon" />
              </a>

              <a href="">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729333772/portfolioFiles/mailLogo.png" alt="mailIcon" />
              </a>
                
            </span>

        <button className="download-resume">Resume</button>
    </div>

    <div className="my-photo">
        <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1728836397/portfolioFiles/naruPhotoDarken.png" alt="naruPhoto" />
    </div>
    </div>


    </header>


    </>
  )
}

export default Header
