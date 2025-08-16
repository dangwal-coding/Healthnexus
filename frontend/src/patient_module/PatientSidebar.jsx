import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faChartBar,
  faFileAlt,
  faPills,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

function PatientSidebar() {
    const navigate = useNavigate();
    function handleLogout() {
        sessionStorage.clear();
        window.alert("Logged out");
        navigate('/login');
        localStorage.setItem('role', '');
      }


  const location = useLocation();

  const sidebarStyle = {
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '30px 20px',
    boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
    overflowY: 'auto',
    zIndex: 1000
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: '2px solid #34495e',
    textAlign: 'center',
    color: '#3498db',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  const navListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const navItemStyle = {
    marginBottom: '10px'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    color: '#bdc3c7',
    textDecoration: 'none',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#3498db',
    color: '#ffffff',
    boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
  };

  const iconStyle = {
    marginRight: '12px',
    fontSize: '1.2rem',
    width: '20px',
    textAlign: 'center'
  };

  const menuItems = [
    { path: '/patientlogin/patient-dash', label: 'Dashboard', icon: faChartBar },
    { path: '/patientlogin/patient-records', label: 'Records', icon: faFileAlt },
    { path: '/patientlogin/prescriptions', label: 'Prescriptions', icon: faPills },
    { path: '/patientlogin/patientapps', label: 'Appointments', icon: faCalendarAlt }
  ];

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        <FontAwesomeIcon icon={faStethoscope} />
        Health Nexus
      </div>

      <ul style={navListStyle}>
        {menuItems.map((item) => (
          <li key={item.path} style={navItemStyle}>
            <Link
              to={item.path}
              style={location.pathname === item.path ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.backgroundColor = '#34495e';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(5px)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.backgroundColor = '';
                  e.target.style.color = '';
                  e.target.style.transform = '';
                }
              }}
            >
              <span style={iconStyle}>
                <FontAwesomeIcon icon={item.icon} />
              </span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '20px',
        right: '20px',
        paddingTop: '20px',
        borderTop: '1px solid #34495e',
        textAlign: 'center'
      }}>
        <Link to="/"><button className="btn mb-3 btn-block text-white btn-primary" onClick={() => localStorage.setItem('role', 'patient')} style={{width: '100%'}}>Home</button></Link>
        <button onClick={handleLogout} className="btn btn-danger mb-3" style={{width: '100%'}}>Logout </button>
      </div>
     
    </div>

  );
}

export default PatientSidebar;
