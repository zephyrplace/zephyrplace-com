import styled from 'styled-components'

export const Button = styled.a`
  display: flex;
  width: 200px;
  cursor: pointer;
  user-select: none;
  height: 50px;
  border-radius: 50px;
  border: ${props => props.border || '5px solid white'};
  color: ${props => props.originalColor || 'white'};
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  :hover {
    background-color: ${props => props.backgroundColor || 'white'};
    color: ${props => props.color || 'black'};
  }
`
