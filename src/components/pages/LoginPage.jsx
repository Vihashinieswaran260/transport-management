import React from "react";
import LoginForm from "../LoginForm"; // adjust the path if needed

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/college-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;













