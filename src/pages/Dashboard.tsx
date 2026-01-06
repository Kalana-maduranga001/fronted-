import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #071952 0%, #0a2472 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{
          borderBottom: '2px solid #071952',
          paddingBottom: '20px',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '32px',
            color: '#071952',
            margin: '0 0 10px'
          }}>Dashboard</h2>
          <p style={{
            fontSize: '18px',
            color: '#555',
            margin: '5px 0'
          }}>Welcome, <strong>{user.name}</strong></p>
          <p style={{
            fontSize: '14px',
            color: '#888',
            margin: '5px 0'
          }}>Role: <span style={{
            background: user.role === "admin" ? '#071952' : '#0a2472',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '600'
          }}>{user.role.toUpperCase()}</span></p>
        </div>

        {user.role === "admin" ? (
          <div>
            <h3 style={{ color: '#071952', marginBottom: '20px' }}>Admin Panel</h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button style={{
                padding: '12px 24px',
                background: '#071952',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>Manage Users</button>
              <button style={{
                padding: '12px 24px',
                background: '#071952',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>View Orders</button>
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ color: '#071952', marginBottom: '20px' }}>User Panel</h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button style={{
                padding: '12px 24px',
                background: '#0a2472',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>My Orders</button>
              <button style={{
                padding: '12px 24px',
                background: '#0a2472',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>Profile</button>
            </div>
          </div>
        )}

        <button 
          onClick={logout}
          style={{
            marginTop: '40px',
            padding: '12px 24px',
            background: 'white',
            color: '#071952',
            border: '2px solid #071952',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;