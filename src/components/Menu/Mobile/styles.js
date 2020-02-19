import styled from "styled-components";
import * as Antd from "antd";

// Helpers
import logo from "../../../assets/svg/Caminho 1.svg";

export const Container = styled.div`
  top: 0;
  height: 10vh;
  width: 100vw;
  display: flex;
  z-index: 9999;
  position: sticky;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const Image = styled.img`
  src: url(${logo});
  height: 10vh;
`;

export const Button = styled(Antd.Icon)`
  flex: 1;
  left: 0;
  display: flex;
  margin: 0 3vw;
  font-size: 30px;
  color: white;
  position: absolute;
`;
