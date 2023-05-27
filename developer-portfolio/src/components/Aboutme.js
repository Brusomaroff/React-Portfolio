import React from 'react';
import "../styles/Aboutme.css";
import profileImage from '../images/profilepic.JPG';

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h1>About Me</h1>
      <div className="profile-pic">
      <img src={profileImage} alt="profile_picture" style={{ width: "200px", height: "200px" }}/>
      </div>
      <p>
      Welcome to my portfolio website! I am a web developer passionate about creating amazing user experiences. Feel free to explore my portfolio, contact me for any inquiries, or download my resume to learn more about my skills and experience.
      </p>
    </div>
  );
};

export default Aboutme;
