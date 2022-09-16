import React from "react";
import "./Banner.css";
import stars from "./images/star.png";
import moon from "./images/moon.png";
import Name from "../Name/Name";
import { useEffect } from "react";
import Image from "../Image/Image";
import portfolio from './images/portfolio.png'

export default function Banner() {
  useEffect(() => {
    let star = document.getElementById("stars");
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      star.style.left = value * 1.05 + "px";
    });
  })

  return (
    <>
      <div className="banner">
        <div className="background">
          <img src={stars} alt="stars" id="stars" />
          <img src={moon} alt="moon" id="moon" />
        </div>
        <div className="portname">
        <Name name="VIGHNESH SADAGOPAL" />
        <Image portfolio={portfolio}/>
        </div>
      </div>
    </>
  );
}
