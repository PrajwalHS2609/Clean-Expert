"use client";
import React from "react";
import "./HomeServices.css";
import HomeServicesHead from "./HomeServicesHead";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import cleaningService from "./../../../images/serviceImgs/Cleaning Service.png";
import civilWork from "./../../../images/serviceImgs/Civil Works.png";
import bathroom from "./../../../images/serviceImgs/Bathroom Renovation.png";
import marble from "./../../../images/serviceImgs/Marbles Polishing.png";
import painting from "./../../../images/serviceImgs/Painting Services.png";
import pest from "./../../../images/serviceImgs/Pest Control.png";
import shower from "./../../../images/serviceImgs/Shower Cubicle.png";
import waterProofing from "./../../../images/serviceImgs/Water Proofing.png";

import Image from "next/image";
const HomeServices = () => {
  const service = [
    {
      id: 1,
      img: cleaningService,
      title: "Cleaning Services",
      para: "",
      link: "/",
    },
    {
      id: 2,
      img: bathroom,
      title: "Bathroom Renovation",
      para: "",
      link: "/",
    },
    {
      id: 3,
      img: civilWork,
      title: "Civil Work",
      para: "",
      link: "/",
    },
    {
      id: 4,
      img: marble,
      title: "Marbles Polishing",
      para: "",
      link: "/",
    },
    {
      id: 5,
      img: painting,
      title: "Painting Services",
      para: "",
      link: "/",
    },
    {
      id: 6,
      img: pest,
      title: "Pest Control",
      para: "",
      link: "/",
    },
    {
      id: 7,
      img: shower,
      title: "Shower Cubical",
      para: "",
      link: "/",
    },
    {
      id: 8,
      img: waterProofing,
      title: "Water Proofing",
      para: "",
      link: "/",
    },
  ];
  return (
    <div className="homeService">
      <HomeServicesHead />
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          // Swiper-specific configuration
          onSwiper={(swiper) => {
            swiper.loopedSlides = 12; // Dynamically set loopedSlides on the Swiper instance
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide per view on small screens (e.g., mobile)
            },
            768: {
              slidesPerView: 2, // 2 slides per view on medium screens (e.g., tablets)
            },
            1024: {
              slidesPerView: 3, // 3 slides per view on large screens (e.g., desktop)
            },
          }}
        >
          {service.map((x) => (
            <SwiperSlide key={x.id}>
              <div className="homeServiceMain-cardContainer" key={x.id}>
                <Link href={x.link}>
                  <div className="homeServiceMain-cardCover">
                    <div className="homeServiceMain-cardPara">
                      <p>{x.para}</p>
                    </div>
                  </div>
                  <div className="homeServiceMain-cardImg">
                    <Image src={x.img} alt={x.title} loading="lazy" />
                  </div>
                  <div className="homeServiceMain-cardHead">
                    <h3>{x.title}</h3>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      {/* <div className="homeServiceContent">
        <h5>
          <Link class="fancy" href="/services" style={{textDecoration:"none"}}>
            <span className="top-key"></span>
            <span className="text">View All Services</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </Link>
        </h5>
      </div> */}
    </div>
  );
};

export default HomeServices;
