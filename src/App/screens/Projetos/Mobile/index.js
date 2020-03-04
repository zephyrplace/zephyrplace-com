import React from "react";
import Menu from "../../../../components/Menu2";
import Footer from "../../../../components/Footer";
import {
  ContainerProj,
  ContainerBig,
  Container,
  Image2,
  ImgH,
  ImgV,
  ImgV2,
  ButtonScrool,
  Button,
  Text,
  P,
  P2
} from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";

import photo from "../../../../assets/image/proj/img_projetos.png";
import Apoyo from "../../../../assets/image/APOYO/Apoyo.jpg";
import BPP from "../../../../assets/gif/MockupBPP.gif";
import CAP from "../../../../assets/gif/MockupCAP.gif";
import TVM from "../../../../assets/gif/MockupTVM.gif";
import JWF from "../../../../assets/image/JWF/JWF.jpg";

function MobileProjects() {
  return (
    <ContainerBig>
      <Menu />
      <Container>
        <Image2>
          <Text>
            <P className="text-center">
              Nossos <b>projetos</b> são desenvolvidos por uma equipe de ponta
              <b> preparada</b> para atender <b> todas</b> as suas ideias!
            </P>
          </Text>
          <div style={{ marginLeft: "5vw" }}>
            <ImgV2 src={photo} />
          </div>
        </Image2>
        <ContainerProj>
          <ImgV src={BPP} alt="Projeto" />

          <P style={{ marginTop: "2vh" }} className="text-2xl text-center">
            Aplicativo Mobile - <b>BPP</b>
          </P>
          <br />
          <br />
          <P2>
            Este app foi desenvolvido em parceria com a BPP, considerada uma
            Financial Innovation Company (FIC) que ajuda negócios inteligentes a
            crescerem através de parcerias com instituições bancárias. É uma das
            primeiras instituições de pagamentos a ser regulada e autorizada
            pelo Banco Central. O app foi desenvolvido com as tecnologias React
            (para a plataforma Web) e React Native (para as plataformas mobile).
          </P2>
        </ContainerProj>
        <ContainerProj>
          <ImgV src={CAP} alt="Projeto" />
          <P style={{ marginTop: "2vh" }} className="text-2xl text-center">
            Aplicativo Mobile - <b>CAP</b>
          </P>
          <br />
          <br />
          <P2>
            O aplicativo CAP foi desenvolvido em parceria com o Club Athletico
            Paranaense com o intuito de tornar mais fáceis as transações de
            compra e venda dentro do estádio. O Athletico é um clube brasileiro
            de futebol fundado em 1924 a partir da fusão do Internacional
            Futebol Clube e do América Futebol Clube. O app foi desenvolvido com
            a tecnologia React Native, muito utilizada para aplicações mobile.
          </P2>
        </ContainerProj>
        <ContainerProj>
          <ImgV src={TVM} alt="Projeto" />
          <P style={{ marginTop: "2vh" }} className="text-2xl text-center">
            Aplicativo Mobile - <b>TVM</b>
          </P>
          <br />
          <br />
          <P2>
            Em parceria com a TVM, uma empresa de publicidade voltada para a
            área de lotéricas e jogos, a Zephyr Place desenvolveu esse app com o
            objetivo de tornar mais rápidos e fáceis os acessos dos clientes aos
            resultados dos jogos. O app foi desenvolvido com as tecnologias
            React Native para a parte visual, e Node.js para a parte de
            funcionalidades do aplicativo.
          </P2>
        </ContainerProj>
        <ContainerProj>
          <ImgH src={Apoyo} alt="Projeto" />
          <P style={{ marginTop: "2vh" }} className="text-2xl text-center">
            Aplicativo Web - <b>Apoyo</b>
          </P>
          <br />
          <br />
          <P2>
            Essa aplicação web foi desenvolvida em conjunto com a Apoyo Serviços
            Financeiros. Ela é uma plataforma de empréstimos que facilita o
            acesso do cliente com os serviços da Apoyo. Essa aplicação foi feita
            utilizando as ferramentas do React, e do JavaScript, com tecnologia
            de programação responsivas, para que o site possa ser acessado de um
            computador, ou de um celular
          </P2>
        </ContainerProj>
        <ContainerProj>
          <ImgH src={JWF} alt="Projeto" />
          <P style={{ marginTop: "2vh" }} className="text-2xl text-center">
            Aplicativo Web - <b>JWF</b>
          </P>
          <br />
          <br />
          <P2>
            A JWF, uma empresa que lida com a compra e venda de motores e peças
            relacionadas, em conjunto com a Zephyr Place lançou um site que
            facilita a entrega de informações sobre as mercadorias disponíveis
            para venda melhorando a relação entre vendedor e cliente. A
            aplicação foi desenvolvida com React e atualmente está disponível
            para as plataformas Web.
          </P2>
        </ContainerProj>
      </Container>
      <Footer />
    </ContainerBig>
  );
}
export default MobileProjects;
