import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Projects from "./screens/Projects";
import Backers from "./screens/Backers";
import ProjectCategories from "./screens/ProjectCategories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/backers" element={<Backers />} />
        <Route path="/project-categories" element={<ProjectCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
