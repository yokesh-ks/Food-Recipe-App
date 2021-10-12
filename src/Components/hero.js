import React from 'react';
import '../css/style.css';
import herobg from "../images/herobg.jpg";
import { Link } from 'react-router-dom';

function hero() {
    return (
      <div className = "hero">
          <div className = "hero-content">
            <h1>Share what you know</h1>
            <p>Create online courses and coaching services.</p>
            <p> Transform your experience and know-how into a thriving knowledge business</p>
            <button class="hero-btn"><Link className="link" to="/viewcourse">View-Course</Link></button>
        </div>
          <img src={herobg} alt="herobg"/>
        
      </div>
    );
  }
  
  export default hero;
  