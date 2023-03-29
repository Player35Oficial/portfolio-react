import styled from "styled-components";

export const TechContainer = styled.div`
  background-color: var(--bg-cards);
  height: fit-content;
  width: 21.75rem;
  padding: 32px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  h2 {
    font-size: 20px;
    text-align: start;
  }

  ul {
    justify-content: center;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;

    li {
      background-color: var(--bg-techs);
      color: black;
      padding: 5px 12px;
      border-radius: 30px;
      flex: 1;
    }
  }
`;
