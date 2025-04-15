// pages/StudentDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#1a237e',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {user?.picture ? (
          <Avatar
            src={user.picture}
            alt={user.name}
            sx={{ width: 80, height: 80, marginBottom: '10px' }}
          />
        ) : (
          <Avatar sx={{ bgcolor: deepPurple[500], width: 80, height: 80, marginBottom: '10px' }}>
            {user?.name?.[0] || 'S'}
          </Avatar>
        )}

        <h3 style={{ marginBottom: '5px' }}>{user?.name || 'Student Panel'}</h3>
        <p style={{ fontSize: '0.8rem', marginBottom: '30px', color: '#ccc' }}>{user?.email}</p>

        <SidebarButton label="Apply Transport" onClick={() => navigate('/apply-transport')} />
        <SidebarButton label="Cancel Bus" onClick={() => navigate('/cancel-transport')} />
        <SidebarButton label="Track Bus" onClick={() => navigate('/bus-track')} />
        <SidebarButton label="Announcements" onClick={() => navigate('/announcements')} />
        <SidebarButton label="Logout" onClick={handleLogout} bgColor="#d32f2f" />
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, backgroundColor: '#f5f5f5', padding: '40px' }}>
        <h1 style={{ color: '#1a237e' }}>
          Welcome Back, {user?.name?.split(' ')[0] || 'Student'}! 🎓
        </h1>
        <p>Select an option from the menu to manage your transport easily.</p>
        <div style={{ marginTop: '30px' }}>
          <img src="/bus.png" alt="Bus" style={{ width: '400px', maxWidth: '100%' }} />
        </div>
      </div>
    </div>
  );
};

const SidebarButton = ({ label, onClick, bgColor }) => (
  <button
    onClick={onClick}
    style={{
      width: '100%',
      margin: '10px 0',
      padding: '12px',
      backgroundColor: bgColor || '#3949ab',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      textAlign: 'left'
    }}
  >
    {label}
  </button>
);

export default StudentDashboard;
