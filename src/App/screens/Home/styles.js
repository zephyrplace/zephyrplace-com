import styled from "styled-components";
import separador from "../../../assets/svg/Linha.svg";
import Grupo from "../../../assets/image/Grupo/Grupo.jpg";

export const Container = styled.div`
  min-height: 390vh;
  background: #f8f9fa;
`;

export const Tools = styled.div``;

export const Linha = styled.div`
  background-image: url(${separador});
  background-repeat: no-repeat;
  height: 8vh;
`;

export const Section = styled.div`
  width: 90vw;
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
  width: 100%;
  background: #f8f9fa;
  background-image: url(${Grupo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
