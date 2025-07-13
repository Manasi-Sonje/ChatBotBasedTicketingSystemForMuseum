import React from "react";
import "./AboutPage.css";

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Museum Explorer</h1>
        <p>Connecting people with the world's most amazing museums</p>
        <button 
          className="back-button"
          onClick={() => onNavigate("landing")}
        >
          ← Back to Home
        </button>
      </div>

      <div className="about-content">
        {/* Mission Section */}
        <div className="about-section">
          <div className="section-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            At Museum Explorer, we believe that art, history, and culture should be accessible to everyone. 
            Our mission is to bridge the gap between museums and visitors by providing an intuitive, 
            AI-powered platform that makes museum exploration seamless and enjoyable.
          </p>
        </div>

        {/* Vision Section */}
        <div className="about-section">
          <div className="section-icon">🔮</div>
          <h2>Our Vision</h2>
          <p>
            We envision a world where every person can easily discover, book, and experience the 
            world's cultural treasures. Through innovative technology and thoughtful design, 
            we're creating the future of museum engagement.
          </p>
        </div>

        {/* Values Section */}
        <div className="about-section">
          <div className="section-icon">💎</div>
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Accessibility</h4>
              <p>Making culture available to everyone, regardless of background or location.</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>Continuously improving our platform with cutting-edge AI technology.</p>
            </div>
            <div className="value-item">
              <h4>Community</h4>
              <p>Building connections between museums, visitors, and cultural enthusiasts.</p>
            </div>
            <div className="value-item">
              <h4>Excellence</h4>
              <p>Delivering exceptional experiences through quality service and support.</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="about-section">
          <div className="section-icon">📖</div>
          <h2>Our Story</h2>
          <p>
            Founded in 2024, Museum Explorer was born from a simple observation: visiting museums 
            should be as easy as ordering food online. Our team of technology enthusiasts and 
            culture lovers came together to create a platform that combines the power of artificial 
            intelligence with the beauty of human creativity.
          </p>
          <p>
            Today, we partner with museums worldwide to provide visitors with seamless booking 
            experiences, intelligent recommendations, and comprehensive information about exhibits 
            and collections.
          </p>
        </div>

        {/* Team Section */}
        <div className="about-section">
          <div className="section-icon">👥</div>
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h4>Alex Chen</h4>
              <p>CEO & Founder</p>
              <span>Technology enthusiast with a passion for cultural preservation</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h4>Sarah Johnson</h4>
              <p>Head of Design</p>
              <span>Creating beautiful experiences that connect people with art</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔬</div>
              <h4>Dr. Michael Park</h4>
              <p>AI Research Lead</p>
              <span>Pioneering intelligent solutions for cultural engagement</span>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>Emily Rodriguez</h4>
              <p>Partnership Manager</p>
              <span>Building bridges between museums and technology</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-section">
          <div className="section-icon">📊</div>
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Partner Museums</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Happy Visitors</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>AI Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contact-cta">
        <h3>Ready to Explore?</h3>
        <p>Start your museum journey today with our AI-powered assistant</p>
        <button 
          className="cta-button"
          onClick={() => onNavigate("chatbot")}
        >
          Book Your First Ticket
        </button>
      </div>
    </div>
  );
};

export default AboutPage; 