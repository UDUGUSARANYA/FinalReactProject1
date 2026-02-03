import React from 'react';
import './Burger2.css';


const Burger2 = () => {
    return (
        <div className="burger-section">
            <div className="burger-content">
               <img src={process.env.PUBLIC_URL + '/images/about-img.png'} alt="About Burger" />
                <div className="burger-text">
                <h2>About Our Burgers</h2>
                <p>Our burgers are crafted with the finest ingredients,
                     ensuring a burst of flavor in every bite. From the 
                     juicy patties to the fresh toppings, we take pride 
                     in delivering a mouthwatering experience that keeps you coming back for more.</p>
                     <button className="read-more-button">Learn More</button>

            </div>

            </div>
           

        </div>
    );
};
export default Burger2;