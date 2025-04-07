import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  Box,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ApplyTransport = () => {
  const [userType, setUserType] = useState("");
  const [route, setRoute] = useState("");
  const [address, setAddress] = useState("");
  const [pickupPoint, setPickupPoint] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userType && route && address && pickupPoint) {
      const date = new Date().toLocaleDateString();
      setSuccessMessage(`${userType} Transport applied successfully on ${date} 🎉`);
      // Backend integration here
    } else {
      setSuccessMessage("Please fill all fields ❗");
    }
  };

  const routes = ["Route 1 - City Center", "Route 2 - West End", "Route 3 - East Station"];

  return (
    <Box sx={{ p: 4, maxWidth: 500, mx: "auto", mt: 5, boxShadow: 3, borderRadius: 2, bgcolor: "#fff" }}>
      <Button onClick={() => navigate("/student-dashboard")} variant="outlined" sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h5" gutterBottom>Apply for Transport</Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel>User Type</InputLabel>
        <Select value={userType} onChange={(e) => setUserType(e.target.value)} label="User Type">
          <MenuItem value="Student">Student</MenuItem>
        </Select>
      </FormControl>

      <TextField
        select
        label="Select Route"
        value={route}
        onChange={(e) => setRoute(e.target.value)}
        fullWidth
        margin="normal"
      >
        {routes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth margin="normal" />
      <TextField label="Preferred Pickup Point" value={pickupPoint} onChange={(e) => setPickupPoint(e.target.value)} fullWidth margin="normal" />

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>

      {successMessage && (
        <Typography sx={{ mt: 2 }} color={successMessage.includes("successfully") ? "green" : "red"}>
          {successMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ApplyTransport;

