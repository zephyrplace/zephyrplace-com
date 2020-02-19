import React, { useState } from "react";

import NavBar from "./NavBar";
import logo from "../../../assets/svg/Caminho 12.svg";
import zephyrplace from "../../../assets/svg/Grupo 572.svg";

// Private
import { Container, Button } from "./styles";

export default function Mobile() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container>
      <img style={{ height: "3vh" }} src={logo} alt="logo" />
      <img
        style={{ height: "3vh" }}
        src={zephyrplace}
        className="ml-10"
        alt="logo"
      />
      <Button
        onClick={() => setIsVisible(!isVisible)}
        type={isVisible ? "close" : "menu"}
        style={{ color: "black" }}
      />
      <NavBar open={isVisible} onClose={() => setIsVisible(false)} />
    </Container>
  );
}
