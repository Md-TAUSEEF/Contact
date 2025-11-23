import { useEffect, useContext } from "react";
import { AuthContext } from "../StoreToken/StoreToken";
import { useNavigate } from "react-router-dom";

import "../Pages/Logout.css";

function Logout() {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    navigate("/login");
  }, [logoutUser, navigate]);

  return (
    <div className="logout-container">
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
