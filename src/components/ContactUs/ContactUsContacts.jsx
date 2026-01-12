import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";
import "./ContactUs.css";
import { IoLocationOutline } from "react-icons/io5";
const ContactUsContacts = () => {
  return (
    <div className="contactUsContacts-container">
      <div className="contactUsContacts-warpper">
        <div className="contactUsContacts-content">
          <div className="contactUsContacts-iconContainer">
            <LuPhoneCall className="contactUsContacts-icon" />
          </div>
          <h4>Office Number</h4>
          <a href="tel:7090234446">+91 7090234446</a>
          <a href="tel:8792446647">+91 8792446647</a>
        </div>
      </div>
      <div className="contactUsContacts-warpper">
        <div className="contactUsContacts-content">
          <div className="contactUsContacts-iconContainer">
            <IoLocationOutline className="contactUsContacts-icon" />
          </div>
          <h4>Our Location</h4>
          <a href="https://www.google.com/maps/place/Paintkraft/@12.838076,77.660637,17z/data=!4m6!3m5!1s0x3bae6d60143d6cc1:0xf4d9aedb9b82d3b8!8m2!3d12.837888!4d77.660993!16s%2Fg%2F11mtjlllg3?hl=en&entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D">
            3RD FLOOR, 1669, 27th Main Rd, PWD Quarters, Sector 2, HSR Layout,
            Bengaluru, Karnataka 560102
          </a>
        </div>
      </div>
      <div className="contactUsContacts-warpper">
        <div className="contactUsContacts-content">
          <div className="contactUsContacts-iconContainer">
            <RxEnvelopeClosed className="contactUsContacts-icon" />
          </div>
          <h4>Our Email</h4>
          <a href="mailto:info@paintkraft.in">info@paintkraft.in</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContacts;
