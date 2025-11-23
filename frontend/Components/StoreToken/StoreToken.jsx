import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  // Save token and fetch user immediately
  const setTokenValue = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
    fetchUser(serverToken);
  };

  //logout the user
  const logoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  //authrization the user for autofill the data

  const fetchUser = async (authToken) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken || token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null);
        console.log("Error fetching current user data");
      }
    } catch (error) {
      console.log("Fetch user error:", error);
      setUser(null);
    }
  };

  // On app start, fetch user if token exists
  useEffect(() => {
    if (token) {
      fetchUser(token);
    }
  }, [token]);

  console.log(token)


  return (
    <AuthContext.Provider value={{ token, setTokenValue, logoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
