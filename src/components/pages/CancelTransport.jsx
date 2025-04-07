import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CancelTransport = () => {
  const [busNumber, setBusNumber] = useState("");
  const [cancelDate, setCancelDate] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleCancel = () => {
    if (busNumber && cancelDate && reason) {
      setMessage("Transport cancelled successfully ✅");
      // You can send this data to backend here
    } else {
      setMessage("Please fill all fields ❗");
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 500, mx: "auto", mt: 5, boxShadow: 3, borderRadius: 2, bgcolor: "#fff" }}>
      <Button onClick={() => navigate("/student-dashboard")} variant="outlined" sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h5" gutterBottom>
        Cancel Transport
      </Typography>

      <TextField
        fullWidth
        label="Bus Number"
        value={busNumber}
        onChange={(e) => setBusNumber(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        type="date"
        label="Cancellation Date"
        value={cancelDate}
        onChange={(e) => setCancelDate(e.target.value)}
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        fullWidth
        label="Reason for Cancellation"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        margin="normal"
        multiline
        rows={3}
      />

      <Button variant="contained" color="error" fullWidth onClick={handleCancel} sx={{ mt: 2 }}>
        Cancel Transport
      </Button>

      {message && (
        <Typography sx={{ mt: 2 }} color={message.includes("successfully") ? "green" : "red"}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default CancelTransport;



