import React from 'react';
import './Promotions.css';
import { FaShoppingCart } from 'react-icons/fa';
const Promotions = () => {
    return (
        <div className="promotions">
            <div className="promotion-card">
                <img src={process.env.PUBLIC_URL + '/images/f1.png'} alt="Promotion 1" />
                

                <div className="promotion-content">
                    <div className="promotion-title">Tasty Thursdays</div>
                    <div className="promotion-discount">20% off</div>
                    <button className="order-button">Order Now <FaShoppingCart /></button>
        
                </div>
            </div>
          <div className="promotion-card">
                <img src={process.env.PUBLIC_URL + '/images/f6.png'} alt="Promotion 2" />
                <div className="promotion-content">
                    <div className="promotion-title">Pizza Daya</div>
                    <div className="promotion-discount">15% off</div>
                    <button className="order-button">Order Now <FaShoppingCart /></button>
        
                </div>
        </div>
        </div>
        )
};
export default Promotions;