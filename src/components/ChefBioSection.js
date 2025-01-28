import React from "react";
import "../styles/ChefBioSection.css";
import chefImage from "../images/chef-image.jpg"; // Import your chef image

function ChefBioSection() {
  return (
    <section className="chef-bio">
      <div className="container">
        <div className="chef-bio__content">
          <div className="chef-bio__text">
            <h2>Meet The Chef</h2>
            <p>
              With over [X] years of experience, I've been sharing the authentic
              tastes of Sri Lankan cuisine with food lovers from around the
              world. Join me in my kitchen to cook, laugh, and explore the rich
              heritage of Sri Lanka's food culture.
            </p>
            <div className="chef-bio__button">
              <button>CONTACT →</button>
            </div>
          </div>
          <div className="chef-bio__image-container">
            <img
              src={chefImage}
              alt="Chef [Chef's Name]"
              className="chef-bio__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChefBioSection;
