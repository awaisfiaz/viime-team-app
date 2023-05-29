import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sidebar-logo.svg";
import logoutIcon from "../assets/logout-icon.svg";

function Sidebar() {
  return (
    <div className="screen-background w-full sm:w-70">
      <div className="sidebar flex flex-col h-screen sticky top-0">
        <img src={logo} alt="Logo" className="m-4" />
        <Link to="/dashboard" className="sidebar-item">
          Dashboard
        </Link>
        <Link to="/projects" className="sidebar-item">
          Projects
        </Link>
        <Link to="/backers" className="sidebar-item">
          Backers
        </Link>
        <Link to="/project-categories" className="sidebar-item">
          Project Categories
        </Link>
        <Link
          to="/login"
          className="sidebar-item mt-auto flex justify-between items-center"
        >
          Logout
          <img src={logoutIcon} alt="Logout Icon" className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
