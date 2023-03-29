import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  background-color: var(--bg-cards);
  width: 100%;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  line-height: 24px;

  h2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  h2 a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    font-weight: 400;

    &:hover {
      color: #e7e7e7;
    }
  }
`;

export const ContainerProject = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;

    &:hover {
      color: #e7e7e7;
    }
  }

  .project-container {
    height: 180px;
    width: 100%;
    background-color: var(--bg-cards);
    border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    transition: 0.2s;

    &:hover {
      height: 190px;
      background-color: #49475b;
    }
  }
  .project-container .project-title {
    display: flex;
    gap: 1rem;
  }

  .project-container .project-description,
  .project-stats {
    font-size: 14px;
    font-weight: 400;
  }

  .project-container .project-stats {
    display: flex;
    justify-content: space-between;
  }

  .project-container .project-stats div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .project-container .project-stats span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .project-container .project-stats .language::before {
    content: "";
    width: 16px;
    height: 16px;
    border: 2px solid var(--text-color);
    border-radius: 50%;
  }

  .project-container .project-stats .language::before.javaScript {
    background-color: yellow;
  }
`;
