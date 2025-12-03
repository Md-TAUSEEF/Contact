import { FaHome, FaPhone, FaServicestack, FaUser, FaRegEdit, FaAddressCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../StoreToken/StoreToken"; 
import "./Navbar.css";


function Navbar() {
  const { token, logoutUser,user } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="Nav_cnt">
      <div className="nav_mid">

        <div className="nav_midleft">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/contact"><FaPhone /> Contact</Link></li>
          <li><Link to="/service"><FaServicestack /> Service</Link></li>
          <li><Link to="/about"><FaAddressCard /> About</Link></li>
        </div>

        <div className="nav_midright">
          {!token ? (
            // If user is NOT logged in
            <>
              <li><Link to="/login"><FaUser /> Login</Link></li>
              <li><Link to="/register"><FaRegEdit /> Register</Link></li>
            </>
          ) : (
            // If user IS logged in
            <>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
    
        </div>

      </div>
    </div>
  );
}

export default Navbar;
