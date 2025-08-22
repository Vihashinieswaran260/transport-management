import React from 'react';
import { Button, Card, CardContent, Typography, Avatar, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './Home.css';

const Home = () => {
  const adminInfo = {
    name: 'Admin Name',
    id: 'ADM001',
    email: 'admin@example.com',
    mobile: '9876543210',
  };

  const emergencyNumber = '108'; // You can change this to your preferred number

  return (
    <div className="home-container">
      <div className="image-section">
        <img
          src="/dashboard-bg.jpeg"
          alt="Admin Dashboard"
          className="dashboard-image"
        />
      </div>
      <div className="profile-section">
        <Card className="profile-card">
          <CardContent>
            <Avatar sx={{ width: 100, height: 100, margin: '0 auto' }} />
            <Typography variant="h6" align="center" mt={2}>
              {adminInfo.name}
            </Typography>
            <Typography variant="body2" align="center">
              ID: {adminInfo.id}
            </Typography>
            <Typography variant="body2" align="center">
              Email: {adminInfo.email}
            </Typography>
            <Typography variant="body2" align="center">
              Mobile: {adminInfo.mobile}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
              <Button variant="contained" startIcon={<EditIcon />}>
                Edit
              </Button>
            </div>

            {/* Emergency Section */}
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1" align="center" fontWeight="bold">
              Emergency Contact
            </Typography>
            <Typography variant="body1" align="center" color="error" fontWeight="bold">
              {emergencyNumber}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
