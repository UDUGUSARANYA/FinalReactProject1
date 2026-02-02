// import React,{useState} from 'react';
// import './Navbar.css';
// import {FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes} from 'react-icons/fa';
// import { nav } from 'framer-motion/client';

// const Navbar = () => {


//     const[isMobile, setIsMobile] = useState(false);

//     return (
//         <nav className='Navbar'>
//             <h1 className='navbar-logo'>Feane</h1>
//             <div className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
//                 <a href='home'>Home</a>
//                 <a href='about'>About</a>
//                 <a href='menu'>Menu</a>
//                 <a href='book-table'>Book Table</a>
//                 <FaUser className='nav-icon'></FaUser>
//                 <FaShoppingCart className='nav-icon'></FaShoppingCart>
//                 <FaSearch className='nav-icon'></FaSearch>
//                 <button className='orders-button'>Order Online</button>
            

//             </div>
//             <div className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
//                 {isMobile ? <FaTimes /> : <FaBars />}
                
//             </div>
//         </nav>
//     )
// }
// export default Navbar;











import React, { useState } from 'react';
import './Navbar.css';
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='Navbar'>
      <h1 className='navbar-logo'>Feane</h1>

      <div className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        <a href='home'>Home</a>
        <a href='about'>About</a>
        <a href='menu'>Menu</a>
        <a href='book-table'>Book Table</a>

        <FaUser className='nav-icon' />
        <FaShoppingCart className='nav-icon' />
        <FaSearch className='nav-icon' />

        <button className='orders-button'>Order Online</button>
      </div>

      <div
        className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
