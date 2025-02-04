import React from 'react';
import './About.css';
import profileImg from "../assets/img/profileimg.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <div className="image-wrapper">
          <img 
            src={profileImg}
            alt="About me" 
            className="about-image"
          />
        </div>
      </div>
      
      <div className="about-text-container">
        <h2 className="about-title">About Me</h2>
        
        <p className="about-description">
          Hello! I'm a passionate developer with a love for creating innovative 
          and user-friendly web applications. My journey in tech is driven by 
          curiosity and a constant desire to learn and grow.
        </p>
        
        <div className="about-cta">
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;