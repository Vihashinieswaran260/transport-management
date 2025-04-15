import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Signup from "./components/pages/Signup";
import StudentDashboard from "./components/pages/StudentDashboard";
import StaffDashboard from "./components/pages/StaffDashboard"; // 👈 Add this file
import AdminDashboard from "./components/pages/AdminDashboard";
import ApplyTransport from "./components/pages/ApplyTransport";
import CancelTransport from "./components/pages/CancelTransport";
import BusTrack from "./components/pages/BusTrack";
import Announcement from "./components/pages/Announcement";
import ApplyRequests from "./components/pages/ApplyRequests";
import CancelRequests from "./components/pages/CancelRequests";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 Auth Pages */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🧑‍🎓 Student Pages */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/apply-transport" element={<ApplyTransport />} />
        <Route path="/cancel-transport" element={<CancelTransport />} />

        {/* 👨‍🏫 Staff/Employee Pages */}
        <Route path="/staff-dashboard" element={<StaffDashboard />} /> {/* ✅ */}

        {/* 🧑‍💼 Admin Pages */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apply-requests" element={<ApplyRequests />} />
        <Route path="/cancel-requests" element={<CancelRequests />} />

        {/* 🌍 Common Pages */}
        <Route path="/bus-track" element={<BusTrack />} />
        <Route path="/announcements" element={<Announcement />} />
        <Route path="/home" element={<Home />} />

        {/* ❓ 404 Page */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
