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
      {repos.map((repo) => (
        <div className="project-container">
          <div className="project-title">
            <img src={folder} alt="ico" />
            <h3>
              <a href="">{repo.name}</a>
            </h3>
          </div>

          <div className="project-description">
            {repo.description ? (
              <p>{repo.description}</p>
            ) : (
              <p>{repo.full_name}</p>
            )}
          </div>

          <div className="project-stats">
            <div>
              <span>
                <img src={star} alt="star" />
                {repo.stargazers_count}
              </span>
              <span>
                <img src={branch} alt="branch" />
                {repo.forks}
              </span>
            </div>
            <div className={`language ${repo.language}`}>
              <span>{repo.language || "Ausente"}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
