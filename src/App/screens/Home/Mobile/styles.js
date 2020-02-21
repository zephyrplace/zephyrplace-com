import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8f9fa;
`;

export const Section = styled.div`
  min-width: 10vw;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  margin-top: 50vh;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -10vh;
  align-items: center;
  min-height: 3vh;
  width: 95vw;
  @media (max-width: 768px) {
    margin-bottom: -5vh;
  }
`;

export const IMG = styled.img`
  height: 45vh;
  width: 40vw;
  margin-bottom: -5vh;
`;

export const Image = styled.img`
  width: 25vw;
  height: 25vh;
`;

export const P = styled.p`
  font-size: 4vh;
  font-weight: 600;
  @media (max-width: 414px) {
    font-size: 4vh;
  }
`;

export const TextTitle = styled.text`
  font-size: 3vh;
  color: white;
  text-align: center;
  margin-bottom: 8vh;
  margin-top: 10vh;
`;

export const ContainerDown = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 320vh;
  width: 100vw;
  background: #f8f9fa;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`;

export const P2 = styled.p`
  font-size: 3vh;
  line-height: 5vh;
  text-align: center;
  width: 55vh;
  padding: 15vh 6vw;
`;

export const Tools = styled.div`
  width: 90vw;
  height: 40vh;
  align-items: center;
  justify-content: center;
  background-image: ${props => `url(${props.background})` || "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20vh;
`;
