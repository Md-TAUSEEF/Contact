import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../StoreToken/StoreToken"; 

function Login() {
  const [loginUser, setLoginUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { setTokenValue } = useContext(AuthContext);

  const onChangeData = (e) => {
    let { name, value } = e.target;

    setLoginUser({
      ...loginUser,
      [name]: value
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log("User login data:", loginUser);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });

      if (response.ok) {
        const responseData = await response.json();

       
        if (responseData.token) {
          setTokenValue(responseData.token);
        }

        alert("User login successfully!");
        setLoginUser({ username: "", email: "", password: "" });

        navigate("/");
      } else {
        alert("User login failed");
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
    <div className="login_cnt">
      <div className="login_mid">

     
        <div className="login_midleft">
          <h1>Please Login Before Reading</h1>
          <p>Welcome to our Contact Page. We value your time and are here to assist you with any questions, feedback, or concerns. Please log in to reach out directly, and our support team will respond as quickly as possible.</p>
          <p>We’d love to hear from you! Whether you have a question, suggestion, or just want to say hello, this is the right place. Please log in to send us a message and stay connected.</p>
          <p>Have something to share with us? Please log in to use the contact page and connect with our team instantly.</p>
        </div>

        <div className="login_midright">
          <div className="login_midright1">
            <form onSubmit={submitLogin}>
              <label className="labeldata" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={loginUser.username}
                placeholder="Please enter your username"
                onChange={onChangeData}
                required
              />

              <label className="labeldata" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={loginUser.email}
                placeholder="Please enter your email"
                onChange={onChangeData}
                required
              />

              <label className="labeldata" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={loginUser.password}
                placeholder="Please enter your password"
                onChange={onChangeData}
                required
              />

              <div className="login_btn">
                <button className="btn" type="submit">
                  Login
                </button>
                <Link to="/register">
                  <button className="btn" type="button">
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
