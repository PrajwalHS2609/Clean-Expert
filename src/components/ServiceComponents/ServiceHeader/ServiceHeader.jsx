import Image from "next/image";
import "./ServiceHeader.css";
import React from "react";
import cleaningService from "./../../../images/serviceImgs/Cleaning Service.png";
import civilWork from "./../../../images/serviceImgs/Civil Works.png";
import bathroom from "./../../../images/serviceImgs/Bathroom Renovation.png";
import marble from "./../../../images/serviceImgs/Marbles Polishing.png";
import painting from "./../../../images/serviceImgs/Painting Services.png";
import pest from "./../../../images/serviceImgs/Pest Control.png";
import shower from "./../../../images/serviceImgs/Shower Cubicle.png";
import waterProofing from "./../../../images/serviceImgs/Water Proofing.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import offerImg1 from "./../../../images/offerImgs/Professional-Cleaning-Service.png";
import offerImg2 from "./../../../images/offerImgs/Pest-Control-Offer.png";
import offerImg3 from "./../../../images/offerImgs/Painting-Offer.png";

const ServiceHeader = () => {
  return (
    <div className="serviceHeader-container">
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-servicesContent">
          <div className="serviceHeader-servicesItem">
            <Link href={""}>
              <Image src={civilWork} alt="civil Work" />
              <div className="serviceHeader-servicesItemCover">
                <p>Civil work</p>
              </div>
            </Link>
          </div>
          <div className="serviceHeader-servicesItem">
            <Link href={""}>
              <Image src={bathroom} alt="bathroom" />
              <div className="serviceHeader-servicesItemCover">
                <p>Bathroom</p>
              </div>
            </Link>
          </div>
          <div className="serviceHeader-servicesItem">
            <Link href={""}>
              <Image src={marble} alt="marble" />
              <div className="serviceHeader-servicesItemCover">
                <p>Marble Polishing</p>
              </div>
            </Link>
          </div>
          <div className="serviceHeader-servicesItem">
            <Link href={""}>
              <Image src={painting} alt="painting" />
              <div className="serviceHeader-servicesItemCover">
                <p>Painting</p>
              </div>
            </Link>
          </div>
          <div className="serviceHeader-servicesItem">
            <Link href={""}>
              <Image src={pest} alt="pest" />
              <div className="serviceHeader-servicesItemCover">
                <p>Pest Control</p>
              </div>
            </Link>
          </div>
          <div className="serviceHeader-servicesItem">
            <Link href={""}>
              <Image src={shower} alt="shower" />
              <div className="serviceHeader-servicesItemCover">
                <p>House Renovation</p>
              </div>
            </Link>
          </div>
          <div className="serviceHeader-servicesItem">
            <Link href={""}>
              <Image src={waterProofing} alt="waterProofing" />
              <div className="serviceHeader-servicesItemCover">
                <p>Waterproofing</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="serviceHeader-wrapper">
        <Image src={cleaningService} alt="Cleaning Service" />
      </div>
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-content">
          <h3>Cleaning Services</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            iure. Beatae culpa magni hic numquam eligendi, necessitatibus
            corrupti accusantium ad animi veniam cum expedita iste, autem optio
            sint quod at?
          </p>
          <div className="serviceHeader-contentBtn">
            <button className="serviceHeader-btn">Book Now</button>
            <button className="serviceHeader-btn">
              Chat with Us
              <FaWhatsapp className="serviceHeader-btnIco" />
            </button>
          </div>
        </div>
        <div className="serviceHeader-content">
          {" "}
          Cleaning Sub Services : <Link href={"/"}>Bathroom</Link>,{" "}
          <Link href={"/"}>Kitchen</Link>, <Link href={"/"}>Full House</Link>,{" "}
          <Link href={"/"}>Sofa</Link>, <Link href={"/"}>Chimney</Link>,{" "}
          <Link href={"/"}>Mattress</Link>, <Link href={"/"}>Carpet</Link>,
          <Link href={"/"}>Window</Link>, <Link href={"/"}>Chair</Link>,{" "}
          <Link href={"/"}>Balcony</Link>
        </div>
        <div className="serviceHeader-content">
          <a href="">
            {" "}
            <IoLocationOutline className="serviceHeader-iconAdd" /> Bangalore,
            India
          </a>
          <a href="">
            <FiPhone className="serviceHeader-iconAdd" /> 91 9876543210
          </a>
        </div>
        <div className="serviceHeader-content">
          <a href="">
            <FaInstagram className="serviceHeader-socialIco" />
          </a>
          <a href="">
            <FaYoutube className="serviceHeader-socialIco" />
          </a>
          <a href="">
            <FaFacebookF className="serviceHeader-socialIco" />
          </a>
          <a href="">
            <FaLinkedin className="serviceHeader-socialIco" />
          </a>
        </div>
      </div>
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-adsContent">
          <div className="serviceHeader-adsItem">
            <Image src={offerImg1} alt="" />
          </div>
          <div className="serviceHeader-adsItem">
            <Image src={offerImg2} alt="" />
          </div>
          <div className="serviceHeader-adsItem">
            <Image src={offerImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
