import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// Delete handlers
const deleteLabTest = async (id, setLab) => {
  if (!window.confirm('Are you sure you want to delete this lab test?')) return;
  try {
    await axios.delete(`http://localhost:8000/lab/${id}`);
    setLab(prev => prev.filter(l => l._id !== id));
  } catch (err) {
    alert('Delete failed: ' + (err?.message || err));
  }
};

function ViewLab() {
  const [lab, setLab] = useState([]);
  async function fetchLabData() {
    const response = await axios.get('http://localhost:8000/lab');
    if (response.data.msg === "success") {
      setLab(response.data.value);
    }
  }
  useEffect(() => {
    fetchLabData();
  }, []);
  return (
    <div>
        <div className="container">
        <h2 className="mb-4 text-center" style={{ fontWeight: 700, color: '#2d3748' }}>Lab Tests</h2>
        <div className="row justify-content-center">
          {lab.map((n, i) => (
            <div className="card shadow-sm mb-4 mx-3 border-0" style={{ width: "19rem", borderRadius: '16px', background: '#fff' }} key={i}>
              <img src={`http://localhost:8000/public/image/labtest/${n.imageUrl}`} className="card-img-top" alt="..." style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: 600 }}>{n.testName}</h5>
                <p className="card-text" style={{ color: '#4a5568', minHeight: '48px' }}>{n.description}</p>
                <p className="card-text mb-1"><b>Price:</b> {n.price}</p>
                <p className="card-text mb-3"><b>Turnaround:</b> {n.turnaround}</p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <Link
                    className='btn btn-sm btn-warning'
                    style={{ minWidth: '70px' }}
                    to="/admin/LabTestAdd"
                    state={{ type: 'lab', data: n }}
                  >
                    Edit
                  </Link>
                  <button className='btn btn-sm btn-danger' style={{ minWidth: '70px' }} onClick={() => deleteLabTest(n._id, setLab)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewLab
