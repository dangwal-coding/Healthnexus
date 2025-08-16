
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Medicineadd() {
  const location = useLocation();
  const editData = location.state?.type === 'medicine' ? location.state.data : null;
  const [name, setName] = useState(editData ? editData.name : '');
  const [description, setDescription] = useState(editData ? editData.description : '');
  const [price, setPrice] = useState(editData ? editData.price : '');
  const [turnaround, setTurnaround] = useState(editData ? editData.turnaround : '');
  const [imageUrl, setImage] = useState(null);

  // If user navigates directly to edit, or state changes, update fields
  useEffect(() => {
    if (editData) {
      setName(editData.name || '');
      setDescription(editData.description || '');
      setPrice(editData.price || '');
      setTurnaround(editData.turnaround || '');
      // Don't set imageUrl here, as it's a file input
    }
  }, [editData]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('turnaround', turnaround);
    if (imageUrl) formData.append('image', imageUrl);

    let response;
    if (editData && editData._id) {
      // Editing existing medicine
      response = await axios.put(`http://localhost:8000/medicine/${editData._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } else {
      // Adding new medicine
      response = await axios.post('http://localhost:8000/medicine/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
    if (response.data.msg === "success") {
      window.alert(editData ? "Updated successfully" : "Added successfully");
      setName('');
      setDescription('');
      setPrice('');
      setTurnaround('');
      setImage(null);
    } else {
      window.alert(editData ? "Failed to update medicine" : "Failed to add medicine");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-80">
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
  <h2 className="mb-4 text-center">{editData ? 'Edit Medicine' : 'Add Medicine'}</h2>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Medicine Name</label>
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Enter medicine name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} id="description" placeholder="Enter description" rows={3} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} id="price" placeholder="Enter price" min="0" required />
          </div>
          <div className="mb-3">
            <label htmlFor="turnaround" className="form-label">Turnaround Time</label>
            <input type="text" className="form-control" value={turnaround} onChange={e => setTurnaround(e.target.value)} id="turnaround" placeholder="e.g. 24 hours" required />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input type="file" name='image' className="form-control" id="image" accept="image/*" onChange={e => setImage(e.target.files[0])} />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">{editData ? 'Update Medicine' : 'Add Medicine'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Medicineadd;
