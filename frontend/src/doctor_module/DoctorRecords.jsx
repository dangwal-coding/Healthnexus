import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaFileAlt, 
  FaStethoscope, 
  FaChartLine, 
  FaDownload, 
  FaEye,
  FaPlus,
  FaBell,
  FaCalendarAlt,
  FaUserMd,
  FaClipboardList
} from "react-icons/fa";

function DoctorRecords() {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: 'none',
    marginBottom: '20px'
  };

  const reportItemStyle = {
    padding: '15px',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    marginBottom: '10px',
    backgroundColor: '#f8f9fa',
    transition: 'all 0.3s ease'
  };

  const vitalSignsChartStyle = {
    height: '200px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '15px',
    position: 'relative'
  };

  const diagnosisTagStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
    marginRight: '8px',
    marginBottom: '8px'
  };

  const iconStyle = {
    marginRight: '8px',
    fontSize: '1.2rem'
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Medical Records</h2>
      
      <div className="row">
        {/* Left Column - Reports and Notes */}
        <div className="col-lg-9">
          {/* Reports List */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaFileAlt style={iconStyle} />
              Medical Reports
            </h5>
            <div>
              <div style={reportItemStyle}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1">Blood Test Report</h6>
                    <p className="text-muted mb-2">Complete blood count, cholesterol, glucose levels</p>
                    <small className="text-muted">Date: Aug 15, 2025 | Status: Normal</small>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-success">Normal</span>
                    <br />
                    <small className="text-muted">Dr. Johnson</small>
                  </div>
                </div>
              </div>

              <div style={reportItemStyle}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1">Chest X-Ray Report</h6>
                    <p className="text-muted mb-2">Routine chest examination for respiratory assessment</p>
                    <small className="text-muted">Date: Aug 10, 2025 | Status: Clear</small>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-success">Clear</span>
                    <br />
                    <small className="text-muted">Dr. Williams</small>
                  </div>
                </div>
              </div>

              <div style={reportItemStyle}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1">ECG Report</h6>
                    <p className="text-muted mb-2">Electrocardiogram for heart rhythm analysis</p>
                    <small className="text-muted">Date: Aug 05, 2025 | Status: Normal</small>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-success">Normal</span>
                    <br />
                    <small className="text-muted">Dr. Smith</small>
                  </div>
                </div>
              </div>

              <div style={reportItemStyle}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1">MRI Scan - Brain</h6>
                    <p className="text-muted mb-2">Magnetic resonance imaging for neurological assessment</p>
                    <small className="text-muted">Date: July 28, 2025 | Status: Normal</small>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-success">Normal</span>
                    <br />
                    <small className="text-muted">Dr. Brown</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Notes */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaStethoscope style={iconStyle} />
              Doctor Notes
            </h5>
            <div>
              <div style={reportItemStyle}>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="mb-1">Cardiology Consultation</h6>
                    <small className="text-muted">Dr. Sarah Johnson | Aug 15, 2025</small>
                  </div>
                  <span className="badge bg-primary">Latest</span>
                </div>
                <p className="mb-2">
                  Patient shows improvement in blood pressure management. Current medication 
                  (Listidan 10mg) is working effectively. Continue with current dosage and 
                  lifestyle modifications. Follow-up in 3 months.
                </p>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <FaEye style={{marginRight: '4px'}} />
                    View Full Note
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FaDownload style={{marginRight: '4px'}} />
                    Download
                  </button>
                </div>
              </div>

              <div style={reportItemStyle}>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="mb-1">Endocrinology Review</h6>
                    <small className="text-muted">Dr. Michael Williams | Aug 10, 2025</small>
                  </div>
                  <span className="badge bg-secondary">Previous</span>
                </div>
                <p className="mb-2">
                  Diabetes management is stable. HbA1c levels are within target range. 
                  Continue Metformin as prescribed. Monitor blood glucose levels regularly.
                </p>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <FaEye style={{marginRight: '4px'}} />
                    View Full Note
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FaDownload style={{marginRight: '4px'}} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis Summary */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaClipboardList style={iconStyle} />
              Diagnosis Summary
            </h5>
            <div>
              <div style={{...diagnosisTagStyle, backgroundColor: '#e3f2fd', color: '#1976d2'}}>
                Hypertension (Primary)
              </div>
              <div style={{...diagnosisTagStyle, backgroundColor: '#e8f5e8', color: '#388e3c'}}>
                Type 2 Diabetes
              </div>
              <div style={{...diagnosisTagStyle, backgroundColor: '#fff3e0', color: '#f57c00'}}>
                Hyperlipidemia
              </div>
              <div style={{...diagnosisTagStyle, backgroundColor: '#fce4ec', color: '#c2185b'}}>
                Obesity
              </div>
            </div>
            <div className="mt-3">
              <h6>Current Status:</h6>
              <p className="text-muted">
                All conditions are well-managed with current medication regimen. 
                Patient is compliant with treatment plan and shows positive response to therapy.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Charts and Actions */}
        <div className="col-lg-3">
          {/* Vital Signs History Chart */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaChartLine style={iconStyle} />
              Vital Signs History
            </h5>
            <div style={vitalSignsChartStyle}>
              <svg width="100%" height="100%" viewBox="0 0 200 150">
                <path 
                  d="M10,120 L30,100 L50,110 L70,90 L90,105 L110,85 L130,95 L150,75 L170,80 L190,60" 
                  stroke="#2196f3" 
                  strokeWidth="3" 
                  fill="none"
                />
                <circle cx="10" cy="120" r="3" fill="#2196f3"/>
                <circle cx="30" cy="100" r="3" fill="#2196f3"/>
                <circle cx="50" cy="110" r="3" fill="#2196f3"/>
                <circle cx="70" cy="90" r="3" fill="#2196f3"/>
                <circle cx="90" cy="105" r="3" fill="#2196f3"/>
                <circle cx="110" cy="85" r="3" fill="#2196f3"/>
                <circle cx="130" cy="95" r="3" fill="#2196f3"/>
                <circle cx="150" cy="75" r="3" fill="#2196f3"/>
                <circle cx="170" cy="80" r="3" fill="#2196f3"/>
                <circle cx="190" cy="60" r="3" fill="#2196f3"/>
              </svg>
            </div>
            <div className="row text-center mt-3">
              <div className="col-4">
                <h6 className="text-success">120/80</h6>
                <small className="text-muted">BP</small>
              </div>
              <div className="col-4">
                <h6 className="text-info">72</h6>
                <small className="text-muted">HR</small>
              </div>
              <div className="col-4">
                <h6 className="text-warning">98.6°F</h6>
                <small className="text-muted">Temp</small>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaPlus style={iconStyle} />
              Quick Actions
            </h5>
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-sm">
                <FaFileAlt style={{marginRight: '8px'}} />
                Request New Report
              </button>
              <button className="btn btn-outline-success btn-sm">
                <FaDownload style={{marginRight: '8px'}} />
                Download All Records
              </button>
              <button className="btn btn-outline-info btn-sm">
                <FaUserMd style={{marginRight: '8px'}} />
                Contact Doctor
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <FaBell style={{marginRight: '8px'}} />
                Set Reminders
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <FaCalendarAlt style={{marginRight: '8px'}} />
                Schedule Follow-up
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FaBell style={iconStyle} />
              Recent Activity
            </h5>
            <div>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-2" 
                     style={{width: '30px', height: '30px', fontSize: '0.8rem'}}>
                  <FaFileAlt />
                </div>
                <div>
                  <small className="fw-bold">Blood Test Completed</small>
                  <br />
                  <small className="text-muted">Aug 15, 2025</small>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" 
                     style={{width: '30px', height: '30px', fontSize: '0.8rem'}}>
                  <FaStethoscope />
                </div>
                <div>
                  <small className="fw-bold">Doctor Note Added</small>
                  <br />
                  <small className="text-muted">Aug 10, 2025</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-2" 
                     style={{width: '30px', height: '30px', fontSize: '0.8rem'}}>
                  <FaDownload />
                </div>
                <div>
                  <small className="fw-bold">Report Downloaded</small>
                  <br />
                  <small className="text-muted">Aug 08, 2025</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRecords;
