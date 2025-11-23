import { NavLink } from "react-router-dom";  
import "../Pages/Error.css";

function Error() {
  return (
    <div className="error_cnt">
      <div className="error_mid">
        <h1>404</h1>
        <h3>SORRY! PAGE NOT FOUND</h3>
        <p>
          Oops! It seems like the page you're trying to access doesn't exist.
          If you believe there's an issue, feel free to report it and we'll look into it.
        </p>

        <div className="error_mid1">
          <NavLink to="/">RETURN HOME</NavLink>
          <NavLink to="/contact">REPORT PROBLEM</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Error;
