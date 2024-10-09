import React from 'react';
import './mainpage.css'; // Import your stylesheet
import Form from './Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const BackgroundWithGradient = () => {
  const navigate = useNavigate();
  function handleClick() {

    navigate("/Form")

  }

  return (

    <div className="background-container">

      <div className="background-image"></div>
      <div className="gradient-overlay"></div>
      <div className="content">
        <h1 style={{ color: 'white' }}>Mapping Brain Health</h1>
        <button className="but1" onClick={(handleClick)}>Get Started</button>
      </div>

    </div>

  );
};

export default BackgroundWithGradient;
// Updated on Sun Jul  6 12:57:29 CDT 2025
