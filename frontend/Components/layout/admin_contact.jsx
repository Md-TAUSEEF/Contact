import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../StoreToken/StoreToken";
import "./AdminUser.css";

function AdminContact() {
  const { token } = useContext(AuthContext); 
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValues, setEditValues] = useState({
    username: "",
    email: "",
    message: ""
  });

  const getUserData = async () => {
    if (!token) {
      console.log("No token available, cannot fetch users");
      return; 
    }

    try {
      const response = await fetch("http://localhost:5000/api/admin/contact", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : []);
        console.log("Fetched users:", data);
      } else {
        console.log("Failed to fetch users, status:", response.status);
        setUsers([]);
      }
    } catch (err) {
      console.log("Error fetching users:", err);
      setUsers([]);
    }
  };

  useEffect(() => {
    getUserData();
  }, [token]);

  // Delete user locally
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  // Start editing
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValues({
      username: users[index].username,
      email: users[index].email,
      message: users[index].message
    });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues(prev => ({ ...prev, [name]: value }));
  };

  // Save edited user
  const saveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = {
      ...updatedUsers[editIndex],
      username: editValues.username,
      email: editValues.email,
      message: editValues.message
    };
    setUsers(updatedUsers);
    setEditIndex(null);
    setEditValues({ username: "", email: "", message: "" });
  };

  return (
    <div className="adminuser">
      <h2>Admin Users</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index} className="user-item">
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={editValues.username}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={editValues.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={editValues.message}
                    onChange={handleChange}
                  />
                  <button onClick={saveEdit}>Save</button>
                </>
              ) : (
                <>
                  <span>
                    {user.username} ({user.email}) - {user.message}
                  </span>
                  <button onClick={() => deleteUser(index)}>Delete</button>
                  <button onClick={() => startEdit(index)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default AdminContact;
