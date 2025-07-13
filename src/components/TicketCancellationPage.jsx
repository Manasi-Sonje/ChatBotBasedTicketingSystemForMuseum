import React from "react";
import "./ServiceDetailPage.css";

const TicketCancellationPage = ({ onNavigate }) => {
  const cancellationSteps = [
    {
      step: 1,
      title: "Access Your Booking",
      description: "Log into your account or use your booking reference number to access your tickets.",
      icon: "🔍"
    },
    {
      step: 2,
      title: "Select Tickets",
      description: "Choose the specific tickets you want to cancel from your booking.",
      icon: "🎫"
    },
    {
      step: 3,
      title: "Choose Cancellation Type",
      description: "Select between full cancellation or modification (date/time change).",
      icon: "⚙️"
    },
    {
      step: 4,
      title: "Confirm Cancellation",
      description: "Review the cancellation details and confirm your request.",
      icon: "✅"
    },
    {
      step: 5,
      title: "Receive Confirmation",
      description: "Get instant confirmation and refund details via email.",
      icon: "📧"
    }
  ];

  const policies = [
    {
      type: "Full Refund",
      timeframe: "24+ hours before visit",
      description: "100% refund to original payment method",
      icon: "💰"
    },
    {
      type: "Partial Refund",
      timeframe: "2-24 hours before visit",
      description: "50% refund to original payment method",
      icon: "💸"
    },
    {
      type: "No Refund",
      timeframe: "Less than 2 hours before visit",
      description: "No refund available, but rescheduling possible",
      icon: "⏰"
    }
  ];

  const features = [
    "Instant cancellation processing",
    "Automatic refund processing",
    "Email confirmation for all cancellations",
    "Modification options available",
    "24/7 cancellation support",
    "No cancellation fees",
    "Flexible rescheduling options",
    "Booking history tracking"
  ];

  return (
    <div className="service-detail-container">
      <div className="service-detail-header">
        <h1>Ticket Cancellation Service</h1>
        <p>Flexible cancellation and modification options for your museum bookings</p>
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
            Manage My Booking
          </button>
        </div>
      </div>

      <div className="service-detail-content">
        {/* Overview Section */}
        <div className="detail-section">
          <div className="section-header">
            <div className="section-icon">❌</div>
            <h2>Cancellation Process</h2>
          </div>
          <p>
            We understand that plans can change. Our flexible cancellation policy allows you to 
            cancel or modify your museum bookings with ease. Whether you need a full refund or 
            want to reschedule your visit, our system makes it simple and hassle-free.
          </p>
        </div>

        {/* Cancellation Steps */}
        <div className="detail-section">
          <h2>How to Cancel</h2>
          <div className="steps-grid">
            {cancellationSteps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cancellation Policies */}
        <div className="detail-section">
          <h2>Cancellation Policies</h2>
          <div className="policies-grid">
            {policies.map((policy, index) => (
              <div key={index} className="policy-card">
                <div className="policy-icon">{policy.icon}</div>
                <h3>{policy.type}</h3>
                <div className="policy-timeframe">{policy.timeframe}</div>
                <p>{policy.description}</p>
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

        {/* Modification Options */}
        <div className="detail-section">
          <h2>Modification Options</h2>
          <div className="modification-cards">
            <div className="modification-card">
              <h3>Date Change</h3>
              <p>Reschedule your visit to a different date within 3 months of original booking.</p>
              <div className="modification-fee">Free of charge</div>
            </div>
            <div className="modification-card">
              <h3>Time Change</h3>
              <p>Change your visit time on the same date, subject to availability.</p>
              <div className="modification-fee">Free of charge</div>
            </div>
            <div className="modification-card">
              <h3>Ticket Type Change</h3>
              <p>Upgrade or downgrade ticket types (e.g., from adult to student).</p>
              <div className="modification-fee">Price difference only</div>
            </div>
            <div className="modification-card">
              <h3>Museum Change</h3>
              <p>Switch to a different museum within our network.</p>
              <div className="modification-fee">Price difference only</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="detail-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>How long does it take to receive my refund?</h4>
              <p>Refunds are processed within 3-5 business days and will appear on your statement within 7-10 business days.</p>
            </div>
            <div className="faq-item">
              <h4>Can I cancel only some tickets from my booking?</h4>
              <p>Yes, you can cancel individual tickets from a group booking while keeping the rest.</p>
            </div>
            <div className="faq-item">
              <h4>What if the museum is closed on my scheduled date?</h4>
              <p>If a museum closes unexpectedly, you'll receive a full refund or the option to reschedule.</p>
            </div>
            <div className="faq-item">
              <h4>Can I transfer my tickets to someone else?</h4>
              <p>Yes, you can transfer tickets to another person by updating the visitor information.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3>Need to Cancel or Modify Your Booking?</h3>
        <p>Our AI assistant can help you manage your bookings quickly and easily</p>
        <button 
          className="cta-button"
          onClick={() => onNavigate("chatbot")}
        >
          Manage My Booking
        </button>
      </div>
    </div>
  );
};

export default TicketCancellationPage; 