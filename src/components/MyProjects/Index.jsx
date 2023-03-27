import React from "react";
import Project from "./Project";

import "./Index.css";

export default function MyProjects() {
  return (
    <>
      <div className="container-title">
        <h2>
          Meus Projetos{" "}
          <a
            href="https://github.com/Player35Oficial?tab=repositories"
            target="_blank"
          >
            Veja Todos
          </a>
        </h2>
      </div>
      <div className="container-project">
        <Project />
      </div>

      <div className="container-title">
        <h2>Posts Recentes</h2>
      </div>
    </>
  );
}
