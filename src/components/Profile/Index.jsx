import React from "react";
// import "./Index.css";
import { ProfileContainer } from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://avatars.githubusercontent.com/u/85082875?v=4"
        alt="Selfie mostrando meu rosto de frente"
      />
      <h3>Yuri G. Santana</h3>
      <p>Front End Developer</p>
    </ProfileContainer>
  );
}
