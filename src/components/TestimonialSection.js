import React from "react";
import "./../styles/TestimonialSection.css";

function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p>
              "Absolutely loved it.
              <br /> Amazing food and charismatic chef."
            </p>
          </div>
          <div className="testimonial-author">
            <img src="emma-brown.jpg" alt="Emma Brown" />
          </div>
          <div className="testimonial-name">
            <p>Emma Brown, NYC</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
