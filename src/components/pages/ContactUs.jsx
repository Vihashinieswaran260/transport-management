import React from 'react';
import { Box, Typography, TextField, Paper, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleSubmit = () => {
    // You can add submission logic here
    alert("Form submitted!");
  };

  return (
    <Box sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', p: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        variant="outlined"
        sx={{ mb: 2 }}
      >
        Back
      </Button>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>CONTACT US</Typography>
        <Typography variant="h6" gutterBottom>Need Help? Reach Out to Us</Typography>
        <Typography paragraph>
          We’re here to assist you with your transport-related queries, feedback, and support needs:
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">ADDRESS</Typography>
        <Typography paragraph>
          Sri Shanmugha College of Engineering and Technology,<br />
          Sankari to Tiruchengode Road,<br />
          Morur, Salem Dt.,<br />
          Tamil Nadu – 637304
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">PHONE</Typography>
        <Typography paragraph>+91-XXXXXXXXXX (Transport Coordinator)</Typography>

        <Typography variant="subtitle1" fontWeight="bold">EMAIL</Typography>
        <Typography paragraph>transport@sriset.ac.in</Typography>

        <Typography variant="subtitle1" fontWeight="bold">OFFICE HOURS</Typography>
        <Typography paragraph>Monday to Saturday: 9:00 AM – 5:00 PM</Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Feedback or Queries? Fill in the form below:
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone Number" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" fullWidth multiline rows={4} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ContactUs;
