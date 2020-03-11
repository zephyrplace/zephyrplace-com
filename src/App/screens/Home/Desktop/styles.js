import styled from "styled-components";
import Grupo from "../../../../assets/image/Grupo/Grupo.jpg";

export const Container = styled.div`
  min-height: 390vh;
  background: #f8f9fa;
`;

export const Tools = styled.div``;

export const Section = styled.div`
  min-width: 10vw;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
`;
export const Image = styled.img`
  width: 25vw;
  height: 25vh;
`;

export const ContainerDown = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 320vh;
  width: 100vw;
  background: #f8f9fa;
  background-image: url(${Grupo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20vh;
`;
export const A = styled.a`
  :hover {
    color: grey;
  }
  font-family: "Montserrat";
`;
