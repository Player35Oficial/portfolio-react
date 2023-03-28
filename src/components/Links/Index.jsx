import React from "react";
import briefcase from "../../assets/briefcase.svg";
import pin from "../../assets/map-pin.svg";
import globe from "../../assets/globe.svg";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import github from "../../assets/github.svg";
import { LinksContainer } from "./styles.js";

export default function Links() {
  return (
    <LinksContainer>
      <div>
        <img src={pin} alt="icon" />
        <a href="Brasil">Brasil</a>
      </div>
      <div className="links-item">
        <img src={briefcase} alt="icon" />
        <a href="Rocketseat">Rocketseat</a>
      </div>
      <div className="links-item">
        <img src={github} alt="icon" />
        <a href="Player35Oficial">Player35oficial</a>
      </div>
      <div className="links-item">
        <img src={linkedin} alt="icon" />
        <a href="yuri-player35">yuri-player35</a>
      </div>
      <div className="links-item">
        <img src={globe} alt="icon" />
        <a href="https://player35.dev">https://player35.dev</a>
      </div>
      <div className="links-item">
        <img src={mail} alt="icon" />
        <a href="yuri@gmail.com">yuri@gmail.com</a>
      </div>
    </LinksContainer>
  );
}
