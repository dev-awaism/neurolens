import React from 'react';
import './Services.css'; // Ensure you have a Services.css file in the same directory

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      
      <div className="service">
        <h2>Brain Scan Analysis</h2>
        <p>
          Utilizing advanced imaging technology and artificial intelligence, we provide detailed analyses of brain scans to detect and evaluate neurological conditions.
        </p>
      </div>
      
      <div className="service">
        <h2>Cognitive Health Tracking</h2>
        <p>
          Our cognitive tracking service allows for the regular assessment of brain function over time, aiding in the early detection of cognitive decline.
        </p>
      </div>

      <div className="service">
        <h2>Personalized Brain Health Plans</h2>
        <p>
          We work closely with healthcare providers to develop personalized brain health plans tailored to individual needs and conditions.
        </p>
      </div>

      <div className="service">
        <h2>Research and Development</h2>
        <p>
          Our commitment to research and development ensures that we remain at the cutting edge of neuroscience, providing the latest and most effective brain health solutions.
        </p>
      </div>
    </div>
  );
};

export default Services;
