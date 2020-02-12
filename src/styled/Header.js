import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* padding: 2.5rem; */
  width: 100%;
  min-height: 60vh;
  background-color: ${props => props.backgroundColor || "black"};
`;

export { Header };
