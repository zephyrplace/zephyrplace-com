import styled from 'styled-components'

import fogete from '../../../../assets/svg/fogetevoando.svg'
import photo from '../../../../assets/svg/carasentado.svg'
import quadrados from '../../../../assets/svg/quadrados.svg'

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${photo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

export const ContainerBig = styled.div`
  min-height: 420vh;
  background: #f8f9fa;
`

export const Container2 = styled.div`
  width: 100%;
  height: 180vh;
  background-image: url(${fogete});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f8f9fa;
`

export const Image = styled.img`
  height: ${props => props.height || '50vh'};
  width: ${props => props.width || '20vw'};
`

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${quadrados});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f8f9fa;
  width: 100%;
  height: 110vh;
  justify-content: space-around;
  align-items: center;
  margin-top: 17vh;
`
