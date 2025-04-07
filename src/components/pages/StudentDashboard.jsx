import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const features = [
    { label: "Apply Transport", route: "/apply-transport" },
    { label: "Cancel Transport", route: "/cancel-transport" },
    { label: "Bus Tracking", route: "/bus-track" },
    { label: "View Announcement", route: "/announcements" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          maxWidth: "400px",
          margin: "auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold", color: "#0D47A1" }}>
          Student Dashboard
        </Typography>

        {features.map((feature, index) => (
          <Button
            key={index}
            variant="contained"
            style={{ backgroundColor: "#0D47A1", margin: "10px 0", width: "100%" }}
            onClick={() => navigate(feature.route)}
          >
            {feature.label}
          </Button>
        ))}

        <Button
          variant="contained"
          color="error"
          style={{ marginTop: "20px", width: "100%" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default StudentDashboard;
