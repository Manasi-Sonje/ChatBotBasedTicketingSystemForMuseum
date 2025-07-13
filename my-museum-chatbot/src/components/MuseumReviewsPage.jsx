import React from "react";
import "./ServiceDetailPage.css";

const MuseumReviewsPage = ({ onNavigate }) => {
  const sampleReviews = [
    {
      id: 1,
      museum: "Metropolitan Museum of Art",
      rating: 5,
      title: "Absolutely Amazing Experience",
      content: "The Met exceeded all expectations. The collection is vast and beautifully curated. The Egyptian wing was particularly impressive. Highly recommend spending a full day here.",
      author: "Sarah M.",
      date: "2024-01-15",
      helpful: 24,
      photos: 3
    },
    {
      id: 2,
      museum: "Louvre Museum",
      rating: 4,
      title: "Iconic but Crowded",
      content: "The Louvre is a must-visit for art lovers. The Mona Lisa was smaller than expected but still magical. The crowds can be overwhelming, so go early in the morning.",
      author: "Michael R.",
      date: "2024-01-10",
      helpful: 18,
      photos: 5
    },
    {
      id: 3,
      museum: "British Museum",
      rating: 5,
      title: "Fascinating History Collection",
      content: "Incredible collection of world history. The Rosetta Stone and Parthenon Marbles are highlights. Free admission makes it even better. Great for families.",
      author: "Emma L.",
      date: "2024-01-08",
      helpful: 31,
      photos: 2
    },
    {
      id: 4,
      museum: "Uffizi Gallery",
      rating: 4,
      title: "Renaissance Masterpieces",
      content: "Beautiful collection of Italian Renaissance art. The Botticelli rooms are stunning. Book tickets in advance to avoid long lines. Worth every minute.",
      author: "David K.",
      date: "2024-01-05",
      helpful: 15,
      photos: 4
    }
  ];

  const reviewFeatures = [
    "Authentic visitor reviews and ratings",
    "Photo galleries from real visitors",
    "Detailed exhibit and collection reviews",
    "Visitor tips and recommendations",
    "Crowd level indicators",
    "Best time to visit suggestions",
    "Accessibility information",
    "Family-friendly ratings"
  ];

  const ratingCategories = [
    {
      category: "Overall Experience",
      average: 4.6,
      total: 1250
    },
    {
      category: "Exhibit Quality",
      average: 4.7,
      total: 1180
    },
    {
      category: "Staff Friendliness",
      average: 4.4,
      total: 1100
    },
    {
      category: "Value for Money",
      average: 4.3,
      total: 980
    },
    {
      category: "Accessibility",
      average: 4.2,
      total: 850
    }
  ];

  return (
    <div className="service-detail-container">
      <div className="service-detail-header">
        <h1>Museum Reviews & Ratings</h1>
        <p>Discover what visitors say about their museum experiences</p>
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
            Write a Review
          </button>
        </div>
      </div>

      <div className="service-detail-content">
        {/* Overview Section */}
        <div className="detail-section">
          <div className="section-header">
            <div className="section-icon">⭐</div>
            <h2>Authentic Visitor Reviews</h2>
          </div>
          <p>
            Read real reviews from museum visitors around the world. Our community shares honest 
            experiences, helpful tips, and beautiful photos to help you plan the perfect museum visit. 
            From hidden gems to must-see exhibits, discover what makes each museum special.
          </p>
        </div>

        {/* Rating Categories */}
        <div className="detail-section">
          <h2>Overall Ratings</h2>
          <div className="rating-categories">
            {ratingCategories.map((category, index) => (
              <div key={index} className="rating-category">
                <div className="category-info">
                  <h4>{category.category}</h4>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(category.average) ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rating-stats">
                  <span className="average-rating">{category.average}</span>
                  <span className="total-reviews">({category.total} reviews)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Reviews */}
        <div className="detail-section">
          <h2>Recent Reviews</h2>
          <div className="reviews-grid">
            {sampleReviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <h3>{review.museum}</h3>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="review-title">{review.title}</h4>
                <p className="review-content">{review.content}</p>
                <div className="review-meta">
                  <span className="review-author">By {review.author}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-stats">
                  <span className="helpful-count">👍 {review.helpful} helpful</span>
                  <span className="photo-count">📷 {review.photos} photos</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="detail-section">
          <h2>Review Features</h2>
          <div className="features-grid">
            {reviewFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Guidelines */}
        <div className="detail-section">
          <h2>Review Guidelines</h2>
          <div className="guidelines-grid">
            <div className="guideline-card">
              <h3>Be Honest</h3>
              <p>Share your genuine experience, both positive and negative aspects.</p>
            </div>
            <div className="guideline-card">
              <h3>Be Specific</h3>
              <p>Mention specific exhibits, staff interactions, or facilities that stood out.</p>
            </div>
            <div className="guideline-card">
              <h3>Be Helpful</h3>
              <p>Include tips for future visitors, like best times to visit or must-see exhibits.</p>
            </div>
            <div className="guideline-card">
              <h3>Be Respectful</h3>
              <p>Keep reviews constructive and avoid personal attacks or inappropriate content.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="detail-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>How do I write a review?</h4>
              <p>After visiting a museum, you can write a review through our chatbot or website. Simply provide your rating, title, and detailed experience.</p>
            </div>
            <div className="faq-item">
              <h4>Can I edit my review after posting?</h4>
              <p>Yes, you can edit your review within 30 days of posting. After that, you can contact support for modifications.</p>
            </div>
            <div className="faq-item">
              <h4>Are reviews moderated?</h4>
              <p>Yes, all reviews are moderated to ensure they meet our community guidelines and are authentic.</p>
            </div>
            <div className="faq-item">
              <h4>Can I upload photos with my review?</h4>
              <p>Yes, you can upload up to 10 photos with your review to share your museum experience visually.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3>Share Your Museum Experience</h3>
        <p>Help other visitors by writing a review of your recent museum visit</p>
        <button 
          className="cta-button"
          onClick={() => onNavigate("chatbot")}
        >
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default MuseumReviewsPage; 