import React, { useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import ApplyRequests from "./ApplyRequests";
import CancelRequests from "./CancelRequests";
import BusTrack from "./BusTrack";
import TollGate from "./TollGate";
import { useNavigate } from "react-router-dom"; // navigation import

const AdminDashboard = () => {
  const [selected, setSelected] = useState("Apply Requests");
  const [announcement, setAnnouncement] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate(); // initialize navigate

  const sidebarItems = [
    "Apply Requests",
    "Cancel Requests",
    "Bus Tracking",
    "Post Announcement",
    "Toll Gate Management",
  ];

  const handlePost = () => {
    if (announcement.trim()) {
      setSuccessMessage("Announcement posted successfully ✅");
      setAnnouncement("");
    } else {
      setSuccessMessage("Please enter an announcement ❗");
    }
  };

  const handleLogout = () => {
    // If you store auth in localStorage or sessionStorage, clear it here
    // localStorage.removeItem("token");
    // sessionStorage.clear();
    navigate("/"); // Redirect to login
  };

  const renderContent = () => {
    switch (selected) {
      case "Apply Requests":
        return <ApplyRequests />;
      case "Cancel Requests":
        return <CancelRequests />;
      case "Bus Tracking":
        return <BusTrack />;
      case "Post Announcement":
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Post Announcement
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={3}
              placeholder="Type your announcement here..."
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handlePost}>
              Post
            </Button>
            {successMessage && (
              <Typography
                sx={{ mt: 2 }}
                color={
                  successMessage.includes("successfully") ? "green" : "red"
                }
              >
                {successMessage}
              </Typography>
            )}
          </Box>
        );
      case "Toll Gate Management":
        return <TollGate />;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box width="250px" bgcolor="#004d40" p={2} color="white">
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
        {sidebarItems.map((item) => (
          <Button
            key={item}
            fullWidth
            variant={selected === item ? "contained" : "text"}
            sx={{
              mb: 1,
              backgroundColor: selected === item ? "#00796b" : "transparent",
              color: "white",
              justifyContent: "flex-start",
              textTransform: "none",
              "&:hover": { backgroundColor: "#00695c" },
            }}
            onClick={() => setSelected(item)}
          >
            {item}
          </Button>
        ))}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#c62828",
            "&:hover": { backgroundColor: "#b71c1c" },
          }}
          onClick={handleLogout} // Make logout work
        >
          Logout
        </Button>
      </Box>

      {/* Main Content */}
      <Box flex={1} p={4} bgcolor="#f0f0f0">
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "#0d47a1" }}
        >
          Sri Shanmugha Educational Institutions
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
          Welcome, Admin
        </Typography>

        {renderContent()}
      </Box>
    </Box>
  );
};

export default AdminDashboard;





