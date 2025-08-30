import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer-box" id='contact'>
        <span className="footer-contact-me">CONTACT ME</span>
        <div className="footer-content">
        <div className="footer-box-left-content">
            <span className="get-in-touch">
                GET IN TOUCH
            </span>
            
            <span className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae delectus maiores, magni dicta, repellendus impedit sapiente cumque dolor, excepturi praesentium atque possimus.</span>
            <span className="footer-social-media">
            <a href="https://www.facebook.com/profile.php?id=61550345747435" target="_blank">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268312/portfolioFiles/fbIcon.png" alt="fbIcon" />
              </a>

              <a href="https://www.linkedin.com/in/narugupta/" target="_blank">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268576/portfolioFiles/linkedInicon.png" alt="linkedInIcon" />
              </a>

              <a href="https://www.instagram.com/naren.drah/" target="_blank">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268639/portfolioFiles/igIcon.png" alt="igIcon" />
              </a>

              <a href="https://x.com/naren_drah" target="_blank">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729268722/portfolioFiles/twitterIcon.png" alt="xIcon" />
              </a>

              <a href="mailto:narugupta01@gmail.com?subject=Inquiry" target="_blank">  <img src="https://res.cloudinary.com/dfew9we6n/image/upload/v1729333772/portfolioFiles/mailLogo.png" alt="mailIcon" />
              </a>
                
            </span>
        </div>
        <div className="footer-box-right-content">
            <span className="ping-us">Got Query?Ping Us!</span>
  
           <form action="submit"> 
            <textarea className='
            footer-name footer-form' name="name" id="footer-name" placeholder='Name' rows={1} cols={60}></textarea>

            <textarea className='footer-mail footer-form' name="mail" id="footer-mail" placeholder='Mail' rows={1} cols={60}></textarea>

            <textarea className='footer-query footer-form' name="query" id="footer-query" placeholder='Query' rows={4} cols={60}></textarea>
           </form>
          
          <button className="footer-query-submit-button"> SUBMIT</button>

          
        </div>
        </div>
<div className="footer-credit">
  <span className="footer-narendra">&copy; Narendra Kumar Gupta</span>
  <div className="vertical-line"></div>
  <span className="footer-all-right-reserved">All Rights Reserved</span>
</div>

      </div>
    </div>
  )
}

export default Footer
