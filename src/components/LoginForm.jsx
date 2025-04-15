import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // default selected role

  const handleLogin = (e) => {
    e.preventDefault();

    // Manual login logic based on role
    if (role === 'admin' && username === 'admin001@shanmugha.edu.in' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (role === 'student' && username === 'student001@shanmugha.edu.in' && password === 'pass123') {
      localStorage.setItem('userName', 'Student');
      navigate('/student-dashboard');
    } else if (role === 'staff' && username === 'staff001@shanmugha.edu.in' && password === 'staff123') {
      localStorage.setItem('userName', 'Staff');
      navigate('/staff-dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleGoogleLogin = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const email = decoded.email;

      const userData = {
        name: decoded.name,
        email: decoded.email,
        photo: decoded.picture,
        role: role, // use selected role
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('userName', decoded.name);

      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'staff') {
        navigate('/staff-dashboard');
      }
    } catch (err) {
      console.error("Google Login Error:", err);
      alert("Google Login Failed");
    }
  };

  return (
    <div className="login-card">
      <div style={{ textAlign: 'center' }}>
        <img src="/logo.png" alt="College Logo" style={{ width: '220px', marginBottom: '10px' }} />
        <h2 className="login-title">Login</h2>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        {/* ✨ Role Dropdown */}
        <select value={role} onChange={(e) => setRole(e.target.value)} className="role-dropdown">
          <option value="student">Student</option>
          <option value="staff">Staff / Employee</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="link">Forgot Password?</a>
        </div>

        <button type="submit" className="login-button">Login</button>

        <div className="or-divider">OR</div>

        <div className="google-login-button">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log('Google Login Failed');
              alert("Google Login Failed");
            }}
          />
        </div>

        <div className="login-links">
          Don’t have an account?
          <a href="/signup" className="link"> Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;









