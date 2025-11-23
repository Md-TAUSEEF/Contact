import { useState, useEffect, useContext } from "react";
import "./Contact.css";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../StoreToken/StoreToken";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

function Contact() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 
  console.log("this is user side data",user)

  const [formData, setFormData] = useState(defaultContactFormData);

  // Auto-fill form whenever user data changes
  
  useEffect(() => {
  if (user && user.msg) {
    setFormData({
      username: user.msg.username || "",
      email: user.msg.email || "",
      message: "",
    });
  }
}, [user]);


  console.log("this is formate data",formData);

  // Handle input change
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Contact form submitted successfully!");
        setFormData(defaultContactFormData);
        navigate("/");
      } else {
        alert("Error submitting contact form.");
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
    }
  };

  return (
    <div className="contact_cnt">
      <h1>CONTACT ME</h1>
      <hr />
      <div className="contact_mid">
        <div className="contact_midleft">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Please enter your name"
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Please enter your email"
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Please enter your message"
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact_midright">
          <div className="contact_midrow1">
            <h1>Tauseef Khan</h1>
            <p>UI/UX Designer & Web Developer</p>
          </div>
          <div className="contact_midrow1">
            <h1>Phone</h1>
            <p>+91-7255005301</p>
          </div>
          <div className="contact_midrow1">
            <h1>Email</h1>
            <p>mdtauseefkhan38@gmail.com</p>
          </div>
          <div className="contact_midrow1">
            <h1>Youtube</h1>
            <p>Dsk Technology</p>
          </div>
          <div className="contact_midrow11">
            <ul>
              <li><a href="/"><FaSquareFacebook /></a></li>
              <li><a href="/"><FaInstagram /></a></li>
              <li><a href="/"><IoLogoYoutube /></a></li>
              <li><a href="/"><FaSquareGithub /></a></li>
              <li><a href="/"><FaLinkedin /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101435.2480482762!2d77.17132484192497!3d28.60577819334049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd18df89b215%3A0xdd57369e29bf9d96!2sJama%20Masjid!5e1!3m2!1sen!2sin!4v1758341592071!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ margin: "20px 0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Contact;
