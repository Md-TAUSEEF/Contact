import React from "react";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a team dedicated to providing the best services and solutions. 
            Your satisfaction is our priority.
          </p>
        </div>

       
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

       
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: mdaffanalikhan987@gmail.com</p>
          <p>Phone: +91 7255005301</p>
          <p>Address: 847106, Bihar, Darbhanga</p>
        </div>

        
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
        <li><a href="/"><FaSquareFacebook/></a></li>
        <li><a href="https://www.instagram.com/mdtauseef987?utm_source=qr&igsh=eTJrdGlvMjlmcmpq" target="_blank"  rel="noopener noreferrer"><FaInstagram/></a></li>
        <li><a href="https://www.youtube.com/channel/UC4QxJW24Ar0R6jiSf7uDd6g" target="_blank"  rel="noopener noreferrer"><IoLogoYoutube/></a></li>
        <li><a href="https://github.com/Md-TAUSEEF" target="_blank"  rel="noopener noreferrer"><FaSquareGithub/></a></li>
        <li><a href="https://www.linkedin.com/in/md-tauseef/" target="_blank"  rel="noopener noreferrer"><FaLinkedin /></a></li>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()}  All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
