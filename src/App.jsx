import React, { useState } from "react";
import Chatbot from "./components/Chatbot";
import VideoPopup from "./components/VideoPopup";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import TicketBookingPage from "./components/TicketBookingPage";
import TicketCancellationPage from "./components/TicketCancellationPage";
import MuseumReviewsPage from "./components/MuseumReviewsPage";
import "./styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState("login"); // "login" or "register"
  const [currentPage, setCurrentPage] = useState("landing"); // Current page state

  const handleLogin = (loginData) => {
    // Simulate successful login
    console.log("Login successful:", loginData);
    setCurrentUser({ email: loginData.email });
    setIsAuthenticated(true);
    setCurrentPage("landing"); // Go to landing page after login
  };

  const handleRegister = (registerData) => {
    // Simulate successful registration
    console.log("Registration successful:", registerData);
    setCurrentUser({ 
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email 
    });
    setIsAuthenticated(true);
    setCurrentPage("landing"); // Go to landing page after registration
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage("landing");
  };

  const switchToRegister = () => {
    setAuthMode("register");
  };

  const switchToLogin = () => {
    setAuthMode("login");
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Show authentication forms if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="app-container">
        {authMode === "login" ? (
          <Login onLogin={handleLogin} onSwitchToRegister={switchToRegister} />
        ) : (
          <Register onRegister={handleRegister} onSwitchToLogin={switchToLogin} />
        )}
      </div>
    );
  }

  // Render different pages based on currentPage state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "booking":
        return <TicketBookingPage onNavigate={handleNavigate} />;
      case "cancellation":
        return <TicketCancellationPage onNavigate={handleNavigate} />;
      case "reviews":
        return <MuseumReviewsPage onNavigate={handleNavigate} />;
      case "chatbot":
        return (
          <div className="chatbot-page">
            <div className="app-header">
              <h1>Museum Ticketing Chatbot</h1>
              <div className="user-info">
                <span>Welcome, {currentUser.firstName || currentUser.email}!</span>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </div>
            <Chatbot />
            <VideoPopup />
          </div>
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  // Show main app if authenticated
  return (
    <div className="app-container">
      {renderCurrentPage()}
    </div>
  );
};

export default App;
