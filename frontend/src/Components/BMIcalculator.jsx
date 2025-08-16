import React, { useState } from 'react';
import './BMI.css';
import Navbar from '../Elements/Navbar';

function BMIcalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState();
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState('');
  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter height and weight');
      return;
    }
    const heightInM = height / 100;
    const bmiValue = (weight / (heightInM * heightInM)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) { setDesc('Underweight'); setMessage('You are underweight. Consider consulting a healthcare provider about achieving a healthy weight.'); }
    else if (bmiValue >= 18.5 && bmiValue < 25) { setDesc('Normal'); setMessage('Great shape! By maintaining a healthy weight, you lower your risk of developing serious health problems.'); }
    else if (bmiValue >= 25 && bmiValue < 30) { setDesc('Overweight'); setMessage('Being overweight can lead to health issues. Consider a balanced diet and regular exercise.') }
    else { setDesc('Obese'); setMessage('Obesity increases your risk of health problems. Please consult a healthcare provider for guidance.') }
  };
  const resetForm = () => { setHeight(''); setWeight(''); setBmi(''); setDesc(''); setMessage(''); };

  return (
    <>
      <Navbar />
      <div className="container-fluid p-3 bmibody" >

    

      <div className="container mt-5 p-4 shadow rounded card">
        <div className="row align-items-center mb-4">
          <div className="col-md-3 text-center">
            <img className="img-fluid" src="https://www.iciciprulife.com/content/icici-prudential-life-insurance/tools-and-calculators/bmi_assets/images/Component21.svg" alt="BMI" />
          </div>
          <div className="col-md-9">
            <h1 className="display-5 fw-bold text-primary">BMI CALCULATOR</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()} className="bg-light p-4 rounded shadow-sm">
              <div className="mb-3">
                <label htmlFor='height' className="form-label">Enter the Height (cm)</label>
                <input type="number" id="height" className="form-control" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">Enter the Weight (kg)</label>
                <input type="number" id="weight" className="form-control" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-primary w-50" onClick={calculateBMI}>Calculate</button>
                <button type="button" className="btn btn-outline-secondary w-50" onClick={resetForm}>Reset</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <section className="output text-center p-4 border rounded bg-white shadow-sm w-100">
              <h3 className="mb-3">Your BMI is</h3>
              <p id="bmi" className="display-4 fw-bold text-success">{bmi}</p>
              <p id="desc" className="h5 mb-2">{desc}</p>
              <p id="message" className="text-muted">{message}</p>
            </section>
          </div>
        </div>
      </div>

      <section className="bmi-scale row text-center mt-4 g-3">
        <div className="col-6 col-md-3">
          <div className="p-3 border rounded card h-100">
            <h4 className="text-info">Underweight</h4>
            <p className="mb-0">&lt; 18.5</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border rounded card h-100">
            <h4 className="text-success">Normal</h4>
            <p className="mb-0">18.5 - 25</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border rounded card h-100">
            <h4 className="text-warning">Overweight</h4>
            <p className="mb-0">25 - 30</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border rounded card h-100">
            <h4 className="text-danger">Obese</h4>
            <p className="mb-0">&gt; 30</p>
          </div>
        </div>
      </section>
  </div>
    </>
  );
}

export default BMIcalculator;