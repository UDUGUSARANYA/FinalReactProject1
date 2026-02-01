import React from "react";
import { FaMapMarkedAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaPinterest  } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section"><h3>Contact Us</h3>
            <p><FaMapMarkedAlt /> 123 Fast Food St, Food City, FC 12345</p>
            <p><FaPhone /> +1 (123) 456-7890</p>
            <p><FaEnvelope /> info@fastfoodrestaurant.com</p>
            </div>
            <div className="footer-section"><h3>Follow Us</h3>
            <p>Stay connected through our social media channels:</p>
            <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaPinterest /></a>
            </div>
            <div className="footer-section">
                <h3>opening hours</h3>
                <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
            </div>
            <div className="footer-section">
                <p>&copy; 2024 Fast Food Restaurant. All rights reserved.</p>
                <p>@fastfoodrestaurant distributed by <span className="developer-name">Saranya</span></p>
            </div>
            </div>


</footer>
    )
}
export default Footer;

            