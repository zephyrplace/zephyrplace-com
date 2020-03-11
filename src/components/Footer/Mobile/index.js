import React from "react";
import {
  Container,
  Img,
  Img2,
  Line,
  ContainerTxt,
  ContainerTxt2,
  Text,
  Text2,
  Logo,
  Icons
} from "./styles";
import Linkedin from "../../../assets/svg/LinkedIn.svg";
import Facebook from "../../../assets/svg/facebook.svg";
import Git from "../../../assets/svg/github.svg";
import Insta from "../../../assets/svg/instagram.svg";
import Zap from "../../../assets/svg/whatsapp.svg";
import { useHistory } from "react-router-dom";

export default function Mobile() {
  const history = useHistory();

  return (
    <Container>
      <Img>
        <Logo />
        <Icons>
          <Img2 src={Zap} alt="Logo LinkedIn" />
          <Img2 src={Insta} alt="Logo LinkedIn" />
          <Img2 src={Facebook} alt="Logo LinkedIn" />
          <Img2 src={Git} alt="Logo LinkedIn" />
          <Img2 src={Linkedin} alt="Logo LinkedIn" />
        </Icons>
      </Img>
      <Line />
      <ContainerTxt>
        <Text onClick={() => history.push("/")}>Home</Text>
        <Text onClick={() => history.push("/Projects")}>Projetos</Text>
        <Text onClick={() => history.push("/About")}>Sobre Nós</Text>
      </ContainerTxt>

      <ContainerTxt2>
        <Text2 fontStyle="bold">Fale com a gente</Text2>
        <br />
        <Text2>contact@zephyrplace.com</Text2>
        <br />
        <br />
        <Text2 fontStyle="bold">Atendimento</Text2>
        <Text2>
          Segunda a sexta - 8h às 17h
          <br />
          Sábado - 8h às 12h
        </Text2>
        <br />
        <br />
        <Text2>
          Av. José Paulino, 2625 - Bloco A, Sala 39 <br />
          Bairro Morumbi Nova, Paulínia - SP, 13140-723
        </Text2>
      </ContainerTxt2>
    </Container>
  );
}
