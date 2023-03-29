import React from "react";
import Project from "./Project";

// import "./Index.css";
import { ContainerProject, ContainerTitle } from "./styles";

export default function MyProjects() {
  return (
    <>
      <ContainerTitle className="container-title">
        <h2>
          Meus Projetos{" "}
          <a
            href="https://github.com/Player35Oficial?tab=repositories"
            target="_blank"
          >
            Veja Todos
          </a>
        </h2>
      </ContainerTitle>
      <ContainerProject className="container-project">
        <Project />
      </ContainerProject>
    </>
  );
}
