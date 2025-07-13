import React from "react";
import "./ServiceDetailPage.css";

const TicketBookingPage = ({ onNavigate }) => {
  const bookingSteps = [
    {
      step: 1,
      title: "Start Chat",
      description: "Click the chat button and our AI assistant will guide you through the booking process.",
      icon: "💬"
    },
    {
      step: 2,
      title: "Choose Museum",
      description: "Browse our curated list of museums and select the one you'd like to visit.",
      icon: "🏛️"
    },
    {
      step: 3,
      title: "Select Date & Time",
      description: "Pick your preferred date and time slot from available options.",
      icon: "📅"
    },
    {
      step: 4,
      title: "Choose Tickets",
      description: "Select the number and type of tickets (adult, child, senior, etc.).",
      icon: "🎫"
    },
    {
      step: 5,
      title: "Payment",
      description: "Complete your booking with secure payment options.",
      icon: "💳"
    },
    {
      step: 6,
      title: "Confirmation",
      description: "Receive instant confirmation and ticket details via email.",
      icon: "✅"
    }
  ];

  const features = [
    "AI-powered booking assistant available 24/7",
    "Instant booking confirmation",
    "Flexible scheduling options",
    "Multiple payment methods accepted",
    "Group booking support",
    "Special discounts for students and seniors",
    "Free cancellation within 24 hours",
    "Mobile-friendly booking process"
  ];

  return (
    <div className="service-detail-container">
      <div className="service-detail-header">
        <h1>Ticket Booking Service</h1>
        <p>Book your museum tickets with our intelligent AI assistant</p>
        <div className="header-buttons">
          <button 
            className="back-button"
            onClick={() => onNavigate("services")}
          >
            ← Back to Services
          </button>
          <button 
            className="primary-button"
            onClick={() => onNavigate("chatbot")}
          >
            Start Booking Now
          </button>
        </div>
      </div>

      <div className="service-detail-content">
        {/* Overview Section */}
        <div className="detail-section">
          <div className="section-header">
            <div className="section-icon">🎫</div>
            <h2>How It Works</h2>
          </div>
          <p>
            Our AI-powered booking system makes museum ticket purchasing simple and efficient. 
            Simply start a conversation with our chatbot, and it will guide you through the entire 
            booking process, from selecting a museum to confirming your payment.
          </p>
        </div>

        {/* Booking Steps */}
        <div className="detail-section">
          <h2>Booking Process</h2>
          <div className="steps-grid">
            {bookingSteps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="detail-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Info */}
        <div className="detail-section">
          <h2>Pricing Information</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Standard Tickets</h3>
              <div className="price">$15-25</div>
              <p>Regular admission tickets for adults</p>
            </div>
            <div className="pricing-card">
              <h3>Student Discount</h3>
              <div className="price">$10-15</div>
              <p>Valid student ID required</p>
            </div>
            <div className="pricing-card">
              <h3>Senior Discount</h3>
              <div className="price">$12-20</div>
              <p>For visitors 65+ years old</p>
            </div>
            <div className="pricing-card">
              <h3>Children (Under 12)</h3>
              <div className="price">Free</div>
              <p>Free admission for children</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="detail-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>How far in advance can I book tickets?</h4>
              <p>You can book tickets up to 3 months in advance for most museums.</p>
            </div>
            <div className="faq-item">
              <h4>Can I modify my booking after purchase?</h4>
              <p>Yes, you can modify your booking up to 24 hours before your scheduled visit.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods are accepted?</h4>
              <p>We accept all major credit cards, PayPal, and digital wallets.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a booking fee?</h4>
              <p>No, there are no additional booking fees. You only pay the museum admission price.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3>Ready to Book Your Museum Experience?</h3>
        <p>Start your journey with our AI assistant today</p>
        <button 
          className="cta-button"
          onClick={() => onNavigate("chatbot")}
        >
          Begin Booking Process
        </button>
      </div>
    </div>
  );
};

export default TicketBookingPage; 