import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BusTrack = () => {
  const navigate = useNavigate();
  const [busNumber, setBusNumber] = useState("");
  const [busInfo, setBusInfo] = useState(null);
  const [error, setError] = useState("");

  const busDatabase = {
    "101": {
      route: "Route 1 - City Center",
      location: "Near Anna Nagar",
      status: "On Time",
    },
    "102": {
      route: "Route 2 - West End",
      location: "Koyambedu (Traffic)",
      status: "Delayed",
    },
    "103": {
      route: "Route 3 - East Station",
      location: "Crossed Perambur",
      status: "On Time",
    },
  };

  const handleTrack = () => {
    if (busDatabase[busNumber]) {
      setBusInfo(busDatabase[busNumber]);
      setError("");
    } else {
      setBusInfo(null);
      setError("Bus not found. Please check the number ❌");
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 500, mx: "auto", mt: 5, boxShadow: 3, borderRadius: 2, bgcolor: "#fff" }}>
      <Button onClick={() => navigate("/student-dashboard")} variant="outlined" sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h5" gutterBottom>
        Bus Tracking
      </Typography>

      <TextField
        label="Enter Bus Number"
        value={busNumber}
        onChange={(e) => setBusNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleTrack} fullWidth sx={{ mt: 2 }}>
        Track
      </Button>

      {busInfo && (
        <Box sx={{ mt: 3, p: 2, bgcolor: "#e3f2fd", borderRadius: 2 }}>
          <Typography><strong>Route:</strong> {busInfo.route}</Typography>
          <Typography><strong>Location:</strong> {busInfo.location}</Typography>
          <Typography><strong>Status:</strong> {busInfo.status}</Typography>
        </Box>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default BusTrack;



