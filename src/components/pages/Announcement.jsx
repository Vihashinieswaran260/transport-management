// src/components/pages/Announcement.jsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Announcement = () => {
  const navigate = useNavigate();

  const announcements = [
    { id: 1, title: "Route 1 delay", message: "Bus will arrive 15 mins late due to traffic." },
    { id: 2, title: "New pickup point", message: "New pickup added near Main Street." },
    { id: 3, title: "Holiday Notice", message: "No transport service on April 14th (Holiday)." },
  ];

  const handleBack = () => {
    navigate("/student-dashboard");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 5, boxShadow: 3, borderRadius: 2, bgcolor: "#fff" }}>
      <Button onClick={handleBack} variant="outlined" sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h5" gutterBottom>
        Announcements 📢
      </Typography>

      <List>
        {announcements.map((announcement) => (
          <ListItem key={announcement.id} sx={{ mb: 2, bgcolor: "#f0f4ff", borderRadius: 1 }}>
            <ListItemText
              primary={<strong>{announcement.title}</strong>}
              secondary={announcement.message}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Announcement;

