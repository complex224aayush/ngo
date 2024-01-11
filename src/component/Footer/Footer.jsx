import React from 'react'
import "./Footer.css";
import fb from "../../Images/facebook.png";
import insta from "../../Images/instagram.png"

const Footer = () => {
  return (
    <div className='footer'>

      <div className='left'>
      <h4>BAL JYO<span className='ad21'>TI FOUNDATION</span></h4>
      <p>C/o- Jyoti Devi</p>
      <p>Behind 80ft Lord Budhha Statue, Near Kanako Hotel</p>
      <p>Bodhgaya, GAYA</p>
      <p>BIHAR - 824231</p>

      </div>
      <div className='right'>
      <p>+919934932001, +919950200638</p>
      <p>baljyoti.org@gmail.com</p>
      <div>
      <div className='links4'>
        <a href='https://www.facebook.com/profile.php?id=100064711629557&mibextid=LQQJ4d' target='black'>
            <img src={fb} alt='fb'/>
        </a>
      </div>
      <div className='links3'>
        <a href="https://www.instagram.com/baljyoti_org?igsh=MWFvY3plNm9kMG9kMQ==" target='black'>
            <img src={insta}  alt='insta'/>
        </a>
        </div>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
