import React from 'react';
import { Link } from 'react-router-dom';
import Pic from '../Images/pic5.png';
import './Footer.css'; // Make sure this CSS file exists

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="foot">
        <div className="container">
          <svg width="100" height="20" viewBox="0 0 85 20" xmlns="http://www.w3.org/2000/svg" role="img">
            {/* SVG path contents remain the same */}
          </svg>
          <p className="subscribe-text">Receive exclusive offers, hydration news, and more when you subscribe.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <Link className="subscribe-btn">Subscribe</Link>
          </form>
          <div className="footer-row">
            <div className="footer-col">
              <ul>
                <li><Link to="#">Our Story</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#">FAQ</Link></li>
                <li><Link to="#">Find a retailer</Link></li>
                <li><Link to="#">Wholesale</Link></li>
                <li><Link to="#">Affiliate program</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li><Link to="#">Reviews</Link></li>
                <li><Link to="#">Press</Link></li>
                <li><Link to="#">basq magazine</Link></li>
                <li><Link to="#">Exclusive Perks</Link></li>
                <li><Link to="#">Ambassador program</Link></li>
                <li><Link to="#">Corporate gifting</Link></li>
              </ul>
            </div>
            <div className="footer-quote" style={{ backgroundImage: `url(${Pic})` }}>
              <Link className="quote-btn">Get a quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
