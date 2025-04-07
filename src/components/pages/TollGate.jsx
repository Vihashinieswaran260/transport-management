// src/components/pages/TollGate.jsx

import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const TollGate = () => {
  const [gateName, setGateName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (gateName && amount) {
      setMessage("Toll Gate details submitted successfully ✅");
      setGateName("");
      setAmount("");
    } else {
      setMessage("Please fill all fields ❗");
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom>Toll Gate Management</Typography>
      <TextField
        fullWidth
        label="Toll Gate Name"
        value={gateName}
        onChange={(e) => setGateName(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>
      {message && (
        <Typography sx={{ mt: 2 }} color={message.includes("successfully") ? "green" : "red"}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default TollGate;
