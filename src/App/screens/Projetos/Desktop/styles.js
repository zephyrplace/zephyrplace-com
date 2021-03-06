import styled from "styled-components";
import Back from "../../../../assets/svg/CaraCaminho.svg";

export const Container = styled.div`
  min-height: 420vh;
  background: #f8f9fa;
  align-items: center;
  margin-top: 10vh;
`;

export const ContainerBig = styled.div`
  min-height: 420vh;
  background: #f8f9fa;
`;

export const ContainerProj = styled.div`
  display: flex;
  padding: 4vh 4vw;
  flex-direction: row;
  height: 70vh;
  background: #f8f9fa;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;
  background-image: ${props => `url(${props.background})` || "none"};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${props => props.position || "left"};
`;

export const Image = styled.img`
  height: ${props => props.height || "50vh"};
  width: ${props => props.width || "20vw"};
  object-fit: contain;
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
  margin-top: 12vh;
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
