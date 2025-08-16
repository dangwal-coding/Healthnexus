import React, { useState } from 'react'

export default function BookingModal({ test, onClose }){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="modal show" tabIndex="-1" style={{display:'block', backgroundColor:'rgba(0,0,0,0.4)'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book: {test.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input className="form-control" value={name} onChange={e=>setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input className="form-control" value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
              <strong>Price:</strong> ₹{test.price}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={()=>{ alert('Booking placed'); onClose(); }}>Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  )
}
