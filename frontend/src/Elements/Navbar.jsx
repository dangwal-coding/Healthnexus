import React, { useEffect, useState } from 'react';
import { brandImages } from '../assets/imageAssets';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    // Check if doctor page wrapper exists in DOM
    const isDoctorPage = typeof window !== 'undefined' && document.querySelector('.doctor-main-wrapper');

    useEffect(() => {
        // Check login status from sessionStorage
        const token = sessionStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
        localStorage.setItem('role', '');
    };
    const handleViewProfile = () => {
        const role = sessionStorage.getItem('userType');
        if (role === 'admin') {
            navigate('/admin');
        } else if (role === 'patient') {
            navigate('/patientlogin/patient-dash');
        } else if (role === 'doctor') {
            navigate('/doctor-login');
        }
    };
    return (
        <div className="doctor-page-navbar">
            <header>
                {/* Top header section */}
                <div className='bg-info text-white text-center py-2'>
                    <p className='mb-0 fw-semibold'>++ Sign Up And Get Free Health Checkup Right Now ++</p>
                </div>
                {/* Second header section */}
                {/* Main navbar section - Bootstrap Navbar */}
                <nav
                    className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm"
                    style={isDoctorPage ? { marginLeft: '250px', width: 'calc(100% - 250px)' } : {}}
                >
                    <div className="container-fluid">
                        {/* Logo section */}
                        <Link to={'/'}>
                            <div className="navbar-brand d-flex align-items-center">
                                {/* <img src='./src/assets/images/logomain.png' alt="Logo" className="me-2" style={{ height: '50px', width: '50px' }} /> */}
                                <img src={brandImages.logo} alt="Logo GIF" style={{ height: '40px', width: '183px' ,borderRadius:'55px'}} />
                            </div>
                        </Link>
                        {/* Mobile toggle button */}
                        <button className="navbar-toggler border-info" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Navbar items */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto align-items-center me-5">
                                <li className="nav-item">
                                    <Link className="nav-link text-primary fw-semibold" to="/find-doctor">Find Doctors</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-primary fw-semibold" href="#"
                                        role="button" data-bs-toggle="dropdown">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/medicine'} className="dropdown-item" href="#">Pharmacy</Link></li>
                                        <li><Link to={'/labtest'} className="dropdown-item" href="#">Lab Tests</Link></li>
                                        {/* <li><Link  className="dropdown-item" href="#facilities">Our Facilities</Link></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-primary fw-semibold" href="#"
                                        role="button" data-bs-toggle="dropdown">
                                        Health Tools
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/bmi'} className='dropdown-item'>BMI calculator</Link></li>
                                        <li><Link to={'/bodyfat'} className='dropdown-item'>Body Fat calculator</Link></li>
                                    </ul>

                                </li>
                                <li className="nav-item">
                                    <Link to={'/blog'} className="nav-link text-primary fw-semibold">Blogs</Link>
                                </li>
                                <li className='nav-item'>
                                    {isLoggedIn ? (
                                        <div className="dropdown">
                                            <button className="btn rounded-circle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '40px', height: '40px', padding: 0 }}>
                                                <i class="fa-solid fa-circle-user" style={{ fontSize: '30px' }}></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                                <li><button className="dropdown-item" onClick={handleViewProfile}>View Profile</button></li>
                                                <li><button className="dropdown-item text-danger" onClick={handleLogout} >Logout</button></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link to={'/login'} className='fw-semibold rounded-3 btn btn-outline-primary mx-2'>Login/Register</Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
