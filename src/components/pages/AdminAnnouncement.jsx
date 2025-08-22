import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminAnnouncement = () => {
  const navigate = useNavigate();
  const [announcementsList, setAnnouncementsList] = useState([]);
  const [announcementInput, setAnnouncementInput] = useState('');
  const [showPastAnnouncements, setShowPastAnnouncements] = useState(true);

  const handleBack = () => {
    navigate(-1);
  };

  const handlePost = () => {
    if (!announcementInput.trim()) return;

    const newAnnouncement = {
      text: announcementInput.trim(),
      date: new Date().toLocaleString('en-GB'), // Get current date and time
    };

    setAnnouncementsList([newAnnouncement, ...announcementsList]);
    setAnnouncementInput(''); // Clear input field after posting
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#e0f7fa', minHeight: '100vh' }}>
      <Button onClick={handleBack} variant="outlined" sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Announcements
      </Typography>

      {/* Announcement Input */}
      <Box
        sx={{
          backgroundColor: '#b3e5fc',
          padding: 2,
          borderRadius: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Type your announcement here"
          multiline
          rows={3}
          fullWidth
          value={announcementInput}
          onChange={(e) => setAnnouncementInput(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePost}
          disabled={!announcementInput.trim()}
        >
          Post
        </Button>
      </Box>

      {/* Latest Announcement */}
      {announcementsList.length > 0 && (
        <Box
          sx={{
            backgroundColor: '#b2dfdb',
            padding: 2,
            borderRadius: 2,
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Latest Update:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>
            {announcementsList[0].text}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontStyle: 'italic', color: 'gray' }}
          >
            {announcementsList[0].date} {/* Display post date */}
          </Typography>
        </Box>
      )}

      {/* Past Announcements */}
      {announcementsList.length > 1 && (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Past Announcements:
          </Typography>
          <List>
            {announcementsList.slice(1).map((ann, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={ann.text}
                  secondary={ann.date} // Show date with each past announcement
                  sx={{
                    backgroundColor: '#f1f8e9',
                    borderRadius: 2,
                    padding: 1,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default AdminAnnouncement;
