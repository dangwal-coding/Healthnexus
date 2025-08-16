import React from "react";
import tests from "./data/tests";
import cbcImg from "./data/img/cbc-blood-test.jpg";

const imageMap = {
  "./img/cbc-blood-test.jpg": cbcImg,
};

const LabTestList = () => {
  return (
    <div>
      <h2>Lab Tests</h2>
      <ul>
        {tests.map((test) => (
          <li key={test.id} style={{marginBottom: 24}}>
            <h3>{test.name}</h3>
            <img
              src={imageMap[test.image] || test.image}
              alt={test.name}
              style={{width: 200, height: "auto", borderRadius: 10}}
            />
            <p>{test.description}</p>
            <p>Price: ₹{test.price}</p>
            <p>Turnaround: {test.turnaround}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabTestList;
