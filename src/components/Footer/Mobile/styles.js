import styled from "styled-components";
import Fogete from "../../../assets/svg/LOGOBRANCOSVG.svg";

export const Container = styled.div`
  flex-direction: column;
  background-color: black;
  width: 100vw;
  height: 120vh;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 110vh;
  }
  @media (max-width: 375px) {
    height: 110vh;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 45vw;
  margin: auto;
  background-image: url(${Fogete});
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 1024px) {
    height: 20vh;
    width: 50vw;
  }
  @media (max-width: 360px) {
    margin-left: 25vw;
  }
`;

export const Img2 = styled.img`
  width: 10vw;
  height: 5vh;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 3vh;
  justify-content: space-between;
  margin: auto;
`;

export const Img = styled.div`
  padding: 5vh;
  align-items: center;
  justify-content: center;
  min-width: 80vw;
  margin: auto;
`;

export const Line = styled.div`
  height: 2px;
  width: 45vh;
  background-color: white;
  margin: auto;
  @media (max-width: 1024px) {
    width: 55vh;
  }
  @media (max-width: 768px) {
    width: 55vh;
  }
  @media (max-width: 414px) {
    width: 45vh;
  }
  @media (max-width: 375px) {
    width: 40vh;
  }
`;

export const ContainerTxt = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4vh 7vw;
  min-height: 40vh;
  width: 90vw;
  justify-content: space-between;
  margin-left: 5vw;
`;

export const Text = styled.a`
  color: white;
  font-weight: 600px;
  font-size: 3vh;
  :hover {
    color: grey;
  }
`;

export const Text2 = styled.text`
  color: white;
  font-style: ${props => props.fontStyle || "none"};
  font-size: 2.5vh;
  text-align: center;
`;
export const ContainerTxt2 = styled.div`
  align-items: center;
  margin-top: -25vh;
  width: 90vw;
  text-align: center;
  margin-left: 5vw;
`;
