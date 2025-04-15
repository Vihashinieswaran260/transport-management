import React from 'react';
import LoginForm from '../LoginForm';

const LoginPage = () => {
  const backgroundStyle = {
    backgroundImage: "url('/college-bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;




