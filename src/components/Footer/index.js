import React from "react";
import { Container, Img, Line, ContainerTxt, Text, Text2 } from "./styles";
import Fogete from "../../assets/svg/rocket.svg";
import Linkedin from "../../assets/svg/LinkedIn.svg";

export default function Footer() {
  return (
    <Container>
      <Img>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={Fogete} alt="Foguetinho." />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "14vw",
            justifyContent: "space-between"
          }}
        >
          <img src={Linkedin} alt="Logo LinkedIn" />
          <img src={Linkedin} alt="Logo LinkedIn" />
          <img src={Linkedin} alt="Logo LinkedIn" />
          <img src={Linkedin} alt="Logo LinkedIn" />
          <img src={Linkedin} alt="Logo LinkedIn" />
        </div>
      </Img>
      <Line />
      <ContainerTxt>
        <Text>Blog</Text>
        <Text>Projetos</Text>
        <Text>Sobre Nós</Text>
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
