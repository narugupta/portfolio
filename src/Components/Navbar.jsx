import React, { useState } from 'react';
import "./Navbar.css"
// import { BrowserRouter, NavLink } from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import { useRef } from 'react';
// import Header from './Header';

const Navbar = (props) => {
  // const aboutMe = useRef(null);
  // const myEdu = useRef(null);
  // const mySkill = useRef(null);
  // const navLinks= document.querySelectorAll("nav-item");


  // const scrollToSection = (elementRef)=>{
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior:"smooth",
  //   });
  // };
    // const activePage = window.location.hash;
    // const navLinks= document.querySelectorAll("nav-item");

    // const isActive=()=>{
    //   if(a.href.includes(`${activePage}`)){
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // }

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = ()=>{
    
    //  navLinks.forEach(links =>{
    //   links.classList.remove('nav-link-clicked');
      setIsClicked(true);
      // document.querySelector('nav a [href=' +id + '] ').classList.add('active');
    // });

    //  navLinks.forEach(a =>{
    //   a.classList.remove('active');
    //   document.querySelector('nav-item [href=' +id + '] ').classList.add('active');
    //    });

    }

    const [isScrolled, setIsScrolled] = useState(false);
 
    const handleScroll = () => {
        if(window.scrollY>=80){
      setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
  
    window.addEventListener('scroll',handleScroll);

    const sections = document.querySelectorAll('section');

  
    // window.onscroll = () => {
    //   sections.forEach(sec =>{
    //     const top = window.scrollY;
    //     const offset = sec.offsetTop;
    //     const height = sec.offsetHeight;
    //     const id = sec.getAttribute("id");
  
    //     if(top>=offset && top<offset +height) {
    //       navLinks.forEach(links =>{
    //         links.classList.remove('active');
    //         document.querySelector('nav a [href=' +id + '] ').classList.add('active');
    //       });
    //     };
    //   });
    // };

  return (
    <div className="abcd">
    <div className="abcd">
      
      <div className= {isScrolled?"active":"notActive"} >
      


<nav className={`navbar navbar-expand-lg navbar-dark  my-choice-bg`}>
        <div className="container-fluid">
          <a className="navbar-brand navbar-title" href="./narenlink">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills" >
            
               <div className='home'>
              {/* <div className={`nav-link-list ${isClicked?"navbar-item-clicked":"navbar-item-not-clicked"}`} > */}
                <div className="nav-link-list">
              {/* className={`card ${props.project}`} */}
               
              
              {/* <li className={`nav-item ${isActive?"active-link":"not-active-link"}`}>
              <a className="nav-link active" aria-current="page" href="#education">test</a>
              </li> */}

              <li className="nav-item ">
                {/* <div className={`hgvfhfgfg ${!isClicked?"nav-link-clicked":"nav-link-not-clicked"}`} > */}
                <a className="nav-link" aria-current="page" href="#introduction">About Me</a>
                {/* </div> */}
                
              </li>
              {/* <hr /> */}
              </div>
              </div>
              
              <div>

              <li className="nav-item">
              {/* <div className={`nav-link-list home ${isClicked?"nav-link-clicked":"nav-link-not-clicked"}`}> */}
                <div className="nav-link-list">
                <a className="nav-link" aria-current="page" href="#education1">Educations</a>
                </div>
              </li>
              {/* <hr /> */}

              </div>

              {/* <div onClick={handleClick}> */}
              {/* <div className={`nav-link-list home ${isActive?"navbar-item-active":"navbar-item-not-active"}`} > */}
              <div className="nav-link-list">
              {/* <div className={`nav-link-list home ${isClicked?"navbar-item-clicked":"navbar-item-not-clicked"}`}> */}
              <li className="nav-item">
                <a className="nav-link" href="#project1">Projects</a>
                
                {/* <hr /> */}
              </li>
              {/* </div> */}
              </div>

              
              <li className="nav-item">
                <a className="nav-link" href="#skill1">Skills</a>
              </li>
              

              <li className="nav-item">
                <a className="nav-link" href="#footer1">Contacts</a>
              </li>
              
            </ul>
            {/* </div> */}
            

            <div className={`toggle-mode ${props.mode==='dark'? 'light-mode':'dark-mode' }`}  >
              <button onClick={props.toggleMode}>
                <img src={props.btnImg} alt="" />
              </button>
              
            </div>

          </div>
          
        </div>
      </nav>
      </div>
    </div>
    </div>
  )
}

export default Navbar
