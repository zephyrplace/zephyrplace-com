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
`;

export const Tools = styled.div`
  align-items: center;
  justify-content: center;
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
  font-size: 5vh;
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
