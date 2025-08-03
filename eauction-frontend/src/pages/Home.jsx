import React from 'react';
import Auction from './Auction';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Welcome to Bid-Sphere</h1>
          <p className="hero__subtitle">
            Discover amazing deals, bid on unique items, and experience the thrill of online auctions like never before
          </p>
          <div className="hero__cta">
            <Link to="/Auction" className="btn btn--outline">Start Bidding</Link>
            <a href="#how-it-works" className="btn btn--outline">Learn How</a>
          </div>
        </div>
      </section>

      {/* What is Bid-Sphere Section */}
      <section  className="what-is">
        <div className="section__container">
          <h2 className="section__title">What is Bid-Sphere?</h2>
          <p className="section__subtitle">
            Bid-Sphere is your premier online auction platform where buyers and sellers come together to create exciting bidding experiences
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🚀</span>
              <h3>Fast & Secure</h3>
              <p>Lightning-fast bidding with bank-level security. Your transactions and personal information are always protected with our advanced encryption technology.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>Global Marketplace</h3>
              <p>Connect with buyers and sellers worldwide. Access unique items from different countries and cultures, all from the comfort of your home.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Real-time Bidding</h3>
              <p>Experience the excitement of live auctions with real-time updates, instant notifications, and competitive bidding that keeps you on the edge of your seat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id='how-it-works' className="how-it-works">
        <div className="section__container">
          <h2 className="section__title">How It Works</h2>
          <p className="section__subtitle">Get started with Bid-Sphere in just a few simple steps</p>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Register & Verify</h3>
              <p>Create your free account and verify your identity to ensure a safe and trusted auction environment for everyone.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Browse Auctions</h3>
              <p>Explore thousands of active auctions across various categories. Use filters to find exactly what you're looking for.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Place Your Bids</h3>
              <p>Found something you love? Place your bid and watch the auction unfold. Set automatic bids to stay competitive.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Win & Enjoy</h3>
              <p>Win the auction and complete your purchase securely. Your item will be shipped directly to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Auctions Preview */}
      <section className="active-auctions">
        <div className="section__container">
          <h2 className="section__title">Active Auctions</h2>
          <p className="section__subtitle">Don't miss out on these exciting auctions ending soon</p>
          
          <div className="auction-preview-grid">
            <div className="auction-preview-card">
              <div className="auction-preview-image">
                <span className="image-placeholder">🪙</span>
                <span className="image-text">Old Coin</span>
              </div>
              <div className="auction-preview-content">
                <h3 className="auction-preview-title">Old Coin</h3>
                <div className="auction-preview-bid">Current: 1.899 ETH</div>
                <div className="auction-preview-time">⏰ Ends in: 2h 34m</div>
                <button className="auction-preview-btn">Place Bid</button>
              </div>
            </div>
            <div className="auction-preview-card">
              <div className="auction-preview-image">
                <span className="image-placeholder">🏺</span>
                <span className="image-text">Antique Vase</span>
              </div>
              <div className="auction-preview-content">
                <h3 className="auction-preview-title">Antique Vase</h3>
                <div className="auction-preview-bid">Current: 1.250 ETH</div>
                <div className="auction-preview-time">⏰ Ends in: 5h 12m</div>
                <button className="auction-preview-btn">Place Bid</button>
              </div>
            </div>
            <div className="auction-preview-card">
              <div className="auction-preview-image">
                <span className="image-placeholder">🎨</span>
                <span className="image-text">Modern Art</span>
              </div>
              <div className="auction-preview-content">
                <h3 className="auction-preview-title">Modern Art Collection</h3>
                <div className="auction-preview-bid">Current: 2.890 ETH</div>
                <div className="auction-preview-time">⏰ Ends in: 1d 3h</div>
                <button className="auction-preview-btn">Place Bid</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section__container">
          <h2 className="section__title">What Our Users Say</h2>
          <p className="section__subtitle">Join thousands of satisfied buyers and sellers on our platform</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Bid-Sphere has completely changed how I buy collectibles. The platform is intuitive, secure, and I've found some amazing deals that I couldn't find anywhere else."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SJ</div>
                <div className="testimonial-info">
                  <h4>Sarah Johnson</h4>
                  <p>Collector & Enthusiast</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "As a seller, I appreciate the global reach and the professional tools provided. My items get great visibility and the bidding process is transparent and fair."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MR</div>
                <div className="testimonial-info">
                  <h4>Michael Rodriguez</h4>
                  <p>Art Dealer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "The real-time notifications and automatic bidding features are game-changers. I never miss an opportunity and can bid confidently even when I'm busy."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">EL</div>
                <div class="testimonial-info">
                  <h4>Emily Liu</h4>
                  <p>Vintage Car Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="section__container">
          <h2 className="section__title">Trusted Partners</h2>
          <p className="section__subtitle">We work with leading companies to provide you the best auction experience</p>
          
          <div className="partners-grid">
            <div className="partner-logo">
              <div className="partner-name">TechCorp</div>
            </div>
            <div className="partner-logo">
              <div className="partner-name">ArtHouse</div>
            </div>
            <div className="partner-logo">
              <div className="partner-name">SecurePay</div>
            </div>
            <div className="partner-logo">
              <div className="partner-name">LogiSpeed</div>
            </div>
            <div className="partner-logo">
              <div className="partner-name">AuthGuard</div>
            </div>
            <div className="partner-logo">
              <div className="partner-name">GlobalShip</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="section__container">
          <h2 className="section__title">About Bid-Sphere</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Founded in 2020, Bid-Sphere has grown to become one of the most trusted online auction platforms globally. We believe that everyone should have access to unique items and great deals through fair and transparent bidding processes.
              </p>
              <p>
                Our platform combines cutting-edge technology with user-friendly design to create an auction experience that's both exciting and secure. Whether you're a casual buyer looking for a great deal or a serious collector seeking rare items, Bid-Sphere is your gateway to the world of online auctions.
              </p>
              <p>
                With advanced security measures, real-time bidding technology, and 24/7 customer support, we ensure that every transaction is safe, smooth, and satisfying for all parties involved.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2M+</div>
                <div className="stat-label">Items Sold</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">150+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99.8%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;