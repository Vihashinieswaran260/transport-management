import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Announcement = () => {
  const navigate = useNavigate();

  const [announcementsList] = useState([]); // No dummy data
  const [showPastAnnouncements, setShowPastAnnouncements] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const togglePastAnnouncements = () => {
    setShowPastAnnouncements(!showPastAnnouncements);
  };

  const latestAnnouncement = announcementsList[0];

  return (
    <Box sx={{ padding: 3, backgroundColor: '#e0f7fa', minHeight: '100vh' }}>
      <Button onClick={handleBack} variant="outlined" sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Announcements
      </Typography>

      {/* Latest Announcement */}
      {latestAnnouncement ? (
        <Box sx={{ backgroundColor: '#b3e5fc', padding: 2, borderRadius: '8px', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Latest Update:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {latestAnnouncement.text}
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'gray' }}>
            {latestAnnouncement.date}
          </Typography>
        </Box>
      ) : (
        <Typography variant="body1" sx={{ mb: 3 }}>
          No announcements available.
        </Typography>
      )}

      {/* Toggle Past Announcements */}
      <Button
        variant="contained"
        color="secondary"
        onClick={togglePastAnnouncements}
        sx={{ mb: 3 }}
        disabled={announcementsList.length <= 1}
      >
        {showPastAnnouncements ? 'Hide Past Announcements' : 'Show Past Announcements'}
      </Button>

      {/* Past Announcements */}
      {showPastAnnouncements && announcementsList.length > 1 && (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Past Announcements:
          </Typography>
          <List>
            {announcementsList.slice(1).map((ann, index) => (
              <ListItem key={index}>
                <ListItemText primary={ann.text} secondary={ann.date} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default Announcement;
