import React from "react";

const ContactUsLocation = () => {
  return (
    <div>
      <div></div>
      <div>
        <form>
          <input type="text" placeholder="Your Name*" required />
          <input type="tel" placeholder="Phone Number*" required />
          <input type="text" placeholder="Pincode*" required />

          <select required>
            <option>Select Service</option>
            <option>Home Painting</option>
            <option>Apartment Painting</option>
            <option>Waterproofing</option>
          </select>

          <button type="submit">Request Callback</button>
          <span>No spam • 100% privacy</span>
        </form>
      </div>
    </div>
  );
};

export default ContactUsLocation;
