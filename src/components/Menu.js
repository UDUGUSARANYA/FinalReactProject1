import React, { useState} from 'react';
import './Menu.css';
import { FaShoppingCart } from 'react-icons/fa';


const menuItems = [
    {category: 'Pizzas', Name:'Delicious Margherita Pizza', Price: 12.99, image: '/images/f1.png'},
    {category: 'Burgers', Name:'Classic Cheeseburger', Price: 9.99, image: '/images/f2.png'},
    {category: 'Pasta', Name:'Caesar Salad', Price: 7.99, image: '/images/f3.png'},
    {category: 'Fries', Name:'Crispy French Fries', Price: 3.99, image: '/images/f4.png'},
    {category: 'Pizzas', Name:'Refreshing Lemonade', Price: 2.99, image: '/images/f5.png'},
    {category: 'Pizzas', Name:'Delicious Margherita Pizza', Price: 12.99, image: '/images/f6.png'},
    {category: 'Burgers', Name:'Classic Cheeseburger', Price: 9.99, image: '/images/f7.png'},
    {category: 'Pasta', Name:'Caesar Salad', Price: 7.99, image: '/images/f8.png'},
    {category: 'Fries', Name:'Crispy French Fries', Price: 3.99, image: '/images/f9.png'},
    {category: 'Pizzas', Name:'Delicious Margherita Pizza', Price: 12.99, image: '/images/f1.png'},
    {category: 'Burgers', Name:'Classic Cheeseburger', Price: 9.99, image: '/images/f2.png'},
    {category: 'Pasta', Name:'Caesar Salad', Price: 7.99, image: '/images/f3.png'},
    {category: 'Fries', Name:'Crispy French Fries', Price: 3.99, image: '/images/f4.png'},
    {category: 'Pizzas', Name:'Refreshing Lemonade', Price: 2.99, image: '/images/f5.png'},
    {category: 'Pizzas', Name:'Delicious Margherita Pizza', Price: 12.99, image: '/images/f6.png'},
    {category: 'Burgers', Name:'Classic Cheeseburger', Price: 9.99, image: '/images/f7.png'},
    {category: 'Pasta', Name:'Caesar Salad', Price: 7.99, image: '/images/f8.png'},
    {category: 'Fries', Name:'Crispy French Fries', Price: 3.99, image: '/images/f9.png'}
   
];
const category=['All','Pizzas','Burgers','Pasta','Fries'];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredItems = activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category === activeCategory);
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <div className="menu-categories">
                {category.map(category => (
                    <button key={category} className={activeCategory === category ? 'active' : ''} onClick= {() => setActiveCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="menu-items">
                {filteredItems.map((item, index) => (
                    <div className="menu-card" key={index}>
                        <img src={item.image} alt={item.Name} />
                     <div className="menu-card-content">
  <h3>{item.Name}</h3>
  <div className="menu-card-price">${item.Price.toFixed(2)}</div>
  <button className="order-button">
     <FaShoppingCart /> Order Now
  </button>
</div>

                    </div>
                ))}
            </div>
        </div>
    );
};
export default Menu;