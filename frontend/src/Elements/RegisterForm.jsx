import React, { useState } from 'react';
import axios from 'axios';

 function RegisterForm() {
const[isDoctor,setisDoctor]=useState(false);
const [formData,setformData] = useState({
  fullName: '',
  dob: '',
  mobile: '',
  email: '',
  gender: '',
  password: '',
  type: 'patient',
  speciality: '', // default is patient register
  d_id: '',
  image: null
});
function handleDoctor(e) {
  e.preventDefault();
  const doctorId = prompt("Enter Doctor ID:");
  if (doctorId === "doctor123") {
    setformData(prev => ({ ...prev, type: "doctor" }));
    alert("Doctor registratsion mode enabled.");
      setisDoctor(true);
  } else if (doctorId !== null) {
    alert("Invalid Doctor ID");
  }
};
async function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData();
  Object.keys(formData).forEach(key => {
  if (key === "image") {
    if (formData.image) {
      data.append("image", formData.image);
    }
  } else {
    data.append(key, formData[key]);
  }
});

  try {
    const response = await axios.post(
      'http://localhost:8000/api/users/register',
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );

    if (response.data.msg === "success") {
      window.alert("Registration successful");
    }
  } catch (err) {
    console.error(err);
    alert("Registration failed");
  }
  
}

  return (
    <div className="p-4 border rounded shadow-sm bg-white mb-3">
      <div className="mb-3">
        <h4 className='text-info'>Join HealthNexus</h4>
        <p className="mb-0"> Are you a doctor?
       <a href="#" onClick={handleDoctor} style={{ color: "#f90", textDecoration: "none" }}> Register Here </a> </p>
      </div>
      <hr />
      <form action="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Full Name" style={{ fontWeight: 200 }}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input type="date" name='dob' value={formData.dob} onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="mm/dd/yyy" style={{ fontWeight: 200 }}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input type="number" name='mobile' value={formData.mobile} onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Mobile Number" style={{ fontWeight: 200 }}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" value={formData.email} onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Email" style={{ fontWeight: 200 }}/>
      </div>

         {/* Doctor Specific Fields */}
         {isDoctor && (
          <>
            <div className="mb-3">
              <label className="form-label">Speciality</label>
              <select name="speciality" value={formData.speciality}
                onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
                className="form-control">
                <option value="">Select Speciality</option>
                <option value="Cardiology">Cardiology (Heart)</option>
                <option value="Dermatology">Dermatology (Skin)</option>
                <option value="Pediatrics">Pediatrics (Children)</option>
                <option value="Orthopedics">Orthopedics (Bones & Joints)</option>
                <option value="Neurology">Neurology (Brain & Nerves)</option>
                <option value="Gynecology">Gynecology (Women's Health)</option>
                <option value="Dentistry">Dentistry (Teeth & Gums)</option>
                <option value="Ophthalmology">Ophthalmology (Eye Care)</option>
                <option value="Psychiatry">Psychiatry (Mental Health)</option>
                <option value="General Medicine">General Medicine</option>
              </select>
            </div>
 
            {/* Doctor ID */}
            <div className="mb-3">
              <label className="form-label">Doctor ID</label>
              <input type="text" name="d_id" value={formData.d_id}
                onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
                className="form-control" placeholder="Enter your Doctor ID" />
            </div>
          </>
        )}
           {/* Image Upload */}
           <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input type="file" name="image"
            onChange={(e) => setformData({ ...formData, image: e.target.files[0] })}
            className="form-control" accept="image/*" />
        </div>
      <div className="mb-3 text-center">
          <label className="form-label d-block">Gender</label>
          <div className="d-flex justify-content-center gap-5">
            <div className="d-flex align-items-center gap-1">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
              />
              <label htmlFor="male" className="mb-0">
                Male
              </label>
            </div>
            <div className="d-flex align-items-center gap-1">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
              />
              <label htmlFor="female" className="mb-0">
                Female
              </label>
            </div>
          </div>
        </div>
      <div className="mb-3">
        <label className="form-label">Create Password</label>
        <input type="password" name="password" value={formData.password} onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Password" style={{ fontWeight: 200 }}/>
      </div>
      <button className="btn btn-info w-100 text-white fw-bold">Register</button>
      </form>
    </div>
  );
}
export default RegisterForm