import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import StudentDashboard from "./components/pages/StudentDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";
import ApplyTransport from "./components/pages/ApplyTransport";
import CancelTransport from "./components/pages/CancelTransport";
import BusTrack from "./components/pages/BusTrack";
import Announcement from "./components/pages/Announcement";
import ApplyRequests from "./components/pages/ApplyRequests";
import CancelRequests from "./components/pages/CancelRequests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apply-transport" element={<ApplyTransport />} />
        <Route path="/cancel-transport" element={<CancelTransport />} />
        <Route path="/bus-track" element={<BusTrack />} />
        <Route path="/announcements" element={<Announcement />} />
        <Route path="/apply-requests" element={<ApplyRequests />} />
        <Route path="/cancel-requests" element={<CancelRequests />} />
      </Routes>
    </Router>
  );
}

export default App;
















