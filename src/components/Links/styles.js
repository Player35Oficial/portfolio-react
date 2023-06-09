import styled from "styled-components";

const LinksContainer = styled.div`
  background-color: var(--bg-cards);
  min-height: 18.25rem;
  width: 21.75rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: start;
  justify-content: center;
  padding: 30px 0 30px 40px;
  border-radius: 1.25rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    gap: 1rem;
    place-items: center;
    height: 30px;

    span {
      transition: 0.2s;
      cursor: default;

      &:hover {
        color: #e7e7e7;
      }
    }

    a {
      line-height: 0;
      text-decoration: none;
      color: inherit;
      transition: 0.2s;

      &:hover {
        opacity: 1.5;
        color: #e7e7e7;
      }
    }
  }
`;

export { LinksContainer };
