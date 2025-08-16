import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import LoginForm from '../Elements/LoginForm';
import RegisterForm from '../Elements/RegisterForm';
import {authimg} from '../assets/imageAssets';
import Navbar from '../Elements/Navbar';
function Authpage() {
    const location = useLocation();
  return (
    <>
    <Navbar/>
    <div className="container mt-3">
    {/* Selection Tabs  */}
    <div className="d-flex justify-content-center mb-3 border-bottom">
      <NavLink to="/login" className="nav-link px-4" style={({ isActive }) => ({
        borderBottom: isActive ? '2px solid #00bcd4' : 'none',
        color: isActive ? '#00bcd4' : 'black',
        fontWeight: 'bold'
      })}>
        Login
      </NavLink>
      <NavLink to="/register" className="nav-link px-4" style={({ isActive }) => ({
        borderBottom: isActive ? '2px solid #00bcd4' : 'none',
        color: isActive ? '#00bcd4' : 'black',
        fontWeight: 'bold'
      })}>
        Register
      </NavLink>
    </div>
    {/* Selection Tabs khtm */}

    {/* Content layout */}
    <div className="container">
  <div className="row justify-content-center align-items-center mt-3">
    {/* Left image area */}
    <div className="col-md-5 d-none d-md-block">
      <img
        src={authimg}
        alt="Login Visual"
        className="img-fluid" 
      />
    </div>

    {/* Right form area */}
    <div className="col-md-5 col-sm-12">
    {location.pathname === '/login' && <LoginForm />}
    {location.pathname === '/register' && <RegisterForm />}
    </div>
  </div>
</div>

  </div>
  </>
  );
}

export default Authpage