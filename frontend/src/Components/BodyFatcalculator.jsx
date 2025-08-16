import React, { useState } from "react";
import Navbar from "../Elements/Navbar";


export default function BodyFatCalculator() {
  const [gender, setGender] = useState("");
  
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    let bf = 0;
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const waistC = parseFloat(waist);
    const neckC = parseFloat(neck);
    const hipC = parseFloat(hip);

    if (gender === "male") {
      bf =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waistC - neckC) +
            0.15456 * Math.log10(h)) -
        450;
    } else if (gender === "female") {
      bf =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waistC + hipC - neckC) +
            0.22100 * Math.log10(h)) -
        450;
    }

    setBodyFat(bf.toFixed(2));
  };
  const resetForm = () => { setHeight('');setWeight('');setGender('');setHip(''),setNeck(''),setWaist(''),setBodyFat(null);};

  return (
    <>
    <Navbar/>
    <div className="container mt-4 my-5" style={{ backgroundColor: "#9cc9eeff", color: "white" }}>
      <div className="row">
        {/* Left Form */}
        <div className="col-md-5 p-4 rounded" style={{ backgroundColor: "#5095b7ff", color: "white" }}>
          <h2 className="mb-4">Body  Fat Calculator</h2>

          <div className="mb-3">
            <label>Gender:</label>
            <select
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          

          <div className="mb-3">
            <label>Height (cm):</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Weight (kg):</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Waist Circumference (cm):</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter waist circumference"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Neck Circumference (cm):</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter neck circumference"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
            />
          </div>

          {gender === "female" && (
            <div className="mb-3">
              <label>Hip Circumference (cm):</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter hip circumference"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
              />
            </div>
          )}

          <button
            className="btn  w-100 mt-3"
            onClick={calculateBodyFat}
            style={{backgroundColor: "#00bcd4",color: "white",fontWeight: "600"}}
          >
            Body Fat Percentage
          </button>
        </div>

        {/* Right Result */}
        <div className="col-md-7 p-4 d-flex flex-column justify-content-center align-items-center rounded" style={{ backgroundColor: "#6fc3dfff", color:'#0d1011ff'}}>
          <h4 className="fw-bold">Your Body Fat Result</h4>
          <div
            className="mt-3 p-3 bg-white shadow-sm rounded"
            style={{ minWidth: "200px", textAlign: "center", fontSize: "1.5rem",  color: "#006d87"}}
          >
            {bodyFat !== null ? `${bodyFat} %` : "--"}<br/>
            <input type='button' value={'reset'} className="reset bg-info" onClick={resetForm} style={{ backgroundColor: "#ff5757",
           color: "white",padding: "0.8rem 1.5rem",border: "none",borderRadius: "6px",fontWeight: "600"}}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
