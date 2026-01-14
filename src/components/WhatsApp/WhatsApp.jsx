"use client";
import React from "react";
import "./WhatsApp.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Logo from "./../../images/favicon.png";
const WhatsApp = () => {
  // let [visible, setVisible] = useState();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(true);
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }, 10000); // Show every 10 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <Image src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="917090234446"
        accountName="PrimeCleanCo "
        avatar={Logo.src} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Welcome to PrimeClean! Trusted experts for cleaning, maintenance, and home care services. How can we help today? - 7090234446" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
