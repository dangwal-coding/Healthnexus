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
import { Link } from 'react-router-dom';

function PatientDashboard() {

  //Booking appointment feature - nivesh 
  const [showForm, setShowForm] = useState(false);
  const [speciality, setSpeciality] = useState('');
  const [preferredDate, setpreferredDate] = useState('');
  const [reason, setReason] = useState('');
  const [idCard, setIdCard] = useState(null);
  const patientId = sessionStorage.getItem("userId");

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("patientId", patientId);
    formData.append("speciality", speciality);
    formData.append("preferredDate", preferredDate);
    formData.append("reason", reason);
    if (idCard) formData.append("idCard", idCard);

    await axios.post("http://localhost:8000/api/appointments/create", formData);
    alert("Appointment request sent");
    setShowForm(false);
  };



  //Fetching data from user collections
  const [user, setUser] = useState("");

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
    , border: 'none'
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
    <div className="container-fluid " >
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12" style={{ border: "none" }}>
          <div style={profileCardStyle}>
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center">
                <img src={user?.image? `http://localhost:8000/image/users/${user.image}`: "http://localhost:8000/image/users/pati.jpeg" }alt={user?.fullName || "Doctor"}style={profileImageStyle}className="me-4"/>
                  <div>
                    <h2 className="mb-2">Welcome back {user.fullName} </h2>
                    <p className="mb-1 opacity-75">Patient ID: {(user._id).slice(-8)}</p>
                    <p className="mb-0 opacity-75">Last Visit:July 15, 2025 | Next Appointment: Aug 18, 2025</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <div className="d-flex flex-column align-items-end">
                <Link to="/find-doctor"> <span className="badge text-white mb-2">Were you looking for a specific doctor?</span></Link>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-light btn-sm">
                      <FaBell style={{ marginRight: '4px' }} />
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
      <div className="row g-4 " style={{ alignItems: 'stretch' }}>
        {/* Left Column - Recent Activity */}
        <div className="col-lg-8">
          <div style={{ ...cardStyle, height: '100%' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="mb-0">
                <FaListAlt style={iconStyle} />
                Recent Activity
              </h5>
            </div>

            <div>
              <div style={activityItemStyle}>
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                  <FaFileAlt />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1 fw-semibold">Blood Test Results Available</h6>
                  <p className="text-muted mb-1 fw-semibold">Complete blood count and cholesterol panel results are ready for review</p>
                  <small className="text-muted">Aug 05, 2025 - 10:30 AM</small>
                </div>
                <span className="badge bg-success">Completed</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                  <FaCalendarAlt />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Appointment Scheduled</h6>
                  <p className="text-muted mb-1">Cardiology consultation with Dr. Sarah Johnson</p>
                  <small className="text-muted">Aug 05, 2025- 2:00 PM</small>
                </div>
                <span className="badge bg-primary">Scheduled</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                  <FaPills />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Prescription Refilled</h6>
                  <p className="text-muted mb-1">Metformin 500mg prescription has been refilled</p>
                  <small className="text-muted">Aug 05, 2025 - 3:15 PM</small>
                </div>
                <span className="badge bg-warning">Refilled</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                  <FaStethoscope />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Doctor Consultation Completed</h6>
                  <p className="text-muted mb-1">Follow-up consultation with Dr. Michael Williams</p>
                  <small className="text-muted">Aug 05, 2025- 11:00 AM</small>
                </div>
                <span className="badge bg-info">Completed</span>
              </div>

              <div style={activityItemStyle}>
                <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                  <FaBell />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Medication Reminder</h6>
                  <p className="text-muted mb-1">Time to take your evening dose of Metformin</p>
                  <small className="text-muted">Aug 05, 2025 - 8:00 PM</small>
                </div>
                <span className="badge bg-secondary">Reminder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Quick Actions & Stats */}
        <div className="col-lg-4 ">
          {/* Today's Schedule */}
          <div style={{ ...cardStyle, marginBottom: '20px' }}>
            <h5 className="mb-3">
              <FaClock style={iconStyle} />
              Today's Schedule
            </h5>
            <div>
              <div className="d-flex align-items-center mb-3 p-3" style={{ backgroundColor: '#e7ffedff', borderRadius: '8px' }}>
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '35px', height: '35px', fontSize: '0.9rem' }}>
                  <FaCheckCircle />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Listidan 10mg</h6>
                  <small className="text-muted">Taken at 8:00 AM</small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 p-3" style={{ backgroundColor: '#fff3cd', borderRadius: '8px' }}>
                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '35px', height: '35px', fontSize: '0.9rem' }}>
                  <FaClock />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Metformin 500mg</h6>
                  <small className="text-muted">Due at 8:00 PM</small>
                </div>
              </div>

              <div className="d-flex align-items-center p-3" style={{ backgroundColor: '#f8d7da', borderRadius: '8px' }}>
                <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '35px', height: '35px', fontSize: '0.9rem' }}>
                  <FaExclamationTriangle />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">Aspirin 81mg</h6>
                  <small className="text-muted">Overdue - Take now</small>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ marginBottom: '20px' }}>
            <h5 className="mb-3">
              <FaListAlt style={iconStyle} />
              Quick Actions
            </h5>
            <div className="d-grid gap-4">
              <button className="btn btn-primary btn-lg" onClick={() => setShowForm(true)} style={{ border: "1px solid rgba(247, 241, 241, 0.56)" }}>
                <FaCalendarAlt style={{ marginRight: '8px' }} />
                Book Appointment
              </button>
              {showForm && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2000,
                  }}
                   >
                  <form
                    onSubmit={submitForm}
                    style={{
                      width: '450px',
                      padding: '30px',
                      borderRadius: '15px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      color: '#fff',
                    }}
                  >
                    <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Book Appointment</h3>

                    <label style={{ display: 'block', marginBottom: '5px' }}>Speciality Required</label>
                    <select
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        border: 'none',
                      }}
                    >
                      <option value="">Select</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Dermatology">Dermatology</option>
                    </select>

                    <label style={{ display: 'block', marginBottom: '5px' }}>Preferred date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setpreferredDate(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        border: 'none',
                      }}
                    />

                    <label style={{ display: 'block', marginBottom: '5px' }}>Reason</label>
                    <textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        border: 'none',
                        resize: 'none',
                        height: '80px',
                      }}
                    />

                    <label style={{ display: 'block', marginBottom: '5px' }}>Upload ID Card</label>
                    <input
                      type="file"
                      onChange={(e) => setIdCard(e.target.files[0])}
                      style={{
                        marginBottom: '20px',
                      }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <button
                        type="submit"
                        style={{
                          background: 'rgba(255, 255, 255, 0.3)',
                          border: 'none',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          color: '#fff',
                        }}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: 'none',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          color: '#fff',
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <button className="btn btn-primary btn-lg" style={{ border: "1px solid rgba(247, 241, 241, 0.56)" }}>
                <FaFileAlt style={{ marginRight: '8px' }} />
                View Medical Records
              </button>
              <button className="btn btn-primary btn-lg" style={{ border: "1px solid rgba(247, 241, 241, 0.56)" }}>
                <FaPills style={{ marginRight: '8px' }} />
                Request Prescription
              </button>
              <button className="btn btn-primary btn-lg" style={{ border: "1px solid rgba(247, 241, 241, 0.56)" }}>
                <FaBell style={{ marginRight: '8px' }} />
                Set Reminders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
