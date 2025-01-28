import React, { useState } from "react";
import "../styles/ContactFormSection.css";

function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-form">
      {/* Header Section */}
      <div className="header-section">
        <h2 className="form-title">At Your Service</h2>
        <p className="contact-details">
          Tel: 123-456-7890 | Email: grand39cooking@gmail.com
        </p>
        <p className="subheading">
          Tell me a little about your event so I can begin the creation process
        </p>
      </div>

      {/* Form Section */}
      <div className="container">
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="firstName">First name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="submit-btn-wrapper">
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;
