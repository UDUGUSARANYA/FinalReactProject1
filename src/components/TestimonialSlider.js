
import React, { useState } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    name: "Moana Michell",
    text:
      "The food here is absolutely amazing! The flavors are so authentic and the ingredients taste fresh.",
    image: "/images/client1.jpg",
    designation: "magna aliqua",
  },
  {
    name: "Mike Michell",
    text:
      "The food here is absolutely amazing! The flavors are so authentic and the ingredients taste fresh.",
    image: "/images/client2.jpg",
    designation: "magna aliqua",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <h2>What Our Customers Say</h2>

      {/* Main testimonial */}
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <h5>{testimonial.designation}</h5>
          </div>
        ))}
      </div>

      {/* Thumbnail navigation */}
      <div className="testimonial-navigation">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`testimonial-image ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="slider-control">
        <button onClick={handlePrevClick}>&lt;</button>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
