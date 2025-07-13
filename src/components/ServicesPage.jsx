import React from "react";
import "./ServicesPage.css";

const ServicesPage = ({ onNavigate }) => {
  const services = [
    {
      id: "booking",
      title: "Ticket Booking",
      description: "Book tickets for your favorite museums with our AI-powered chatbot assistant. Get instant confirmation and flexible scheduling options.",
      icon: "🎫",
      features: [
        "AI-powered booking assistant",
        "Instant confirmation",
        "Flexible scheduling",
        "Multiple payment options",
        "Group booking support"
      ],
      color: "primary"
    },
    {
      id: "cancellation",
      title: "Ticket Cancellation",
      description: "Need to cancel or modify your booking? Our system makes it easy to manage your reservations with full refund policies.",
      icon: "❌",
      features: [
        "Easy cancellation process",
        "Full refund within 24 hours",
        "Modification options",
        "Email notifications",
        "Customer support"
      ],
      color: "secondary"
    },
    {
      id: "reviews",
      title: "Museum Reviews",
      description: "Read authentic reviews from visitors and share your own experiences. Get insights about exhibits, facilities, and visitor tips.",
      icon: "⭐",
      features: [
        "Authentic visitor reviews",
        "Photo galleries",
        "Rating system",
        "Exhibit reviews",
        "Visitor tips"
      ],
      color: "tertiary"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Everything you need for the perfect museum experience</p>
        <button 
          className="back-button"
          onClick={() => onNavigate("landing")}
        >
          ← Back to Home
        </button>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`service-card ${service.color}`}
            onClick={() => onNavigate(service.id)}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="service-action">
              <span>Learn More →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="services-footer">
        <div className="contact-info">
          <h3>Need Help?</h3>
          <p>Our support team is available 24/7 to assist you</p>
          <div className="contact-methods">
            <div className="contact-method">
              <span>📧</span>
              <span>support@museumexplorer.com</span>
            </div>
            <div className="contact-method">
              <span>📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-method">
              <span>💬</span>
              <span>Live Chat Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 