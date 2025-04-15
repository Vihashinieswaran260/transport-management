import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '', // 👈 add role selection
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    console.log('Signup Data:', formData);

    // 🛣️ Navigate based on role
    switch (formData.role) {
      case 'Student':
        navigate('/student-dashboard');
        break;
      case 'Staff/Employee':
        navigate('/staff-dashboard');
        break;
      case 'Admin':
        navigate('/admin-dashboard');
        break;
      default:
        alert('Please select a valid role.');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Create Account
      </Typography>

      <TextField
        label="Full Name"
        name="name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={formData.password}
        onChange={handleChange}
      />

      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        fullWidth
        margin="normal"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Role</InputLabel>
        <Select
          name="role"
          value={formData.role}
          onChange={handleChange}
          label="Role"
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Staff/Employee">Staff/Employee</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSignup}>
        Signup
      </Button>

      <Divider sx={{ my: 2 }}>OR</Divider>

      <Button
        variant="outlined"
        fullWidth
        startIcon={
          <img
            src="path_to_google_logo.webp"
            alt="Google logo"
            style={{ width: 20, height: 20 }}
          />
        }
      >
        Continue with Google
      </Button>
    </Box>
  );
};

export default Signup;

