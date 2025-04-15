import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Typography, Paper, Box, Snackbar, Alert } from '@mui/material';

const ApplyTransport = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: '',
    fatherName: '',
    sinNumber: '',
    year: '',
    institution: '',
    scholarType: '',
    quota: '',
    mentor: '',
    busRoute: '',
    phoneNumber: ''
  });

  const [open, setOpen] = React.useState(false); // Snackbar state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application form submitted:', formData);
    setOpen(true); // Show success message
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ p: 4, width: '90%', maxWidth: '600px' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Transport Joining Application
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" name="name" label="Name" value={formData.name} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="fatherName" label="Father Name" value={formData.fatherName} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="sinNumber" label="Sin Number" value={formData.sinNumber} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="year" label="Year" value={formData.year} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="institution" label="Institution Name" value={formData.institution} onChange={handleChange} required />
          
          <TextField
            select
            fullWidth
            margin="normal"
            name="scholarType"
            label="Day Scholar / Hosteller"
            value={formData.scholarType}
            onChange={handleChange}
            required
          >
            <MenuItem value="Day Scholar">Day Scholar</MenuItem>
            <MenuItem value="Hosteller">Hosteller</MenuItem>
          </TextField>

          <TextField fullWidth margin="normal" name="quota" label="Quota" value={formData.quota} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="mentor" label="Mentor" value={formData.mentor} onChange={handleChange} required />

          <TextField
            select
            fullWidth
            margin="normal"
            name="busRoute"
            label="Bus Route"
            value={formData.busRoute}
            onChange={handleChange}
            required
          >
            <MenuItem value="Salem">Salem</MenuItem>
            <MenuItem value="Tiruchengode">Tiruchengode</MenuItem>
            <MenuItem value="Erode">Erode</MenuItem>
            <MenuItem value="Sankari">Sankari</MenuItem>
            <MenuItem value="Namakkal">Namakkal</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button variant="outlined" color="secondary" onClick={() => navigate('/student-dashboard')}>
              Back
            </Button>
            <Button variant="contained" type="submit">Submit</Button>
          </Box>
        </form>
      </Paper>

      {/* Snackbar Success Message */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Application submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ApplyTransport;





