

import React from "react";
import { Outlet } from "react-router-dom";
import Docsidebar from "./Docsidebar";
import { doctor_back } from '../assets/imageAssets';
import "./Doctormain.css";
import Navbar from "../Elements/Navbar";

function Doctormain() {
  return (
    <>
    <Navbar/>
    <div className="doctor-main-wrapper" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "#f8f9fa",
          borderRight: "1px solid #ddd",
          padding: "20px 0",
          zIndex: 1100,
          height: "100vh",
        }}
      >
        <Docsidebar />
      </div>

      {/* Right Content */}
      <div
        style={{
          width: "100%",
          marginLeft: "250px",
          marginRight: 0,
          padding: "30px",
          minHeight: "100vh",
        backgroundColor: "#cfe9e3",
        backgroundImage: "radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%)"

        }}
      >
        <Outlet /> {/* Renders the selected child route */}
      </div>
    </div>
    </>
  );
}

export default Doctormain;
