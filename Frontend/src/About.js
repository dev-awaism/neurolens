import React from 'react';
import './About.css'; // Ensure you have an About.css file in the same directory

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About NeuroLens</h1>
      <p className="about-description">
        NeuroLens is dedicated to advancing brain health through innovative technology 
        and research. Our state-of-the-art cognitive analysis tools help individuals and 
        healthcare providers detect and monitor brain health over time.
      </p>
      <p className="about-description">
        With a commitment to excellence and a multidisciplinary approach, our goal is to 
        provide insights that can lead to better outcomes and improved quality of life for 
        those facing neurological challenges.
      </p>
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals by providing actionable insights into their 
          brain health. Through our tools and services, we aim to contribute to the early 
          detection and management of neurological conditions, fostering a proactive approach 
          to brain health and wellness.
        </p>
      </div>
      <div className="about-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a future where everyone has access to the knowledge and resources needed 
          to maintain a healthy brain. By pushing the boundaries of technology and research, 
          NeuroLens is at the forefront of the brain health revolution.
        </p>
      </div>
    </div>
  );
};

export default About;
// Updated on Sun Jul  6 12:57:28 CDT 2025
