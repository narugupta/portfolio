
import Card from "./Components/MyEducation"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MyProjects from "./Components/MyProjects"
import MySkills from "./Components/MySkills"
import "./App.css"
// import { useRef } from "react"


function App() {


  const sections = document.querySelectorAll('section');
  const navLinks= document.querySelectorAll("nav a");

  window.onscroll = () => {
    sections.forEach(sec =>{
      const top = window.scrollY;
      const offset = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if(top>=offset && top<offset +height) {
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('nav a [href=' +id + '] ').classList.add('active');
        });
      };
    });
  };


  return (

    <>


    <div className="universe">
      {/* <div id="header1" className="section1"> */}
     <Header/>
     {/* </div> */}
     <div id="education1" className="section active">
     <Card/>
     </div>
     <div id="project1" className="section active">
     <MyProjects/>
     </div>
     <div id="skill1" className="section">
     <MySkills/>
     </div>
     <div id="footer1" className="section">
     <Footer/>
     </div>
     </div>

    </>



  )
}

export default App
