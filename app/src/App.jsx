import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // Import the CSS file

function App() {
  const [year, setYear] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', { year: parseInt(year) });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Linear Regression Prediction</h1>
      <div className="input-container">
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Enter year"
          className="input-field"
        />
        <button onClick={handlePredict} className="predict-button">Predict</button>
      </div>
      {prediction && <p className="prediction-result">Prediction: {prediction.toFixed(2)}</p>}
    </div>
  );
}

export default App;
