import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Get updates and exclusive offers</p>
          <form className='form'>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button> 
            <p>copyright:B.Nurlan 2023</p>
          </form>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
