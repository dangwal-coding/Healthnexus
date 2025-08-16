import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Appointment.css";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
const stripePromise = loadStripe("pk_test_51Rvv1xJCsoKPd0cPHYMfKkTlxO9rCXl0imzzbNmQrsGGBERPKi9ZHFQW65zXMfn9aRjwrtoxlAVZlneInRQR7RG800hkgTjiva");

export default function AppointmentPage() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [reason, setReason] = useState("");
  const [appointmentSent, setAppointmentSent] = useState(false);

  const nav = useNavigate();
  const appointmentSubmittedRef = useRef(false);

  // Fetch doctors
  useEffect(() => {
    fetch("http://localhost:8000/api/users/doctors")
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "success") {
          setDoctors(data.value);
          setFilteredDoctors(data.value);
          setSelectedDoctor(data.value[0] || null);
        }
      })
      .catch((err) => console.error(err));
  }, []);
// On mount → check if returning from Stripe payment 

  // Payment success handling
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const doctorData = JSON.parse(sessionStorage.getItem("selectedDoctor"));
    const formData = JSON.parse(sessionStorage.getItem("appointmentForm"));

    if (params.get("payment") === "success" && doctorData && formData && !appointmentSubmittedRef.current) {
      setSelectedDoctor(doctorData);
      setShowForm(true);

      const submitAfterPayment = async () => {
        if (appointmentSubmittedRef.current) return;
        appointmentSubmittedRef.current = true;

        try {
          await axios.post("http://localhost:8000/api/appointments/create/specific", {
            patientId: sessionStorage.getItem("userId"),
            doctorId: doctorData._id,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
            reason: formData.reason,
          });
          setAppointmentSent(true);
          alert("Appointment request sent");
        } catch (err) {
          console.error(err);
          alert("Failed to create appointment");
        } finally {
          // Only clear appointmentForm and appointmentSubmitted, not selectedDoctor
          sessionStorage.removeItem("appointmentForm");
          sessionStorage.removeItem("appointmentSubmitted"); 
          window.history.replaceState({}, document.title, "/find-doctor");
        }
      };

      submitAfterPayment();
    }
  }, []);

  const handleBookClick = (doctor) => {
    if (!sessionStorage.getItem("userId")) {
      window.alert("Please first Login to book");
      nav("/login");
      return;
    }
    setSelectedDoctor(doctor);
    setShowForm(true);
  };

  const handleFormChange = (field, value) => {
    if (field === "date") setPreferredDate(value);
    if (field === "time") setPreferredTime(value);
    if (field === "reason") setReason(value);

    const formData = {
      preferredDate: field === "date" ? value : preferredDate,
      preferredTime: field === "time" ? value : preferredTime,
      reason: field === "reason" ? value : reason,
    };
    sessionStorage.setItem("appointmentForm", JSON.stringify(formData));
  };
// Start payment
  const handlePayment = async () => {
    sessionStorage.setItem("selectedDoctor", JSON.stringify(selectedDoctor));
    try { const res = await axios.post("http://localhost:8000/api/payment/create-checkout-session", { doctorName: selectedDoctor.fullName, doctorFee: selectedDoctor.fee, });
     const stripe = await stripePromise; 
     await stripe.redirectToCheckout({ sessionId: res.data.id }); } 
     catch (err) { console.error(err); 
      alert("Error starting payment"); } };
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Just trigger payment, actual submission happens after success
        handlePayment();
      };
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = doctors.filter(
      (doc) =>
        doc.fullName.toLowerCase().includes(term.toLowerCase()) ||
        (doc.speciality || "").toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex min-vh-100 bg-light">
        <div className="flex-grow-1">
          {/* Header */}
          <div className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center shadow-sm">
            <h3 className="mb-0 fw-bold text-primary text-center"><FontAwesomeIcon icon={faStethoscope} />&nbsp;Find the Best Doctors</h3>
          </div>

          <div className="row g-0">
            {/* Doctor List */}
            <div className="col-9 p-4">
              <div className="d-flex justify-content-between align-items-center mb-4 ">
                <h5 className="fw-bold mb-0 text-center text-muted">Available Doctors</h5>
                <div className="input-group" style={{ width: "250px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctor"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e)}
                  />
                  <span className="input-group-text">🔍</span>
                </div>
              </div>

              <div className="row g-4">
                {filteredDoctors.map((doctor) => (
                  <div key={doctor._id} className="col-md-6">
                    <div
                      className="card h-100 border-0 shadow-sm rounded hover-card"
                      style={{ transition: "all 0.3s" }}
                    >
                      <div className="card-body doccard">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={
                              doctor.image
                                ? `http://localhost:8000/image/users/${doctor.image}`
                                : "http://localhost:8000/image/users/doctor.jpg"
                            }
                            alt={doctor.fullName}
                            className="rounded-circle me-3 border"
                            width="80"
                            height="80"
                            style={{ objectFit: "cover" }}
                          />
                          <div>
                            <h6 className="fw-bold mb-1">{doctor.fullName}</h6>
                            <small className="text-muted">{doctor.speciality || "N/A"}</small>
                          </div>
                        </div>
                        <p className="mb-1"><b>Experience:</b> {doctor.experience} years</p>
                        <p className="mb-1"><b>Qualification:</b> {doctor.qualification}</p>
                        <p className="mb-3"><b>Fee:</b> ₹{doctor.fee}</p>

                        <button className="btn btn-outline-primary w-100 mb-2" onClick={() => setSelectedDoctor(doctor)}>
                          View Details
                        </button>
                        <button className="btn btn-success w-100" onClick={() => handleBookClick(doctor)}>
                          Book Doctor
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
               {showForm && selectedDoctor && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 2000,
                    }}
                  >
                    <div
                      style={{
                        width: "450px",
                        padding: "30px",
                        borderRadius: "15px",
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        color: "#fff",
                      }}
                    >
                      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
                          Confirmation
                      </h3>

                      {appointmentSent ? (
                        <p style={{ textAlign: "center", fontWeight: "bold", color: "#0f0" }}>
                          Appointment request sent ✅ to the doctor. You will receive a confirmation soon.
                        </p>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <label>Preferred Date</label>
                          <input
                            type="date"
                            value={preferredDate}
                            onChange={(e) => handleFormChange("date", e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "none" }}
                          />

                          <label>Preferred Time</label>
                          <input
                            type="time"
                            value={preferredTime}
                            onChange={(e) => handleFormChange("time", e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "none" }}
                          />

                          <label>Reason</label>
                          <textarea
                            value={reason}
                            onChange={(e) => handleFormChange("reason", e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "none", resize: "none", height: "80px" }}
                          />

                          <button
                            type="submit"
                            style={{ background: "rgba(255, 255, 255, 0.3)", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", color: "#fff", width: "100%" }}
                          >
                            Complete Payment
                          </button>
                        </form>
                      )}

                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        style={{ background: "rgba(255, 255, 255, 0.1)", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", color: "#fff", width: "100%", marginTop: "10px" }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Detail Doctor */}
            <div className="col-3 bg-white border-start p-4 shadow-sm ">
              <h5 className="fw-bold text-center mb-3 text-primary ">Doctor Details</h5>
              {selectedDoctor ? (
                <>
                  <div className="text-center mb-3 text-muted">
                    <img
                      src={
                        selectedDoctor?.image
                          ? `http://localhost:8000/image/users/${selectedDoctor.image}`
                          : "http://localhost:8000/image/users/doctor.jpg"
                      }
                      alt={selectedDoctor?.fullName || "Doctor"}
                      className="rounded-circle shadow-sm border"
                      width="120"
                      height="120"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h5 className="text-center fw-bold text-muted">{selectedDoctor.fullName}</h5>
                  <p className="text-muted fw-semibold text-center ">{selectedDoctor.speciality || "N/A"}</p>
                  <p className="text-center fw-semibold text-muted"><small>{selectedDoctor.qualification}</small></p>
                  <hr />
                  <p className=""><b>Doctor ID:</b> {selectedDoctor.d_id}</p>
                  <p><b>Experience:</b> {selectedDoctor.experience} years</p>
                  <p><b>Consultation Fee:</b> ₹{selectedDoctor.fee}</p>
                  <p><b>Qualifications:</b> {selectedDoctor.qualification}</p>
                  <p><b>Available Days:</b></p>
                  <div className="d-flex flex-wrap gap-2 mb-3 text-muted">
                    {selectedDoctor.availableDays?.map((day, i) => (
                      <span key={i} className="badge day-badge">{day}</span>
                    ))}
                  </div>

                  <h6 className="fw-bold text-primary">Available Slots</h6>
                  {selectedDoctor.timeSlots?.length > 0 ? (
                    <div className="d-flex flex-wrap gap-2 text-muted">
                      {selectedDoctor.timeSlots.map((slot, index) => (
                        <span key={index} className="badge slot-badge">{slot}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted">No slots available</p>
                  )}

                  <div className="mt-4">
                    <h6 className="fw-bold text-primary">Book Appointment</h6>
                    <p className="text-muted">Select a date and time to book an appointment with {selectedDoctor.fullName}</p>
                    {/* Date and Time Picker Component */}
                  </div>
                  <div className="mt-4">
                    <h6 className="fw-bold text-primary">Doctor Description</h6>
                    <p className="text-muted">{selectedDoctor.description || "No description available"}</p>
                    <h6 className="fw-bold text-primary">Experience</h6>
                    <p className="text-muted">{selectedDoctor.experience || "No experience information available"}</p>
                  </div>
                </>
              ) : (
                <p className="text-muted">Select a doctor to see details</p>
              )}
            </div>




          </div>
        </div>
      </div>
      <Footer />

      {/* Custom CSS */}
      <style>
        {`
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 6px 20px rgba(0,0,0,0.1);
          }
          .day-badge, .slot-badge {
            background-color: #f8f9fa;
            color: #333;
            border: 1px solid #ddd;
            padding: 6px 10px;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .day-badge:hover, .slot-badge:hover {
            background-color: #0d6efd;
            color: white;
            border-color: #0d6efd;
          }

          .doccard {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border-radius: 10px; 
          border: 1px solid lightgrey;
          }

          .doccard:hover {
            transform: translateY(-5px); /* Slight lift on hover */
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Shadow effect */
          }
        `}
      </style>
    </>
  );
}
