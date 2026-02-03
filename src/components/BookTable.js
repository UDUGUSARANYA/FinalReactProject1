// import React from 'react';
// import './BookTable.css';

// const BookTable = () => {
//     return (
//         <div className="book-table-section">
//             <div className="form-container">
//                 <h2>Book a Table</h2>
//                 <form>
//                     <input type="text" placeholder="Name" required />
//                     <input type="number" placeholder="Phone Number" required />
//                     <input type="number" placeholder="How many persons?" required />
//                     <input type="date" placeholder="dd-mm-yyyy" required />
//                     <input type="email" placeholder="Your email" required />
//                     <button type="submit" >Book Now</button>
//                 </form>
//             </div>
//             <div className="map-container">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13773.555445861073!2d78.39559795!3d17.5042406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1769873059136!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     title="Restaurant location map"
//                     allowFullScreen
//                     aria-hidden="false"
//                     tabIndex="0"
//                 ></iframe>

              
            
              

//             </div>
//         </div>
//     );
// };
// export default BookTable;






import React from 'react';
import './BookTable.css';

const BookTable = () => {
  return (
    <div className="book-table-section">
      {/* Form Section */}
      <div className="form-container">
        <h2>Book a Table</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="number" placeholder="How many persons?" required />
          <input type="date" placeholder="dd-mm-yyyy" required />
          <input type="email" placeholder="Your email" required />
          <button type="submit">Book Now</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13773.555445861073!2d78.39559795!3d17.5042406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1769873059136!5m2!1sen!2sin"
          width="100%"
          height="100%"
          title="Restaurant location map"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default BookTable;
