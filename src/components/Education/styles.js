import styled from "styled-components";

export const EduContainer = styled.div`
  background-color: var(--bg-cards);
  height: fit-content;
  width: 21.75rem;
  padding: 32px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  place-items: start;
  gap: 20px;

  ul {
    display: flex;
    margin-left: 40px;
    flex-direction: column;
    gap: 16px;
    text-align: start;
    line-height: 1.125rem;

    li p {
      font-size: 12px;
      font-weight: 300;
    }

    li p span {
      font-weight: 400;
    }
  }
`;
