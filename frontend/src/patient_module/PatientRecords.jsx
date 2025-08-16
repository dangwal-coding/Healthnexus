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

function PatientRecords() {
  const cardStyle = {
    backdropFilter: "blur(10px) saturate(180%)",
   WebkitBackdropFilter: "blur(10px) saturate(180%)",
   backgroundColor: "rgba(250, 252, 255, 0.53)",
   borderRadius: "12px",
   border: "1px solid rgba(247, 241, 241, 0.56)",
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  };

  const reportItemStyle = {
    backdropFilter: "blur(10px) saturate(180%)",
   WebkitBackdropFilter: "blur(10px) saturate(180%)",
   backgroundColor: "rgba(250, 252, 255, 0.45)",
    padding: '15px',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    marginBottom: '10px',
   
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
      <h2 className="mb-4 text-dark fw-bold">Medical Records</h2>
      
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
              <div style={{...diagnosisTagStyle, color: '#e3f2fd', backgroundColor: '#1976d2'}}>
                Hypertension (Primary)
              </div>
              <div style={{...diagnosisTagStyle, color: '#e8f5e8', backgroundColor: '#388e3c'}}>
                Type 2 Diabetes
              </div>
              <div style={{...diagnosisTagStyle, color: '#fff3e0', backgroundColor: '#f57c00'}}>
                Hyperlipidemia
              </div>
              <div style={{...diagnosisTagStyle, color: '#fce4ec', backgroundColor: '#c2185b'}}>
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
              <button className="btn btn-success btn-sm">
                <FaDownload style={{marginRight: '8px'}} />
                Download All Records
              </button>
              <button className="btn btn-info btn-sm">
                <FaUserMd style={{marginRight: '8px'}} />
                Contact Doctor
              </button>
              <button className="btn btn-secondary btn-sm">
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

export default PatientRecords;
