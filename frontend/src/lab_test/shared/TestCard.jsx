import React from 'react'
import { useNavigate } from "react-router-dom";
import './Test.css'
export default function TestCard({ test, onBook }){
    const nav = useNavigate();
    const handleBookClick = async () => {
    if (!sessionStorage.getItem("userId")) {
      window.alert("Please first Login to book");
      nav("/login");
      return;
    }
  };
  return (
    <div className="card h-100 test-card">
      <img src={test.image} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} alt={test.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{test.testName}</h5>
        <p className="card-text text-muted small mb-2">{test.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">₹{test.price}</div>
            <small className="text-success">{test.turnaround} turnaround</small>
          </div>
          <div>
            <button className="btn btn-sm btn-primary" onClick={() => { onBook(); handleBookClick(); }}>Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}
