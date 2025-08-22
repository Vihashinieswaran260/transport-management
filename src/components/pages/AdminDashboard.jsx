import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VehicleDetailsDashboard from "./VehicleDetailsDashboard";
import Payment from "./Payment";
import Profile from "./Profile";
import AdminAnnouncement from "./AdminAnnouncement";
import DriverDetails from "./DriverDetails";

const AdminDashboard = () => {
  const [selected, setSelected] = useState("Overview");
  const navigate = useNavigate();

  const sidebarItems = [
    "Overview",
    "Apply Request Panel",
    "Cancel Request Panel",
    "Bus Tracking",
    "Announcement",
    "Vehicle List",
    "DriverDetails",
    "Payment",
    "User List",
    "Profile",
  ];

  const handleSidebarClick = (item) => {
    setSelected(item);
    switch (item) {
      case "Overview":
        navigate("/overview");
        break;
      case "Apply Request Panel":
        navigate("/apply-requests");
        break;
      case "Cancel Request Panel":
        navigate("/cancel-requests");
        break;
      case "Bus Tracking":
        navigate("/bus-tracking");
        break;
      case "Announcement":
        navigate("/admin-announcement");
        break;
      case "Vehicle List":
        navigate("/vehicles");
        break;
      case "DriverDetails":
        navigate("/driver-details");
        break;
      case "Payment":
        navigate("/payment");
        break;
      case "Profile":
        navigate("/profile");
        break;
      case "User List":
        navigate("/user-list");
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const renderContent = () => {
    switch (selected) {
      case "Vehicle List":
        return <VehicleDetailsDashboard />;
      case "Payment":
        return <Payment />;
      case "Profile":
        return <Profile />;
      case "Announcement":
        return <AdminAnnouncement />;
      case "DriverDetails":
        return <DriverDetails />;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" height="100vh" overflow="hidden">
      {/* Sidebar */}
      <Box
        width="250px"
        p={2}
        sx={{
          backgroundColor: "#1E3A8A",
          color: "white",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
        {sidebarItems.map((item) => (
          <Button
            key={item}
            fullWidth
            variant={selected === item ? "contained" : "outlined"}
            sx={{
              mb: 1,
              borderRadius: "8px",
              backgroundColor: selected === item ? "#F97316" : "transparent",
              color: "white",
              borderColor: "white",
              justifyContent: "flex-start",
              textTransform: "none",
              fontWeight: selected === item ? "bold" : "normal",
              "&:hover": {
                backgroundColor: "#F97316",
              },
            }}
            onClick={() => handleSidebarClick(item)}
          >
            {item}
          </Button>
        ))}

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#EF4444",
            color: "#fff",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#C62828",
            },
          }}
          onClick={handleLogout}
        >
          LOGOUT
        </Button>
      </Box>

      {/* Main Content */}
      <Box
        flex={1}
        p={4}
        sx={{
          position: "relative",
          backgroundImage: "url('/dashboard-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {renderContent()}

        {/* Emergency Contact Box */}
        <Box
          sx={{
            position: "absolute",
            bottom: 80,
            right: 20,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "10px",
            padding: "16px",
            color: "#fff",
            width: "250px",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#FFD700" }}>
            Emergency Contact
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Phone:</strong> 9629628502
          </Typography>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 2, fontWeight: "bold" }}
            href="tel:9629628502"
          >
            CALL NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
