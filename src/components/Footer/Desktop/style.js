import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  width: 100vw;
  height: 45vh;
  justify-content: center;
`

export const Img = styled.div`
  min-height: 10vh;
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  padding: 9vh 9vw;
  align-items: center;
  justify-content: space-around;
`

export const Line = styled.div`
  width: 2px;
  height: 35vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 5.8vh;
`

export const ContainerTxt = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vh 7vw;
  height: 40vh;
  margin-top: 30px;
  justify-content: space-around;
`

export const A = styled.a`
  color: white;
  font-weight: 600px;
  :hover {
    color: grey;
  }
`

export const Text2 = styled.text`
  color: white;
  font-style: ${props => props.fontStyle || 'none'};
`
