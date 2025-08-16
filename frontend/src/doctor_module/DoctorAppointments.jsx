import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrescriptionForm from './PrescriptionForm';
import { 
  faCalendarAlt, 
  faFileAlt, 
  // faChartBar, 
  // faClock,
  // faEye,
  // faDownload,
  // faMapMarkerAlt,
  // faCalendarDay
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function DoctorAppointments() {


  //Booking appointment feature -nivesh dont interfare 
  const doctorId = sessionStorage.getItem("userId");
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);

  // Complete appointment popup state
  // const [showCompleteForm, setShowCompleteForm] = useState(false);
  // const [completeRemarks, setCompleteRemarks] = useState('');
  // const [completeId, setCompleteId] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/appointments/doctor/${doctorId}`)
      .then(res => setPendingAppointments(res.data));
    
      axios.get(`http://localhost:8000/api/appointments/doctor/${doctorId}/accepted`)
      .then(res => setAcceptedAppointments(res.data));
    
  }, []);

  const respondToAppointment = async (id, status) => {
    const date = status === 'accepted' ? prompt("Enter appointment date (dd-mm-yyyy)") : null;
    try {
      const res = await axios.put(`http://localhost:8000/api/appointments/${id}/respond`, {
        status, appointmentDate: date ,doctorId
      });
      if (res.status === 200) {
        alert(`Appointment ${status} successfully!`);
        alert(`Email has been sent to the patient`);
      }
      window.location.reload();
    } catch (err) {
      alert(`Failed to update appointment: ${err.response?.data?.error || err.message}`);
    }
  };
    function cancelAppointment(id) {
      axios.delete(`http://localhost:8000/api/appointments/${id}`)
        .then(res => {
          alert(res.data.msg);
          // refresh data if needed
        })
        .catch(() => {
          alert("Error deleting appointment");
        });
    }

    // Complete appointment handler - immediately update status in DB
    function handleCompleteClick(id, status) {
      if (status === 'completed') {
        axios.put(`http://localhost:8000/api/appointments/${id}/respond`, {
          status: 'completed',
          doctorId
        })
          .then(res => {
            alert(res.data.msg || 'Appointment marked as complete!');
            window.location.reload();
          })
          .catch((err) => {
            alert('Error completing appointment: ' + (err.response?.data?.error || err.message));
          });
      }
    }

    // function submitCompleteForm(e) {
    //   e.preventDefault();
    //   axios.put(`http://localhost:8000/api/appointments/${completeId}/respond`, {
    //     status: 'completed',
    //     doctorId
    //   })
    //     .then(res => {
    //       alert(res.data.msg || 'Appointment marked as complete!');
    //       setShowCompleteForm(false);
    //       setCompleteId(null);
    //       window.location.reload();
    //     })
    //     .catch((err) => {
    //       alert('Error completing appointment: ' + (err.response?.data?.error || err.message));
    //     });
    // }


  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    marginBottom: '20px'
  };
  
  const appointmentCardStyle = {
    padding: '15px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    marginBottom: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  };
  
  const upcomingStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #28a745',
    backgroundColor: 'rgba(40, 167, 69, 0.1)'
  };
  
  
  const urgentStyle = {
    ...appointmentCardStyle,
    borderLeft: '4px solid #dc3545',
    backgroundColor: 'rgba(220, 53, 69, 0.1)'
  };

  const iconStyle = {
    marginRight: '8px',
    fontSize: '1.2rem'
  };

  return (
    <div style={{ width: '100%', padding: '20px 40px 20px 20px', margin: '0' }}>
      <div className="row" style={cardStyle}>
        <div className="col-4">
        <h2 className="mb-2 text-center bold" style={{color:'Black'}}>Appointments</h2>
        </div>
        <div className="col-8 text-end">
          <div className="btn btn-large btn-outline-warning">ADD NEW APPOINTMENT</div>
        </div>
      </div>
      <div className="row">
        {/* Left Column - Appointments List */}
        <div className="col-lg-12">
          {/* Upcoming Appointments */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} style={iconStyle} />
              Pending Appointments
            </h5>
            
            {pendingAppointments.map(a => (
    <div key={a._id} style={urgentStyle} className="mb-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          <h6 className="mb-1 text-danger">REASON : {a.reason}</h6>
          <p className="text-muted mb-1">
            <b>Patient: {a.patientId?.fullName}</b>
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-4">
          <small className="text-muted">Preferred Date:</small>
          <div className="fw-bold">
          {a.preferredDate}
          </div>
        </div>
        {/* <div className="col-md-4">
          <small className="text-muted">Time:</small>
          <div className="fw-bold">
            {a.time || 'N/A'}
          </div>
        </div> */}
        <div className="col-md-4 d-flex gap-2 align-items-center">
          <button
            className="btn btn-sm btn-success"
            onClick={() => respondToAppointment(a._id, 'accepted')}
          >
            Accept
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => respondToAppointment(a._id, 'rejected')}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  ))}

          </div>

          {/* Past Appointments */}
          <div style={cardStyle}>
            <h5 className="mb-3">
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              Upcoming Appointments
            </h5>
            
            {acceptedAppointments.map(a => (
    <div key={a._id} style={upcomingStyle} className="mb-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          <h6 className="mb-1">{a.reason || 'No reason provided'}</h6>
          <p className="text-muted mb-1">
            Patient: {a.patientId?.fullName || 'Unknown'}
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <small className="text-muted">Date:</small>
          <div className="fw-bold">
            {a.appointmentDate
              ? new Date(a.appointmentDate).toLocaleDateString()
              : 'N/A'}
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => cancelAppointment(a._id)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-sm ms-2"
              onClick={() => handleCompleteClick(a._id,'completed')}
            >
              Complete
            </button>
        </div>
      </div>
    </div>
  ))}
          </div>
        </div>        
      </div>
  </div>
  );
}

export default DoctorAppointments;
