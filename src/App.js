import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./components/pages/LoginPage";
import StudentDashboard from "./components/pages/StudentDashboard";
import StaffDashboard from "./components/pages/StaffDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";
import ApplyTransport from "./components/pages/ApplyTransport";
import CancelTransport from "./components/pages/CancelTransport";
import BusTrack from "./components/pages/BusTrack";
import ApplyRequests from "./components/pages/ApplyRequests";
import CancelRequests from "./components/pages/CancelRequests";
import Overview from "./components/pages/Overview";
import VehicleDetailsDashboard from "./components/pages/VehicleDetailsDashboard";
import DriverDetails from "./components/pages/DriverDetails";
import Payment from "./components/pages/Payment";
import Profile from "./components/pages/Profile";
import TrackBus from "./components/pages/TrackBus";
import Announcement from "./components/pages/Announcement";
import AdminAnnouncement from "./components/pages/AdminAnnouncement";
import UserList from "./components/pages/UserList";

// Student Extras
import FeedbackForm from "./components/pages/FeedbackForm";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 Auth */}
        <Route path="/" element={<LoginPage />} />

        {/* 🎓 Student */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/apply-transport" element={<ApplyTransport />} />
        <Route path="/cancel-transport" element={<CancelTransport />} />
        <Route path="/track-bus" element={<TrackBus />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/student/feedback" element={<FeedbackForm />} />
        <Route path="/student/contact-us" element={<ContactUs />} />
        <Route path="/student/about-us" element={<AboutUs />} />

        {/* 👨‍🏫 Staff */}
        <Route path="/staff-dashboard" element={<StaffDashboard />} />

        {/* 🧑‍💼 Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apply-requests" element={<ApplyRequests />} />
        <Route path="/cancel-requests" element={<CancelRequests />} />
        <Route path="/vehicles" element={<VehicleDetailsDashboard />} />
        <Route path="/driver-details" element={<DriverDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/admin-announcement" element={<AdminAnnouncement />} />

        {/* Common */}
        <Route path="/bus-tracking" element={<BusTrack />} />
        <Route path="/overview" element={<Overview />} />

        {/* 404 */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
