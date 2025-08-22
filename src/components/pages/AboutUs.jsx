import React from 'react';
import { Box, Typography, Paper, List, ListItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Back Button */}
        <Button
          variant="text"
          onClick={() => navigate('/student-dashboard')}
          sx={{ mb: 2 }}
        >
          Back
        </Button>

        <Typography variant="h5" gutterBottom>ABOUT US</Typography>

        <Typography variant="h6" gutterBottom>
          Welcome to Sri Shanmugha College Transport Services
        </Typography>

        <Typography paragraph>
          At Sri Shanmugha College of Engineering and Technology, we are committed to providing a reliable, safe, and convenient transport facility to all students and staff members. Our transport system connects multiple routes covering surrounding towns and villages, ensuring timely pick-ups and drop-offs.
        </Typography>

        <Typography variant="h6" gutterBottom>OUR MISSION</Typography>
        <Typography paragraph>
          To ensure every student and faculty member experiences hassle-free commuting, with an emphasis on safety, punctuality, and comfort.
        </Typography>

        <Typography variant="h6" gutterBottom>OUR VISION</Typography>
        <Typography paragraph>
          To become a model campus with a smart and efficient transport system that supports academic excellence through accessible travel.
        </Typography>

        <Typography variant="h6" gutterBottom>KEY FEATURES</Typography>
        <List>
          <ListItem>• Regularly maintained buses</ListItem>
          <ListItem>• Experienced and trained drivers</ListItem>
          <ListItem>• Multiple boarding points</ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default AboutUs;
