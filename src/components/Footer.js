// import React from "react";
// import { FaMapMarkedAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaPinterest  } from "react-icons/fa";
// import "./Footer.css";
// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-section"><h3>Contact Us</h3>
//             <p><FaMapMarkedAlt /> 123 Fast Food St, Food City, FC 12345</p>
//             <p><FaPhone /> +1 (123) 456-7890</p>
//             <p><FaEnvelope /> info@fastfoodrestaurant.com</p>
//             </div>
//             <div className="footer-section"><h3>Follow Us</h3>
//             <p>Stay connected through our social media channels:</p>
//             <div className="social-icons">
//                 <a href="https://www.facebook.com/"><FaFacebookF /></a>
//                 <a href="https://twitter.com/"><FaTwitter /></a>
//                 <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
//                 <a href="https://www.instagram.com/"><FaInstagram /></a>
//                 <a href="https://www.pinterest.com/"><FaPinterest /></a>
//             </div>
//             <div className="footer-section">
//                 <h3>opening hours</h3>
//                 <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
//             </div>
//             <div className="footer-section">
//                 <p>&copy; 2024 Fast Food Restaurant. All rights reserved.</p>
//                 <p>@fastfoodrestaurant distributed by <span className="developer-name">Saranya</span></p>
//             </div>
//             </div>


// </footer>
//     )
// }
// export default Footer;

            











import React from 'react';
import { FaMapMarkedAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p><FaMapMarkedAlt /> 123 Fast Food St, Food City, FC 12345</p>
        <p><FaPhone /> +1 (123) 456-7890</p>
        <p><FaEnvelope /> info@fastfoodrestaurant.com</p>
      </div>

      {/* Social Media Section */}
      <div className="footer-section">
        <h3>Follow Us</h3>
        <p>Stay connected through our social media channels:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
        </div>
      </div>

      {/* Opening Hours Section */}
      <div className="footer-section">
        <h3>Opening Hours</h3>
        <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
      </div>

      {/* Copyright Section */}
      <div className="footer-section">
        <p>&copy; 2024 Fast Food Restaurant. All rights reserved.</p>
        <p>@fastfoodrestaurant distributed by <span className="developer-name">Saranya</span></p>
      </div>
    </footer>
  );
};

export default Footer;
