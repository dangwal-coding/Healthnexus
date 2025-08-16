import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("patient");
  const navigate = useNavigate();
  async function handlesubmit(e) {
    e.preventDefault();
  const user = { email, password, type: loginType };
  const response = await axios.post('http://localhost:8000/api/users/login', user);
    const data = response.data;
    if (data.msg === "success") {

      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem("userType", data.type);
      sessionStorage.setItem("userId", data.userId);


      window.alert("Login successful!");
      if (data.type === "patient") {
        navigate('/patientlogin');
      } else if (data.type === "doctor") {
        navigate('/doctor-login');
      } else if (data.type === "admin") {
        console.log(data.type);
        navigate('/admin');
      } else {
        window.alert("Some error occurred contact with support");
        navigate('/login');
      }
    } else {
      window.alert("Login failed!");
    }
  }

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <form action="" onSubmit={handlesubmit}>
        <div className="mb-3">
          <h4 className='text-info'>Login</h4>
        </div>
        <hr />
        <div className="mb-3">
          <label className="form-label">Mobile Number / Email ID</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Mobile Number / Email ID" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" style={{ fontWeight: 200 }} />
        </div>

        <div className="mb-3">
          <label className="form-label">Login Type</label>
          <select className="form-select" aria-label="Login Type" value={loginType} onChange={e => setLoginType(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <Link className="text-decoration-none text-info ">Forgot password?</Link>
        </div>
        <input type="submit" value="Login" className='btn btn-primary form-control ' />
      </form>
    </div>
  );
}
export default LoginForm
