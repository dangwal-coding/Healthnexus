import React from "react";
import Sidebar from "./PatientSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Elements/Navbar";

function PatientMain() {
  return (
    <>
    <Navbar/>
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
          padding: "20px",
          zIndex: 1100,
         
        }}
      >
        <Sidebar />
      </div>

      {/* Right Content */}
      <div
        style={{
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
    </>
  );
}

export default PatientMain;
