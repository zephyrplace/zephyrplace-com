import styled from "styled-components";

import quadrado from "../../../../assets/image/quadrado/Quadrado.png";

export const ContainerBig = styled.div`
  min-height: 420vh;
  background: #f8f9fa;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  align-items: center;
`;

export const P = styled.p`
  font-size: 4vh;
`;
export const P2 = styled.p`
  font-size: 4vh;
`;
export const P3 = styled.p`
  font-size: 3vh;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 180vh;
  background-color: #f8f9fa;
  align-items: center;
`;

export const Div1 = styled.div`
  margin-left: 13vh;
  @media (max-width: 414px) {
    margin-left: 6vh;
  }
  @media (max-width: 411px) {
    margin-left: 4vh;
  }
  @media (max-width: 375px) {
    margin-left: 3vh;
  }
  @media (max-width: 360px) {
    margin-left: 3vh;
  }
`;
export const Div2 = styled.div`
  margin-left: 13vh;
  @media (max-width: 414px) {
    margin-left: 6vh;
  }
  @media (max-width: 375px) {
    margin-left: 3vh;
  }
  @media (max-width: 360px) {
    margin-left: 6vh;
  }
`;
export const Div3 = styled.div`
  margin-left: 13vh;
  @media (max-width: 414px) {
    margin-left: 6vh;
  }
  @media (max-width: 375px) {
    margin-left: 3vh;
  }
  @media (max-width: 360px) {
    margin-left: 7vh;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${quadrado});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f8f9fa;
  width: 100%;
  min-height: 120vh;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 414px) {
    height: 90vh;
  }
  @media (max-width: 411px) {
    height: 70vh;
  }
  @media (max-width: 375px) {
    height: 75vh;
  }
`;

export const Image = styled.img`
  height: 20vh;
  width: 40vw;
  @media (max-width: 414px) {
    height: 20vh;
    width: 35vw;
    margin-left: 3vh;
    margin-top: 2vh;
  }
  @media (max-width: 411px) {
    height: 15vh;
    width: 30vw;
    margin-left: 3vh;
  }
  @media (max-width: 375px) {
    height: 15vh;
    width: 40vw;
    margin-left: 1vh;
    margin-top: 1vh;
  }
`;
