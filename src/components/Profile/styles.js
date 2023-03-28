import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: var(--bg-cards);
  height: ${(props) => props.height || "18.25rem"};
  width: 21.75rem;
  padding: 32px;
  display: flex;
  flex-direction: column;
  place-items: center;
  border-radius: 1.25rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;

  ::before {
    display: flex;
    content: "";
    width: 126px;
    height: 126px;
    background-color: transparent;
    border: 2px solid #00ff00;
    border-radius: 50%;
    position: absolute;
  }

  img {
    width: 128px;
    margin-bottom: 1.875rem;
  }

  h3 {
    margin-bottom: 0.625rem;
  }
`;

export { ProfileContainer };
