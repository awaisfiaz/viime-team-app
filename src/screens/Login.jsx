import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/login-logo.svg";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-background flex items-center justify-center h-screen font-poppins">
      <div className="login-card flex flex-col items-center justify-center py-10 px-8">
        <img src={logo} alt="Logo" className="mb-4" />
        <p className="text-center text-gray-500 mb-8">
          Enter your email and password below
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 w-full border bg-white rounded"
            />
          </div>
          <div className="my-4">
            <hr className="border-t-0.5  border-gray-300" />
          </div>
          <div className="mb-8">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="px-4 py-2 w-full border bg-white rounded"
            />
          </div>
          <button
            type="submit"
            className="hover:bg-hover-btn w-full py-3 bg-black text-white rounded-lg text-center font-semibold"
          >
            Login
          </button>
          <p className="my-2 text-center text-gray-500 text-sm">
            Forgot password?
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
