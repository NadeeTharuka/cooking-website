import React from "react";
import "./../styles/HeroSection.css";
// import image1 from "../images/image1.jpg";
// import image2 from "../images/image2.jpg";
// import image3 from "../images/image3.jpg";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="vertical-text">
          <div className="arrow-symbol">→</div>
          <span className="small-text">04</span>
          <span className="divider"></span>
          <span className="large-text">02</span>
        </div>
        <div className="content">
          <h1>Cook with Chef Iran in Paradise!</h1>
          <p>
            Explore the art of Sri Lankan cooking, surrounded by breathtaking
            landscapes. Join a unique cooking class that blends flavors and
            culture!
          </p>
        </div>
        {/* <div className="image-grid">
          <img src={image1} alt="Food 1" />
          <img src={image2} alt="Food 2" />
          <img src={image3} alt="Delicious Sri Lankan dish" />
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;