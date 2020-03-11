import React from "react";
import { Container, Img, Line, ContainerTxt, A, Text2 } from "./style";
import { useHistory } from "react-router-dom";
import Fogete from "../../../assets/svg/LOGOBRANCOSVG.svg";
import Linkedin from "../../../assets/svg/LinkedIn.svg";
import Facebook from "../../../assets/svg/facebook.svg";
import Git from "../../../assets/svg/github.svg";
import Insta from "../../../assets/svg/instagram.svg";
import Zap from "../../../assets/svg/whatsapp.svg";

export default function Desktop() {
  const history = useHistory();
  return (
    <Container>
      <text>teste</text>
      <Img>
        <div style={{ display: "flex", flexDirection: "row", width: "10vw" }}>
          <img src={Fogete} alt="Foguetinho" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "14vw",
            height: "4vh",
            justifyContent: "space-between"
          }}
        >
          <img src={Zap} alt="Logo LinkedIn" />
          <img src={Insta} alt="Logo LinkedIn" />
          <img src={Facebook} alt="Logo LinkedIn" />
          <img src={Git} alt="Logo LinkedIn" />
          <img src={Linkedin} alt="Logo LinkedIn" />
        </div>
      </Img>
      <Line />
      <ContainerTxt>
        <A onClick={() => history.push("/")} href="#top">
          Home
        </A>
        <A onClick={() => history.push("/Projects")} href="#top">
          Projetos
        </A>
        <A onClick={() => history.push("/About")} href="#top">
          Sobre Nós
        </A>
      </ContainerTxt>
      <ContainerTxt>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Text2 fontStyle="bold">Fale com a gente</Text2>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Text2>contact@zephyrplace.com</Text2>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Text2 fontStyle="bold">Atendimento</Text2>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Text2>
              Segunda a sexta - 8h às 17h
              <br />
              Sábado - 8h às 12h
            </Text2>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Text2>
              Av. José Paulino, 2625 - Bloco A, Sala 39 <br />
              Bairro Morumbi Nova, Paulínia - SP, 13140-723
            </Text2>
          </div>
        </div>
      </ContainerTxt>
    </Container>
  );
}
