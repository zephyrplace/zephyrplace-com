import styled from "styled-components";
import StickyHeader from "react-sticky-header";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* padding: 2.5rem; */
  max-width: 100vw;
  min-height: 10vh;
  background-color: ${props => props.backgroundColor || "black"};
`;

export { Header };
