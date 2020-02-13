import styled from "styled-components";
import Back from "../../../assets/svg/CaraCaminho.svg";

export const Container = styled.div`
  height: 420vh;
  background: #f8f9fa;
  align-items: center;
`;

export const ContainerProj = styled.div`
  display: flex;
  padding: 5vh 5vw;
  flex-direction: row;
  height: 70vh;
  background: #f8f9fa;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: ${props => props.height || "50vh"};
  width: ${props => props.width || "20vw"};
`;
export const Image2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  background-image: url(${Back});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

export const ButtonScrool = styled.div`
  border-radius: 100px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);
  width: 3vw;
  height: 6vh;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`;
