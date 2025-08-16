import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaPills, 
  FaFileAlt, 
  FaBell, 
  FaBolt, 
  FaChartBar, 
  FaClock,
  FaEye,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaBell as FaBellIcon,
  FaFileDownload,
  FaUserMd,
  FaCheck,
  FaExclamationTriangle,
  FaTimes
} from "react-icons/fa";

function Prescriptions() {
  const cardStyle = {
    backdropFilter: 'blur(12px) saturate(200%)',
    WebkitBackdropFilter: 'blur(12px) saturate(200%)',
    backgroundColor: 'rgba(255, 255, 255, 0.74)',
    borderRadius: '12px',
    border: "1px solid rgba(247, 241, 241, 0.56)",
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  };

  const prescriptionCardStyle = {
    padding: '15px',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    marginBottom: '15px',
    backgroundColor: '#f8f9fa',
    transition: 'all 0.3s ease'
  };

  const activePrescriptionStyle = {
    ...prescriptionCardStyle,
    borderLeft: '4px solid #28a745',
    backgroundColor: '#f8fff9'
  };

  const urgentStyle = {
    ...prescriptionCardStyle,
    borderLeft: '4px solid #dc3545',
    backgroundColor: '#fff5f5'
  };

  const pastPrescriptionStyle = {
    ...prescriptionCardStyle,
    borderLeft: '4px solid #6c757d',
    backgroundColor: '#f8f9fa',
    opacity: '0.8'
  };

  const doctorCardStyle = {
    padding: '12px',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px',
    border: '1px solid #bbdefb'
  };

  const reminderStyle = {
    padding: '10px',
    backgroundColor: '#fff3cd',
    borderRadius: '8px',
    border: '1px solid #ffeaa7',
    marginBottom: '10px'
  };

  const iconStyle = {
    marginRight: '8px',
    fontSize: '1.2rem'
  };

  return (
    <div style={{ width: '100%', padding: '20px 40px 20px 20px', margin: '0' }}>
      <h2 className="mb-4 text-dark fw-bold">Prescriptions</h2>
      
      <div style={{ display: 'flex', width: '100%', gap: '20px' }}>
        {/* Left Column - Active Prescriptions */}
        <div style={{ flex: '0 0 75%' }}>
          {/* Active Prescriptions */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaPills style={iconStyle} />
              Active Prescriptions
            </h5>
            
            {/* Listidan - Active */}
            <div style={activePrescriptionStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 text-success">Listidan 10mg</h6>
                  <p className="text-muted mb-1">Blood pressure medication</p>
                </div>
                <span className="badge bg-success">Active</span>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Dosage:</small>
                  <div className="fw-bold">1 tablet</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Frequency:</small>
                  <div className="fw-bold">Once daily</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Start Date:</small>
                  <div className="fw-bold">Dec 01, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">End Date:</small>
                  <div className="fw-bold">Jan 31, 2025</div>
                </div>
              </div>

              <div style={doctorCardStyle}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '40px', height: '40px'}}>
                      SJ
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold">Dr. Sarah Johnson</div>
                    <div className="text-muted small">Cardiology Department</div>
                    <div className="text-muted small">Phone: (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metformin - Active */}
            <div style={activePrescriptionStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 text-success">Metformin 500mg</h6>
                  <p className="text-muted mb-1">Diabetes management</p>
                </div>
                <span className="badge bg-success">Active</span>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Dosage:</small>
                  <div className="fw-bold">1 tablet</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Frequency:</small>
                  <div className="fw-bold">Twice daily</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Start Date:</small>
                  <div className="fw-bold">Nov 15, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">End Date:</small>
                  <div className="fw-bold">Feb 15, 2025</div>
                </div>
              </div>

              <div style={doctorCardStyle}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '40px', height: '40px'}}>
                      MW
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold">Dr. Michael Williams</div>
                    <div className="text-muted small">Endocrinology Department</div>
                    <div className="text-muted small">Phone: (555) 234-5678</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aspirin - Urgent Refill */}
            <div style={urgentStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 text-danger">Aspirin 81mg</h6>
                  <p className="text-muted mb-1">Blood thinner</p>
                </div>
                <span className="badge bg-danger">Refill Needed</span>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Dosage:</small>
                  <div className="fw-bold">1 tablet</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Frequency:</small>
                  <div className="fw-bold">Once daily</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Start Date:</small>
                  <div className="fw-bold">Oct 20, 2025</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">End Date:</small>
                  <div className="fw-bold">Dec 20, 2025</div>
                </div>
              </div>

              <div style={doctorCardStyle}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '40px', height: '40px'}}>
                      SJ
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold">Dr. Sarah Johnson</div>
                    <div className="text-muted small">Cardiology Department</div>
                    <div className="text-muted small">Phone: (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Prescriptions */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaFileAlt style={iconStyle} />
              Past Prescriptions
            </h5>
            
            <div style={pastPrescriptionStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1">Amoxicillin 500mg</h6>
                  <p className="text-muted mb-1">Antibiotic for respiratory infection</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <FaEye style={{marginRight: '4px'}} />
                    View
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FaDownload style={{marginRight: '4px'}} />
                    Download
                  </button>
                </div>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Dosage:</small>
                  <div className="fw-bold">1 capsule</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Frequency:</small>
                  <div className="fw-bold">Three times daily</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Duration:</small>
                  <div className="fw-bold">7 days</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Prescribed:</small>
                  <div className="fw-bold">Nov 10, 2025</div>
                </div>
              </div>

              <div style={doctorCardStyle}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '40px', height: '40px'}}>
                      MW
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold">Dr. Michael Williams</div>
                    <div className="text-muted small">General Medicine</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={pastPrescriptionStyle}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1">Ibuprofen 400mg</h6>
                  <p className="text-muted mb-1">Pain relief medication</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <FaEye style={{marginRight: '4px'}} />
                    View
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FaDownload style={{marginRight: '4px'}} />
                    Download
                  </button>
                </div>
              </div>
              
              <div className="row mb-2">
                <div className="col-md-3">
                  <small className="text-muted">Dosage:</small>
                  <div className="fw-bold">1 tablet</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Frequency:</small>
                  <div className="fw-bold">As needed</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Duration:</small>
                  <div className="fw-bold">10 days</div>
                </div>
                <div className="col-md-3">
                  <small className="text-muted">Prescribed:</small>
                  <div className="fw-bold">Oct 25, 2025</div>
                </div>
              </div>

              <div style={doctorCardStyle}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '40px', height: '40px'}}>
                      EB
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold">Dr. Emily Brown</div>
                    <div className="text-muted small">Neurology Department</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Reminders and Actions */}
        <div style={{ flex: '0 0 25%' }}>
          {/* Refill Reminders */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaBell style={iconStyle} />
              Refill Reminders
            </h5>
            
            <div style={reminderStyle}>
              <div className="d-flex align-items-center mb-2">
                <span className="badge bg-danger me-2">Urgent</span>
                <h6 className="mb-0">Aspirin 81mg</h6>
              </div>
              <p className="mb-1 small">Refill needed by Dec 20, 2025</p>
              <small className="text-muted">Only 3 days remaining</small>
            </div>

            <div style={reminderStyle}>
              <div className="d-flex align-items-center mb-2">
                <span className="badge bg-warning me-2">Soon</span>
                <h6 className="mb-0">Listidan 10mg</h6>
              </div>
              <p className="mb-1 small">Refill needed by Jan 15, 2025</p>
              <small className="text-muted">29 days remaining</small>
            </div>

            <div style={reminderStyle}>
              <div className="d-flex align-items-center mb-2">
                <span className="badge bg-info me-2">Upcoming</span>
                <h6 className="mb-0">Metformin 500mg</h6>
              </div>
              <p className="mb-1 small">Refill needed by Jan 30, 2025</p>
              <small className="text-muted">44 days remaining</small>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaBolt style={iconStyle} />
              Quick Actions
            </h5>
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-sm">
                <FaPhone style={{marginRight: '8px'}} />
                Request Refill
              </button>
              <button className="btn btn-outline-success btn-sm">
                <FaEnvelope style={{marginRight: '8px'}} />
                Contact Doctor
              </button>
              <button className="btn btn-outline-info btn-sm">
                <FaCalendarAlt style={{marginRight: '8px'}} />
                Schedule Appointment
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <FaBellIcon style={{marginRight: '8px'}} />
                Set Reminders
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <FaFileDownload style={{marginRight: '8px'}} />
                Download All Prescriptions
              </button>
            </div>
          </div>


        
        </div>
      </div>
    </div>
  );
}

export default Prescriptions;
