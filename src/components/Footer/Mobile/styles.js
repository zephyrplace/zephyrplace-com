import styled from "styled-components";
import Fogete from "../../../assets/svg/LOGOBRANCOSVG.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100vw;
  height: 120vh;
  justify-content: center;
  align-items: center;
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
  margin-left: 10vw;
  background-image: url(${Fogete});
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 1024px) {
    margin-left: 25vw;
    height: 20vh;
    width: 50vw;
  }
  @media (max-width: 768px) {
    margin-left: 25vw;
  }
  @media (max-width: 414px) {
    margin-left: 15vw;
  }
  @media (max-width: 411px) {
    margin-left: 13vw;
  }
`;

export const Img2 = styled.img`
  width: 10vw;
  height: 5vh;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 3vh;
  justify-content: space-between;
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9vh 9vw;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  height: 2px;
  width: 50vh;
  display: flex;
  background-color: white;
  @media (max-width: 375px) {
    width: 40vh;
  }
`;

export const ContainerTxt = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4vh 7vw;
  height: 40vh;
  width: 100vw;
  justify-content: space-between;
`;

export const Text = styled.a`
  color: white;
  font-weight: 600px;
  font-size: 3vh;
`;

export const Text2 = styled.text`
  color: white;
  font-style: ${props => props.fontStyle || "none"};
  font-size: 2.5vh;
  text-align: center;
`;
export const ContainerTxt2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -25vh;
`;
