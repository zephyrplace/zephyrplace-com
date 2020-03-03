import styled from 'styled-components'

import arrow from '../../../../assets/svg/arrowdown.svg'

export const ContainerBig = styled.div`
  min-height: 600vh;
  background: #f8f9fa;
`

export const ContainerProj = styled.div`
  display: flex;
  flex: 1;
  padding: 4vw;
  flex-direction: column;
  /* height: 120vh; */
  background: #f8f9fa;
  margin-top: 10vh;
  align-items: center;
`

export const Container = styled.div`
  min-height: 600vh;
  background: #f8f9fa;
  align-items: center;
`

export const ButtonScrool = styled.div`
  border-radius: 100px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);
  width: 15vw;
  height: 6vh;
  background-color: white;
  align-items: center;
  justify-content: center;
  background-image: url(${arrow});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 414px) {
    width: 13vw;
    height: 6vh;
  }
`

export const Image2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  min-height: 30vh;
  align-items: center;
  margin-top: 10vh;
`
export const ImgV2 = styled.img`
  height: 35vh;
  width: 70vw;
  margin-left: 10vw;
  margin-top: 10vw;
  @media (max-width: 375px) {
    margin-top: 30vw;
  }
`

export const ImgV = styled.img`
  height: 40vh;
  width: 50vw;
`
export const ImgH = styled.img`
  height: 25vh;
  width: 75vw;
`

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 30vh;
  margin-left: 8vw;
`

export const Button = styled.div`
  margin-left: 5vw;
  display: flex;
  flex-direction: row;
`

export const P = styled.p`
  font-size: 4vh;
`
export const P2 = styled.p`
  font-size: 3vh;
  text-align: center;
`
