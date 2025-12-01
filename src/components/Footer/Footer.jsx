import React from 'react'
import FooterTop from './FooterTop'
import "./Footer.css"
import FooterBelow from './FooterBelow';
const Footer = () => {
  return (
    <div className='footerContainer'>
      <FooterTop/>
      <FooterBelow/>
    </div>
  )
}

export default Footer
