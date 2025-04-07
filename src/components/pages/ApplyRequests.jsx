import React, { useState } from "react";
import { TextField, Button, Typography, MenuItem, Box, Grid } from "@mui/material";

const ApplyRequests = () => {
  const roles = ["Student", "Staff"];

  const [role, setRole] = useState("Student");
  const [nameLabel, setNameLabel] = useState("Student Name");

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setNameLabel(selectedRole === "Staff" ? "Staff Name" : "Student Name");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 700,
          bgcolor: "white",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
        >
          Apply for Transport
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Select Role"
              value={role}
              onChange={handleRoleChange}
            >
              {roles.map((r) => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label={nameLabel} fullWidth required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="ID" fullWidth required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" fullWidth required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Department" fullWidth required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Application"
              fullWidth
              required
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Address" fullWidth required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Pickup Point" fullWidth required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Drop Point" fullWidth required />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ApplyRequests;
