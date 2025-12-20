import React from 'react'
import logo from "./../../../../images/logo.png"
import Image from 'next/image'
import "./LpPaintNavbar.css"
const LpPaintLogo = () => {
  return (
    <div className="LpPetsLogo-logo">
      <Image src={logo} alt="logo" />
    </div>
  )
}

export default LpPaintLogo
