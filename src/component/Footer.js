import React from "react";
import Logo from "../AI/images/logo.svg";
import Mail from "../AI/icons/mail.png";
import Location from "../AI/icons/location.png";
import Phone from "../AI/icons/tel.png";
import Facebok from "../AI/icons/facebook.png"
import Instagram from "../AI/icons/instagram.png"
import Linkedin from "../AI/icons/linkedin.png"
import Twitter from "../AI/icons/twitter.png"
import global from "../AI/icons/globe.png"


import youtube from "../AI/icons/youtube.png"


export const Footer = () => {
  return (
    <div className="footer_wrap">
      <div className="footer1">
        <img src={Logo} />
        <h4 style={{ color: "#3A68B8" }}>Articial intellegience</h4>
        <p style={{ width: "300px", color: "white" }}>
          Lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, non blanditiis autem id dolore illum exercitationem
          deserunt commodi officia ap
        </p>
        <div className="iconmail" style={{ display: "flex" }}>
          <img src={Mail} />
          <p> Company@gmail.com</p>
        </div>
        <div className="iconphone" style={{ display: "flex" }}>
          <img src={Phone} />
          <p> +998906770959</p>
        </div>{" "}
        <div className="iconloc" style={{ display: "flex" }}>
          <img src={Location} />
          <p> Toshkent shahar</p>
        </div>
      </div>
      <div className="footer2">
          <h3>Informtion</h3>
          <p>New collection</p>
          <p>About As</p>
          <p>Contact As</p>
          <p>Latest News</p>
          <p> Our Sitem</p>
          <p>Orders</p>


      </div>
      <div className="footer2">

      <h3>Footer Menu</h3>
          <p>Instagram Profile</p>
          <p>New collection</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p> Our Sitem</p>
          <p>Orders</p>

      </div>
      <div className="footer2">

      <h3>Usefull Links</h3>
          <p>New collection</p>
          <p>About As</p>
          <p>Contact As</p>
          <p>Latest News</p>
          <p> Our Sitem</p>
          <p>Orders</p>
      </div>
      <div className="footer2">

<h3>About the Store</h3>
<p>Lorem ipsum dillar sit amet</p>
<div className="icontwit">
<img src={Facebok} />
<img src={Instagram}/>
<img src={ Twitter}/>
<img src={ Linkedin}/>
<img src={youtube}/>

</div>

<div className="global">
<img src={global}/>
<p>English</p>

</div>


      </div>
    </div>
  );
};
