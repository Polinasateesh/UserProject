import { Link } from "react-router-dom";
import './App.css'
import logo from "./assets/pngwing.com.png";
import { useEffect, useState } from "react";
const NavBar = () => {
  
 
    const jwtToken=window.localStorage.getItem('jwtToken')

  
if(jwtToken!==null){
  return (
    <>
     <div className="nav-container">
      <Link
        to="ContactForm"
        className="link"
      >
        <img src={logo} alt="logo" />

      </Link>
      <div
        className=".nav-items"
      >
        <Link
          to="ContactForm"
          className="link"
         
        >
          Customer Form
        </Link>
        <Link
          to="ContactDetails"
          className="link"
          
        >
          Customer Details
        </Link>
      </div>
    </div>
    </>
  )

}else{
  return null
}
  
};
export default NavBar;
