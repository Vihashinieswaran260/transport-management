import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const CancelRequests = () => {
  const [role, setRole] = useState("Student");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [reason, setReason] = useState("");
  const [phone, setPhone] = useState("");
  const [busNumber, setBusNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic
    alert("Cancellation submitted!");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          maxWidth: 600,
          margin: "auto",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Cancel Transport Request
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            fullWidth
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Staff">Staff</MenuItem>
          </Select>

          <TextField
            label="Student/Staff Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="ID"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Reason for Cancellation"
            variant="outlined"
            multiline
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Phone Number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Bus Number"
            variant="outlined"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
            fullWidth
            required
          />

          <Button variant="contained" color="error" type="submit">
            Cancel Request
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CancelRequests;
