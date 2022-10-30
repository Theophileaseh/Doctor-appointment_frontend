import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/doctora.png';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-logo">
        <img src={logo} alt="Doctora" className="doctora-home-logo" />
        <h2 className="doctora-welcome">Welcome To Doctora</h2>
      </div>
      <div className="doctora-links">
        <Link to="/login" className="doctora-link">Log In</Link>
        <Link to="/signup" className="doctora-link">Sign Up</Link>
      </div>

    </div>
  );
}

export default Home;
