import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/login-logo.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        navigate("/dashboard");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Login failed:", errorCode, errorMessage);
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="login-background flex items-center justify-center min-h-screen font-poppins">
      <ToastContainer />
      <div className="login-card flex flex-col items-center justify-center py-6 px-4 sm:py-10 sm:px-8 w-full sm:w-auto">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
