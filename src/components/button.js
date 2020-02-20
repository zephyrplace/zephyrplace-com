import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  width: 15vw;
  cursor: pointer;
  user-select: none;
  height: 8vh;
  border-radius: 5vh;
  border: ${props => props.border || "5px solid white"};
  color: ${props => props.originalColor || "white"};
  align-self: center;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${props => props.backgroundColor || "white"};
    color: ${props => props.color || "black"};
  }
  @media (max-width: 768px) {
    width: 30vw;
    height: 7vh;
    font-size: 2vh;
  }
  @media (max-width: 414px) {
    width: 30vw;
    height: 6vh;
  }
`;
