import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaUser, 
  FaWeight, 
  FaHeartbeat, 
  FaChartLine, 
  FaListAlt,
  FaArrowUp,
  FaArrowDown,
  FaThermometerHalf,
  FaTint,
  FaCalendarAlt,
  FaBell,
  FaFileAlt,
  FaPills,
  FaStethoscope,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle
} from "react-icons/fa";
import axios from 'axios';

function DoctorDashboard() {

  // Fetching data from sessionStorage - Under development - nivesh
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const id = sessionStorage.getItem("userId");
        const res = await axios.get(`http://localhost:8000/api/users/${id}`);
        setUser(res.data.value);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUserData();
  }, []);
  
  if (!user) {
    return <p>Loading...</p>;
  }
  

  const cardStyle = {
      backdropFilter: "blur(10px) saturate(180%)",
   WebkitBackdropFilter: "blur(10px) saturate(180%)",
   backgroundColor: "rgba(250, 252, 255, 0.53)",
   borderRadius: "12px",
   border: "1px solid rgba(247, 241, 241, 0.56)",
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease'
  };

  const profileCardStyle = {
    ...cardStyle,
     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
    ,border: 'none'
  };

  const profileImageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(255,255,255,0.3)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  };

  const activityItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #f0f0f0',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    marginRight: '12px',
    fontSize: '1.3rem'
  };

  return (
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div style={profileCardStyle}>
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center">
                <img src={user?.image? `http://localhost:8000/image/users/${user.image}`: "http://localhost:8000/image/users/doctor.jpg" }alt={user?.fullName || "Doctor"}style={profileImageStyle}className="me-4"/>

                  <div>
                    <h2 className="mb-2" style={{color:"wheat"}}>Welcome back, {user.fullName} </h2>
                    <p className="mb-1 opacity-100 ">Doctor ID: {(user._id).slice(-8)} | Email:{user.email} | Speciality:{user.speciality}</p>
                    {/* <p className="mb-0 opacity-75">Last Visit:July 15, 2025 | Next Appointment: Aug 18, 2025</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <div className="d-flex flex-column align-items-end">
                  <span className="badge bg-light text-dark mb-2">Active Doctor</span>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-light btn-sm">
                      <FaBell style={{marginRight: '4px'}} />
                      Notifications
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Main Content Row */}
      <div className="row g-4" style={{alignItems: 'stretch'}}>
        {/* Left Column - Recent Activity */}
        <div className="col-lg-8">
  <div style={{ ...cardStyle, height: '100%' }}>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="mb-0" style={{ color: "" }}>
        <FaListAlt style={iconStyle} />
        Activity Tab
      </h4>
      <button className="btn btn-outline-light btn-sm">View All</button>
    </div>
    <marquee direction="up" scrollamount="5" style={{ height: '400px' }}>
    <div>
      <div style={activityItemStyle}>
        <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
          <FaCalendarAlt />
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">New Appointment Added 🔔</h6>
          <p className="mb-1">Orthopedic consultation scheduled for Mr. ABC</p>
          <small>Aug 07, 2025 - 11:00 AM</small>
        </div>
        <span className="badge bg-info">Scheduled</span>
      </div>

      <div style={activityItemStyle}>
        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
          <FaStethoscope />
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">Check Recent Patients</h6>
          <p className="mb-1">View recent patients and visit summaries</p>
          <small>Aug 07, 2025 - 10:15 AM</small>
        </div>
        <span className="btn btn-success btn-sm">Check</span>
      </div>

      <div style={activityItemStyle}>
        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
          <FaFileAlt />
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">Download Patient Logs</h6>
          <p className="mb-1">Export consultation reports for July 2025</p>
          <small>Aug 07, 2025 - 9:30 AM</small>
        </div>
        <span className="btn btn-sm btn-primary">Download</span>
      </div>

      <div style={activityItemStyle}>
        <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
          <FaBell />
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">Follow-Up Reminder Set</h6>
          <p className="mb-1">Reminder for follow-up with Ms. Aditi Sharma</p>
          <small>Aug 07, 2025 - 12:00 PM</small>
        </div>
        <span className="badge bg-warning">Reminder</span>
      </div>

      <div style={activityItemStyle}>
        <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
          <FaPills />
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">Reviewed Prescriptions</h6>
          <p className="mb-1">Reviewed and updated medications for 5 patients</p>
          <small>Aug 07, 2025 - 1:00 PM</small>
        </div>
        <span className="badge bg-secondary">Reviewed</span>
      </div>
      <div style={activityItemStyle}>
        <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
          <FaPills />
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">Reviewed Prescriptions</h6>
          <p className="mb-1">Reviewed and updated medications for 5 patients</p>
          <small>Aug 07, 2025 - 1:00 PM</small>
        </div>
        <span className="badge bg-secondary">Reviewed</span>
      </div>
    </div>
    </marquee>
  </div>
</div>


        {/* Right Column */}
        <div className="col-lg-4">
          {/* Today's Schedule */}
          {/* <div style={{...cardStyle, marginBottom: '20px'}}>
            <h5 className="mb-3">
              <FaClock style={iconStyle} />
              Today's Schedule
            </h5>
            <div>
              <div className="d-flex align-items-center mb-3 p-3" style={{border:'1px solid white', borderRadius: '8px'}}>
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '35px', height: '35px', fontSize: '0.9rem'}}>
                  <FaCheckCircle />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Listidan 10mg</h6>
                  <small>Taken at 8:00 AM</small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 p-3" style={{border:'1px solid white', borderRadius: '8px'}}>
                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '35px', height: '35px', fontSize: '0.9rem'}}>
                  <FaClock />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Metformin 500mg</h6>
                  <small>Due at 8:00 PM</small>
                </div>
              </div>

              <div className="d-flex align-items-center p-3" style={{border:'1px solid white', borderRadius: '8px'}}>
                <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '35px', height: '35px', fontSize: '0.9rem'}}>
                  <FaExclamationTriangle />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Aspirin 81mg</h6>
                  <small>Overdue - Take now</small>
                </div>
              </div>
            </div>
          </div> */}

          {/* Quick Actions */}
          <div style={{...cardStyle, marginBottom: '20px'}}>
            <h5 className="mb-3" style={{ color: "" }}>
              <FaListAlt style={iconStyle} />
              Quick Actions
            </h5>
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-sm">
                <FaCalendarAlt style={{marginRight: '8px'}} />
                New Appointment +
              </button>
              <button className="btn btn-outline-light btn-sm">
                <FaFileAlt style={{marginRight: '8px'}} />
                View Appointments
              </button>
              <button className="btn btn-outline-info btn-sm">
                <FaStethoscope style={{marginRight: '8px'}} />
                Contact Patient
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <FaBell style={{marginRight: '8px'}} />
                Set Reminders
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <FaPills style={{marginRight: '8px'}} />
                 Portal support
              </button>
            </div>
          </div>

          {/* Health Summary */}
          <div style={cardStyle}>
            <h5 className="mb-3" style={{color:""}}>
              <FaInfoCircle style={iconStyle} />
              Notifications
            </h5>
            <div className="row text-center">
              <div className="col-6 mb-3">
                <div className="p-3" style={{ border:'1px solid white', borderRadius: '8px'}}>
                  <h4 className="text-success mb-1">4</h4>
                  <small className="">Active Patients</small>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="p-3" style={{border:'1px solid white', borderRadius: '8px'}}>
                  <h4 className="text-warning mb-1">2</h4>
                  <small className="">New Request</small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3" style={{border:'1px solid white', borderRadius: '8px'}}>
                  <h4 className="text-info mb-1">8</h4>
                  <small className="">Visits Today</small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3" style={{border:'1px solid white', borderRadius: '8px'}}>
                  <h4 className="text-danger mb-1">1</h4>
                  <small className="">Treatment</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
