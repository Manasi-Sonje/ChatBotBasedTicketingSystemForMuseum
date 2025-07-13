import React from "react";
import "./LandingPage.css";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        {/* Welcome Card */}
        <div className="welcome-card">
          <div className="welcome-header">
            <h1>Welcome to Museum Explorer</h1>
            <p>Discover amazing museums and book your tickets with ease</p>
          </div>
          <div className="welcome-features">
            <div className="feature">
              <span className="feature-icon">🎨</span>
              <span>Explore Art & History</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎫</span>
              <span>Easy Ticket Booking</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🤖</span>
              <span>AI-Powered Assistant</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button 
            className="nav-button primary"
            onClick={() => onNavigate("chatbot")}
          >
            <span className="button-icon">🎫</span>
            <span className="button-text">
              <strong>Book a Ticket</strong>
              <small>Start your museum journey</small>
            </span>
          </button>

          <button 
            className="nav-button secondary"
            onClick={() => onNavigate("about")}
          >
            <span className="button-icon">ℹ️</span>
            <span className="button-text">
              <strong>About Us</strong>
              <small>Learn more about our mission</small>
            </span>
          </button>

          <button 
            className="nav-button secondary"
            onClick={() => onNavigate("services")}
          >
            <span className="button-icon">🛠️</span>
            <span className="button-text">
              <strong>Services</strong>
              <small>Explore what we offer</small>
            </span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="stats-section">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Museums</p>
          </div>
          <div className="stat-card">
            <h3>10K+</h3>
            <p>Happy Visitors</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 