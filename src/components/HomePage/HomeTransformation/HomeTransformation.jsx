"use client";
import React from "react";
import "./HomeTransformation.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imgBefore1 from "@/images/BeforeAfter/Img1Before.png";
import imgAfter1 from "@/images/BeforeAfter/Img1After.png";
import imgBefore2 from "@/images/BeforeAfter/Img2Before.png";
import imgAfter2 from "@/images/BeforeAfter/Img2After.png";
import imgBefore3 from "@/images/BeforeAfter/Img3Before.png";
import imgAfter3 from "@/images/BeforeAfter/Img3After.png";
import imgBefore4 from "@/images/BeforeAfter/Img4Before.png";
import imgAfter4 from "@/images/BeforeAfter/Img4After.png";
import imgBefore5 from "@/images/BeforeAfter/Img5Before.png";
import imgAfter5 from "@/images/BeforeAfter/Img5After.png";
import imgBefore6 from "@/images/BeforeAfter/Img6Before.png";
import imgAfter6 from "@/images/BeforeAfter/Img6After.png";
import imgBefore7 from "@/images/BeforeAfter/Img7Before.png";
import imgAfter7 from "@/images/BeforeAfter/Img7After.png";
import imgBefore8 from "@/images/BeforeAfter/Img8Before.png";
import imgAfter8 from "@/images/BeforeAfter/Img8After.png";
import imgBefore9 from "@/images/BeforeAfter/Img9Before.png";
import imgAfter9 from "@/images/BeforeAfter/Img9After.png";
import imgBefore10 from "@/images/BeforeAfter/Img10Before.png";
import imgAfter10 from "@/images/BeforeAfter/Img10After.png";
import imgBefore11 from "@/images/BeforeAfter/Img11Before.png";
import imgAfter11 from "@/images/BeforeAfter/Img11After.png";
import imgBefore12 from "@/images/BeforeAfter/Img12Before.png";
import imgAfter12 from "@/images/BeforeAfter/Img12After.png";
import imgBefore13 from "@/images/BeforeAfter/Img13Before.png";
import imgAfter13 from "@/images/BeforeAfter/Img13After.png";
import imgBefore14 from "@/images/BeforeAfter/Img14Before.png";
import imgAfter14 from "@/images/BeforeAfter/Img14After.png";
import imgBefore15 from "@/images/BeforeAfter/Img15Before.png";
import imgAfter15 from "@/images/BeforeAfter/Img15After.png";
const HomeTransformation = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="homeTransformation-container">
      <h2>Transformations You’ll Love</h2>

      <p>
        Experience stunning makeovers that refresh your space and
        elevate your lifestyle.
      </p>
      <div className="homeTransformation-wrapper">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore1.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter1.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore2.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter2.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore3.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter3.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore4.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter4.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore5.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter5.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore6.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter6.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore7.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter7.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore8.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter8.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore9.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter9.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore10.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter10.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore11.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter11.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore12.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter12.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore13.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter13.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore14.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter14.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="homeTransformation-content">
            <div className="lpPaintBeforeAfter-content">
              <div className="lpPaintBeforeAfter-item">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgBefore15.src}
                      alt="Image before"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgAfter15.src}
                      alt="Image after"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
};
export default HomeTransformation;