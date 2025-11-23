import { useState } from "react";
import "../Pages/Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const onChangeData = (e) => {
    let { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  const navigate=useNavigate();
const submitData = async (e) => {
  e.preventDefault();
  console.log("User Registered:", user);

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log("response", response);

    if (response.ok) {
      const responseData = await response.json();
      alert("User registered successfully!");
      console.log("Response Data:", responseData);
      setUser({ username: "", email: "", password: "" });
      navigate("/login")
    } else {
      console.error("Registration failed:", response.status);
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("Error while registering user:", error);
    alert("Something went wrong. Please try again later.");
  }
};

   
  

  return (
    <div className="register_cnt">
      <div className="register_mid">
        
 
        <div className="register_midleft">
          <h1>Please Read Before Register</h1>
          <p>
            Create your account to access all features and stay connected. Fill
            in your details to get started and enjoy a seamless experience with
            our platform.
          </p>
          <p>
            Join us today! Sign up to explore all the amazing features, stay
            updated, and connect with our community easily.
          </p>
          <p>
            Register now to create your account and start using our services
            instantly. It only takes a few moments!
          </p>
          <p>
            Be part of our community! Sign up to unlock exclusive features,
            personalized experiences, and stay in touch with us.
          </p>
          <p>
            Let’s get started! Register your account to enjoy all the cool
            features we have in store for you.
          </p>
        </div>

     
        <div className="register_midright">
          <div className="register_midright1">
            <form onSubmit={submitData}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Please enter your username"
                value={user.username}
                onChange={onChangeData}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Please enter your email"
                value={user.email}
                onChange={onChangeData}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Please enter your password"
                value={user.password}
                onChange={onChangeData}
                required
              />

              {/* Buttons */}
              <div className="register_btn">
                <Link to="/login">
                  <button className="btn" type="button">
                    Login
                  </button>
                </Link>
                <button className="btn" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;
