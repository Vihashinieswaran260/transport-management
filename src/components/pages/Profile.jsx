import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Initial profile data (can be fetched from backend)
  const [profileData, setProfileData] = useState({
    name: "Admin",
    email: "admin@example.com",
    role: "Administrator",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save profileData to backend
    console.log("Saved profile:", profileData);
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#e3f2fd", minHeight: "100vh" }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Card sx={{ p: 3, bgcolor: "#ffffff", position: "relative" }}>
        {/* Edit or Save Icon */}
        <IconButton
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          sx={{ position: "absolute", top: 16, right: 16 }}
          color="primary"
        >
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>

        <Typography variant="h5" gutterBottom>
          Admin Profile
        </Typography>

        {isEditing ? (
          <>
            <TextField
              label="Name"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={profileData.role}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </>
        ) : (
          <>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Name: {profileData.name}
            </Typography>
            <Typography variant="body1">Email: {profileData.email}</Typography>
            <Typography variant="body1">Role: {profileData.role}</Typography>
          </>
        )}
      </Card>
    </Box>
  );
};

export default Profile;
