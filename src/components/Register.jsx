import React from 'react';

function Register() {
  return (
    <div className="register-container">
      <h2>Register New Account</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

