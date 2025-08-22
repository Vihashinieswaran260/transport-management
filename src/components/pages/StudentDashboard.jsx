import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    // Show Emergency section after short delay
    const emergencyContactTimeout = setTimeout(() => {
      setShowEmergency(true);
    }, 500);

    return () => clearTimeout(emergencyContactTimeout);
  }, []);

  // Placeholder for student data – should be replaced with real user data (from context or API)
  const studentData = {
    name: '', // e.g., fetched from backend
    sin: '',
    dept: '',
    father: '',
    email: '',
    year: '',
    college: '',
    mobile: ''
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', height: '100%' }}>
        {/* Sidebar */}
        <div style={{
          width: '300px',
          backgroundColor: '#1E3A8A',
          color: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto'
        }}>
          <Avatar
            sx={{ bgcolor: deepPurple[500], width: 80, height: 80, mb: 1, cursor: 'pointer' }}
            onClick={() => setShowProfile(!showProfile)}
          >
            S
          </Avatar>

          <Button
            variant="outlined"
            onClick={() => setShowProfile(!showProfile)}
            fullWidth
            sx={{
              color: 'white',
              borderColor: 'white',
              mb: 2,
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '8px',
              backgroundColor: '#1E3A8A',
              '&:hover': {
                backgroundColor: '#3B82F6'
              }
            }}
          >
            Student Profile
          </Button>

          {showProfile && (
            <div style={{
              backgroundColor: 'white',
              color: '#333',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '20px',
              width: '100%',
              fontSize: '13px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}>
              <p><strong>Name:</strong> {studentData.name}</p>
              <p><strong>SIN:</strong> {studentData.sin}</p>
              <p><strong>Dept:</strong> {studentData.dept}</p>
              <p><strong>Father:</strong> {studentData.father}</p>
              <p><strong>Email:</strong> {studentData.email}</p>
              <p><strong>Year:</strong> {studentData.year}</p>
              <p><strong>College:</strong> {studentData.college}</p>
              <p><strong>Mobile:</strong> {studentData.mobile}</p>
            </div>
          )}

          <SidebarButton label="Apply Transport" onClick={() => navigate('/apply-transport')} />
          <SidebarButton label="Cancel Bus" onClick={() => navigate('/cancel-transport')} />
          <SidebarButton label="Track Bus" onClick={() => navigate('/track-bus')} />
          <SidebarButton label="Announcement" onClick={() => navigate('/announcement')} />
          <SidebarButton label="Feedback" onClick={() => navigate('/student/feedback')} />
          <SidebarButton label="Contact Us" onClick={() => navigate('/student/contact-us')} />
          <SidebarButton label="About Us" onClick={() => navigate('/student/about-us')} />
          <SidebarButton label="Logout" onClick={handleLogout} bgColor="#EF4444" />
        </div>

        {/* Right Content */}
        <div style={{
          flexGrow: 1,
          backgroundImage: 'url("/busBackground.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}>
          {showEmergency && (
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '15px',
              padding: '10px',
              width: '320px',
              color: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}>
              <h3 style={{ color: '#FBBF24', marginBottom: '10px' }}>Emergency Contact</h3>
              <p><strong>Phone:</strong> {studentData.mobile || 'Not Available'}</p>
              {studentData.mobile && (
                <a href={`tel:${studentData.mobile}`} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: '#10B981',
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      '&:hover': {
                        backgroundColor: '#059669'
                      }
                    }}
                  >
                    Call Now
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SidebarButton = ({ label, onClick, bgColor }) => (
  <Button
    fullWidth
    variant="contained"
    onClick={onClick}
    sx={{
      my: 1,
      backgroundColor: bgColor || '#1E3A8A',
      color: 'white',
      textTransform: 'none',
      fontWeight: 'bold',
      borderRadius: '10px',
      padding: '10px 18px',
      fontSize: '0.9rem',
      border: '2px solid white',
      transition: '0.3s',
      '&:hover': {
        backgroundColor: bgColor ? darkenColor(bgColor) : '#F97316'
      }
    }}
  >
    {label}
  </Button>
);

const darkenColor = (color) => {
  const amount = 20;
  const num = parseInt(color.replace("#", ""), 16);
  const r = Math.max((num >> 16) - amount, 0);
  const g = Math.max(((num >> 8) & 0x00FF) - amount, 0);
  const b = Math.max((num & 0x0000FF) - amount, 0);
  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
};

export default StudentDashboard;
