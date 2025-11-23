import photo from "../Pages/Photos/photo.png"
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import "../Pages/About.css"
function About(){
    return(
        <>
           <div className="about_cnt">
           <h1>ABOUT ME</h1>
             <hr/>
            <div className="about_mid">
                <div className="about_midleft">
                    <h3>I am a Professional UI/UX Designer and Web developer.
                    Consectetur an adipisi elita, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.</h3>

                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,</p>

                    <hr/>

                    <div className="aboutmidrow">
                        <div className="aboutrow1">
                            <h2>Phone</h2>
                            <p>7255005301</p>
                        </div>
                        <div className="aboutrow1">
                            <h2>Email</h2>
                            <p>mdtauseefkhan38@gmail.com</p>
                        </div>
                        <div className="aboutrow1">
                            <h2>Youtube</h2>
                            <p><a href="www.youtube.com/@DSKtechnology1" target="_blank"
              rel="noopener noreferrer">www.youtube</a>1</p>
                        </div>
                    </div>


                </div>

                <div className="aboutmidright">
                <div className="aboutmidright1">
                       <img src={photo} alt="this error is coming when user clicks something" />
                       <div className="aboutmidrightrow">
                        <ul>
                            <li><a href="/"><FaSquareFacebook/></a></li>
                             <li><a href="https://www.instagram.com/mdtauseef987?utm_source=qr&igsh=eTJrdGlvMjlmcmpq" target="_blank"  rel="noopener noreferrer"><FaInstagram/></a></li>
                              <li><a href="https://www.youtube.com/channel/UC4QxJW24Ar0R6jiSf7uDd6g" target="_blank"  rel="noopener noreferrer"><IoLogoYoutube/></a></li>
                               <li><a href="https://github.com/Md-TAUSEEF" target="_blank"  rel="noopener noreferrer"><FaSquareGithub/></a></li>
                                <li><a href="https://www.linkedin.com/in/md-tauseef/" target="_blank"  rel="noopener noreferrer"><FaLinkedin /></a></li>
                        </ul>
                       </div>
                       </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default About;