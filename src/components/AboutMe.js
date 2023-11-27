// components/AboutMe.js

import React from 'react';
import './AboutMe.css'; // Import the styles
import myImage from '../profile.jpeg';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="form-group">
        <img src={myImage} alt="My Photo" className="profile-image" />
      </div>
      <div className="form-group">
        <label>Thank You For Visiting!</label><br/>
        <label htmlFor="name">My Name:</label>
        <p>Janhavi Rane</p>
        <label htmlFor="interests">Interests:</label>
        <p>[Travelling, Technology, Food, Science, Figure Skating]</p><br/>
        <p>Reach Through :janhavira2810@gmail.com</p>
      </div>
    </div>
  );
};

export default AboutMe;
