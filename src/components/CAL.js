import React, { useState } from 'react';
//import './BMICalculator.css'; // Import the CSS file

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [feetMessage, setFeetMessage] = useState('');

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(2));

    // Determine feet message
    if (bmiValue < 18.5) {
      setFeetMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setFeetMessage('Normal weight');
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      setFeetMessage('Overweight');
    } else {
      setFeetMessage('Obese'); 
    }
  };
  const resetBMI =()=>{
    const weight="";
    setWeight("");
    setHeight("");
    setBMI("");
  }

  return (<>
    <h2 className="name">BMI Calculator</h2>
    <div className="con">
     
      <div className="input">
        <label>
          Weight (kg):
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="inputf"
            placeholder='KG'
          />
        </label>
      </div>
      <div className="input">
        <label>
          Height (cm):
          <input placeholder='IN CM'
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="inputf"
          />
        </label>
      </div>
      <button
        onClick={calculateBMI}
        className="button"
      >
        submit
      </button>
      <button
        onClick={resetBMI}
        className="button"
      >
        resetf
      </button>
      {bmi !== null && (
        <div className="result">
          <p>Your BMI is: {bmi}</p>
          <p>{feetMessage}</p>
        </div>
      )}
    </div></>
  );
}
