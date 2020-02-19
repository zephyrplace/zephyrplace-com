import styled from "styled-components";
import * as Antd from "antd";

// Helpers
import logo from "../../../assets/svg/Caminho 12.svg";

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
  background-color: #f8f9fa;
`;

export const Image = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  align-self: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${logo});
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
