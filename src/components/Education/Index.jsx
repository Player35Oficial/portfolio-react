import React from "react";
import { EduContainer } from "./styles";

export default function Education() {
  return (
    <EduContainer>
      <h3>Educação</h3>
      <ul>
        <li>
          <h4>UNASP - SP</h4>
          <p>
            01/2022 - 2024 <br />
            <span>Análise e Desenvolvimento de Sistemas</span>
          </p>
        </li>
        <li>
          <h4>DIO</h4>
          <p>
            02/2023 - 03/2023 <br />
            <span>Formação React Developer</span>
          </p>
        </li>
      </ul>
    </EduContainer>
  );
}
