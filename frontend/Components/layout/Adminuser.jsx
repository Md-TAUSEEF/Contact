import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../StoreToken/StoreToken";
import "./AdminUser.css";

function AdminUser() {
  const { token } = useContext(AuthContext); 
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Fetch user data
  const getUserData = async () => {
    if (!token) {
      console.log("No token available, cannot fetch users");
      return; 
    }

    try {
      const response = await fetch("http://localhost:5000/api/admin/user", {
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
    setEditValue(users[index].username);
  };

  // Save edited user
  const saveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = {
      ...updatedUsers[editIndex],
      username: editValue,
    };
    setUsers(updatedUsers);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="adminuser">
      <h2>Admin Users</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={saveEdit} style={{ marginLeft: "5px" }}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>
                    {user.username} ({user.email})
                  </span>
                  <button
                    onClick={() => deleteUser(index)}
                    style={{ marginLeft: "5px" }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => startEdit(index)}
                    style={{ marginLeft: "5px" }}
                  >
                    Edit
                  </button>
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

export default AdminUser;
