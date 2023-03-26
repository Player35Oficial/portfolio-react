import React from "react";
import folder from "../../assets/folder.svg";
import star from "../../assets/star.svg";
import branch from "../../assets/git-branch.svg";
import "./Index.css";

export default function MyProjects() {
  console.log("carregou");
  return (
    <>
      <div className="container-title">
        <h2>
          Meus Projetos <a href="/">Veja Todos</a>
        </h2>
      </div>

      <div className="project-container">
        <div className="project-title">
          <img src={folder} alt="ico" />
          <h3>my-onix</h3>
        </div>

        <div className="project-description">
          <p>
            Consulte os códigos de erro que aparecem no painel do veículo Onix.
          </p>
        </div>

        <div className="project-stats">
          <div>
            <span>
              <img src={star} alt="star" />
              100
            </span>
            <span>
              <img src={branch} alt="branch" />
              100
            </span>
          </div>
          <div className="language javascript">
            <span>Javascript</span>
          </div>
        </div>
      </div>

      <div className="container-title">
        <h2>Posts Recentes</h2>
      </div>
    </>
  );
}
