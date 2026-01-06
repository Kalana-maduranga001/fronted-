import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
