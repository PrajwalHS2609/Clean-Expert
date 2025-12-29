import React from 'react'
import HomeTestimonialMain from './HomeTestimonialMain'
import "./HomeTestimonial.css";
import HeadingProps from '@/components/HeadingProps/HeadingProps';

const HomeTestimonial = () => {
  return (
    <div className="homeTestimonial-container">
    <HeadingProps
        title="What Our Customers Say"
        para=""
      />{" "}
    <HomeTestimonialMain />
  </div>
  )
}

export default HomeTestimonial
