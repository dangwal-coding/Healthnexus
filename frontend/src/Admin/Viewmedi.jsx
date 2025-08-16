import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const deleteMedicine = async (id, setMedicine) => {
  if (!window.confirm('Are you sure you want to delete this medicine?')) return;
  try {
    await axios.delete(`http://localhost:8000/medicine/${id}`);
    setMedicine(prev => prev.filter(m => m._id !== id));
  } catch (err) {
    alert('Delete failed: ' + (err?.message || err));
  }
};
function Viewmedi() {
    const [medicine, setMedicine] = useState([]);
     async function fetchMedicineData() {
        const response = await axios.get('http://localhost:8000/medicine');
        if (response.data.msg === "success") {
            setMedicine(response.data.value);
        }
    }
      useEffect(() => {
        fetchMedicineData();
      }, []);
  return (
    <div>
      <h2 className="mb-4 mt-5 text-center" style={{ fontWeight: 700, color: '#2d3748' }}>Medicine Section</h2>
              <div className="row justify-content-center">
                {medicine.map((n, i) => (
                  <div className="card shadow-sm mb-4 mx-3 border-0" style={{ width: "19rem", borderRadius: '16px', background: '#fff' }} key={i}>
                    <img src={`http://localhost:8000/public/image/medicine/${n.imageUrl}`} className="card-img-top" alt="..." style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: 600 }}>{n.name}</h5>
                      <p className="card-text" style={{ color: '#4a5568', minHeight: '48px' }}>{n.description}</p>
                      <p className="card-text mb-1"><b>Price:</b> {n.price}</p>
                      <p className="card-text mb-3"><b>Turnaround:</b> {n.turnaround}</p>
                      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link
                          className='btn btn-sm btn-warning'
                          style={{ minWidth: '70px' }}
                          to="/admin/Medicineadd"
                          state={{ type: 'medicine', data: n }}
                        >
                          Edit
                        </Link>
                        <button className='btn btn-sm btn-danger' style={{ minWidth: '70px' }} onClick={() => deleteMedicine(n._id, setMedicine)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    </div>
  )
}

export default Viewmedi
