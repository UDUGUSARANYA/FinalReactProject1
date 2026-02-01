import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Header.css';


const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    showArrows={false}


              >
                <div className='slider-text'>
                    <h2>Welcome to Our Fast Food Restaurant!</h2>
                    <p>Delicious burgers, fries, and more!</p>
                    <button className='order-button'>Order Now</button>
            
                </div>

                   <div className='slider-text'>
                    <h2>Delicious Meals</h2>
                    <p>Delicious burgers, fries, and more!</p>
                    <button className='order-button'>Order Now</button>
            
                </div>
                   <div className='slider-text'>
                    <h2>Best Burger in Town</h2>
                    <p>Delicious burgers, fries, and more!</p>
                    <button className='order-button'>Order Now</button>
            
                </div>


              </Carousel>
            </div>
        </header>




    );

};
export default Header;