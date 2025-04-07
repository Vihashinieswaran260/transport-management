import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId === "student001" && password === "pass123") {
      setMessage("Login Successful 🎉");
      setTimeout(() => navigate("/student-dashboard"), 1000);
    } else if (userId === "admin001" && password === "admin123") {
      setMessage("Welcome Back Admin 🧑‍💼");
      setTimeout(() => navigate("/admin-dashboard"), 1000);
    } else {
      setMessage("Invalid credentials ❌");
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/college-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        width: "350px"
      }}>
        <img src="/logo.png" alt="College Logo" style={{ width: "80px", marginBottom: "10px" }} />

        <h2>Transport Management</h2>

        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "100%"
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "15px", color: message.includes("Invalid") ? "red" : "green" }}>
          {message}
        </p>

        <button
          style={{
            background: "none",
            border: "none",
            color: "#1976d2",
            marginTop: "10px",
            fontSize: "14px",
            cursor: "pointer"
          }}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
