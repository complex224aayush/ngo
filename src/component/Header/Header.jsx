import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import logo from "../../Images/logo.png";

const Header = () => {
  return <ReactNavbar 
  navColor1="white"
  navColor2="hsl(219, 48%, 8%)"
  burgerColor="hsl(250, 100%, 75%)"
  burgerColorHover="hsl(250, 100%, 75%)"
  logo={logo}
  logoWidth="250px"
  logoHoverColor="hsl(250, 100%, 75%)"
  nav2justifyContent="space-around"
  nav3justifyContent="space-around"
  nav1Text="Bal Jyoti"
  link1Text="Home"
  link2Text="About"
  link3Text="Intervetion"
  link4Text="Region"


  link1Url="/"
  link2Url="/About"
  link3Url="/Intervetion"
  link4Url="/Region"

 
  link1ColorHover="white"
  link1Color="HSL(250, 100%, 75%)"
  link1Size="1.5rem"
  link1Padding="3vmax"

  />
  
}
export default Header

