import React, { useState, useEffect } from "react";
import folder from "../../../assets/folder.svg";
import star from "../../../assets/star.svg";
import branch from "../../../assets/git-branch.svg";

import "./styles";

export default function Project() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/player35Oficial/repos")
      .then((resp) => resp.json())
      .then((data) => {
        data = data.filter(
          (current) => current.updated_at > "2023-03-02T00:47:40Z"
        );
        setRepos(data);
      });
  }, []);

  return (
    <>
      {repos.map(
        ({
          name,
          description,
          full_name,
          stargazers_count,
          forks,
          language,
        }) => (
          <div className="project-container" key={name}>
            <div className="project-title">
              <img src={folder} alt="ico" />
              <h3>
                <a
                  href={`https://github.com/Player35Oficial/${name}`}
                  target="_blank"
                >
                  {name}
                </a>
              </h3>
            </div>

            <div className="project-description">
              {description ? <p>{description}</p> : <p>{full_name}</p>}
            </div>

            <div className="project-stats">
              <div>
                <span>
                  <img src={star} alt="star" />
                  {stargazers_count}
                </span>
                <span>
                  <img src={branch} alt="branch" />
                  {forks}
                </span>
              </div>
              <div className={`language ${language}`}>
                <span>{language || "Ausente"}</span>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
