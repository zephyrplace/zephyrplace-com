import styled from "styled-components";
import separador from "../assets/svg/Linha.svg";

export const Container = styled.div`
  height: 350vh;
  margin-bottom: 100px;
  background: linear-gradient(#dadada, #f8f9fa);
`;

export const Linha = styled.div`
  background-image: url(${separador});
  background-repeat: no-repeat;
  height: 8vh;
`;

export const Section = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 25vw;
  height: 25vh;
`;
