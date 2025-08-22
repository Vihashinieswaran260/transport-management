import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    studentId: "",
    email: "",
    department: "",
    year: "",
    route: "",
    type: [],
    description: "",
    otherText: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "type") {
      setForm((prevForm) => {
        const updatedType = checked
          ? [...prevForm.type, value]
          : prevForm.type.filter((item) => item !== value);
        return { ...prevForm, type: updatedType };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback. Our team will respond via email.");
    setForm({
      studentId: "",
      email: "",
      department: "",
      year: "",
      route: "",
      type: [],
      description: "",
      otherText: "",
      file: null,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        py: 6,
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 2,
          p: 4,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Feedback or Queries? Fill in the form below:
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Student ID / Register Number"
            name="studentId"
            value={form.studentId}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            select
            label="Department"
            name="department"
            value={form.department}
            onChange={handleChange}
            margin="normal"
          >
            {["IT", "CSE", "ECE", "MECH"].map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            label="Year of Study"
            name="year"
            value={form.year}
            onChange={handleChange}
            margin="normal"
          >
            {["I", "II", "III", "IV"].map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Route / Destination"
            name="route"
            value={form.route}
            onChange={handleChange}
            margin="normal"
          />
          <Typography variant="body1" sx={{ mb: 1 }}>
             General Query
          </Typography>
          
          <FormControlLabel
            control={
              <Checkbox
                checked={form.type.includes("Bus Timing Issue")}
                onChange={handleChange}
                name="type"
                value="Bus Timing Issue"
              />
            }
            label="Bus Timing Issue"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.type.includes("Safety Concern")}
                onChange={handleChange}
                name="type"
                value="Safety Concern"
              />
            }
            label="Safety Concern"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.type.includes("Route Suggestion")}
                onChange={handleChange}
                name="type"
                value="Route Suggestion"
              />
            }
            label="Route Suggestion"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.type.includes("Staff Complaint")}
                onChange={handleChange}
                name="type"
                value="Staff Complaint"
              />
            }
            label="Staff Complaint"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.type.includes("Others")}
                onChange={handleChange}
                name="type"
                value="Others"
              />
            }
            label="Others"
          />
          {form.type.includes("Others") && (
            <TextField
              fullWidth
              label="Please specify"
              name="otherText"
              value={form.otherText}
              onChange={handleChange}
              margin="normal"
            />
          )}
          <TextField
            fullWidth
            label="Message / Feedback Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="outlined" component="label" fullWidth sx={{ my: 2 }}>
            Attach File (optional)
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
          <Button
            onClick={() => navigate("/student-dashboard")}
            variant="text"
            fullWidth
            sx={{ mt: 2 }}
          >
            Back
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default FeedbackForm;

