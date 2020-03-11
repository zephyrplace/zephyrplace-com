import React from "react";
import {
  Container,
  ContainerProj,
  ContainerBig,
  Image,
  Image2,
  ButtonScrool
} from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";
import Menu from "../../../../components/Menu";
import Footer from "../../../../components/Footer";

import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";

import Apoyo from "../../../../assets/image/APOYO/Apoyo.jpg";
import BPP from "../../../../assets/gif/MockupBPP.gif";
import CAP from "../../../../assets/gif/MockupCAP.gif";
import TVM from "../../../../assets/gif/MockupTVM.gif";
import arrow from "../../../../assets/svg/arrowdown.svg";
import JWF from "../../../../assets/image/JWF/JWF.jpg";
import Fogete from "../../../../assets/svg/fogetinhobg.svg";
import Atomo from "../../../../assets/svg/atomobg.svg";
import Telescopio from "../../../../assets/svg/telescopiobg.svg";

function DesktopProjects() {
  return (
    <ContainerBig>
      <StickyHeader header={<Menu />}></StickyHeader>
      <Container>
        <Image2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80vh",
              marginRight: "75vh",
              marginTop: "2vh"
            }}
          >
            <p style={{ fontSize: 30 }} className="text-center">
              Nossos <b>projetos</b> são desenvolvidos por uma equipe de ponta
              <b> preparada</b> para atender <b> todas</b> as suas ideias!
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20vh"
            }}
          >
            <Link to="middle" smooth duration={500}>
              <ButtonScrool>
                <Image
                  style={{ marginLeft: "0.5vw" }}
                  height="7vh"
                  width="2vw"
                  src={arrow}
                  alt="Seta"
                />
              </ButtonScrool>
            </Link>
          </div>
        </Image2>
        <div id="middle" />
        <ContainerProj>
          <Image src={BPP} alt="Projeto" />
          <div className="flex flex-col" style={{ marginLeft: "8vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Mobile - <b>BPP</b>
            </p>
            <br />
            <br />
            <p className="text-2xl text-center">
              Este app foi desenvolvido em parceria com a BPP, considerada uma
              Financial Innovation Company (FIC) que ajuda negócios inteligentes
              a crescerem através de parcerias com instituições bancárias. É uma
              das primeiras instituições de pagamentos a ser regulada e
              autorizada pelo Banco Central. O app foi desenvolvido com as
              tecnologias React (para a plataforma Web) e React Native (para as
              plataformas mobile).
            </p>
          </div>
        </ContainerProj>
        <ContainerProj background={Fogete}>
          <div className="flex flex-col " style={{ marginRight: "8vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Mobile - <b>CAP</b>
            </p>
            <br />
            <br />
            <p className="text-2xl text-center">
              O aplicativo CAP foi desenvolvido em parceria com o Club Athletico
              Paranaense com o intuito de tornar mais fáceis as transações de
              compra e venda dentro do estádio. O Athletico é um clube
              brasileiro de futebol fundado em 1924 a partir da fusão do
              Internacional Futebol Clube e do América Futebol Clube. O app foi
              desenvolvido com a tecnologia React Native, muito utilizada para
              aplicações mobile.
            </p>
          </div>
          <Image src={CAP} alt="Projeto" />
        </ContainerProj>
        <ContainerProj background={Atomo} position="right">
          <Image src={TVM} alt="Projeto" />
          <div className="flex flex-col" style={{ marginLeft: "8vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Mobile - <b>TVM</b>
            </p>
            <br />
            <br />
            <p className="text-2xl text-center">
              Em parceria com a TVM, uma empresa de publicidade voltada para a
              área de lotéricas e jogos, a Zephyr Place desenvolveu esse app com
              o objetivo de tornar mais rápidos e fáceis os acessos dos clientes
              aos resultados dos jogos. O app foi desenvolvido com as
              tecnologias React Native para a parte visual, e Node.js para a
              parte de funcionalidades do aplicativo.
            </p>
          </div>
        </ContainerProj>
        <div>
          <ContainerProj background={Telescopio}>
            <div className="flex flex-col" style={{ marginRight: "10vw" }}>
              <p className="text-2xl text-center">
                Aplicativo Web - <b>Apoyo</b>
              </p>
              <br />
              <p className="text-2xl text-center">
                Essa aplicação web foi desenvolvida em conjunto com a Apoyo
                Serviços Financeiros. Ela é uma plataforma de empréstimos que
                facilita o acesso do cliente com os serviços da Apoyo. Essa
                aplicação foi feita utilizando as ferramentas do React, e do
                JavaScript, com tecnologia de programação responsivas, para que
                o site possa ser acessado de um computador, ou de um celular
              </p>
            </div>
            <Image height="25vh" width="25vw" src={Apoyo} alt="Projeto" />
          </ContainerProj>
        </div>
        <ContainerProj>
          <Image height="25vh" width="25vw" src={JWF} alt="Projeto" />
          <div className="flex flex-col" style={{ marginLeft: "10vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Web - <b>JWF</b>
            </p>
            <br />
            <p className="text-2xl text-center">
              A JWF, uma empresa que lida com a compra e venda de motores e
              peças relacionadas, em conjunto com a Zephyr Place lançou um site
              que facilita a entrega de informações sobre as mercadorias
              disponíveis para venda melhorando a relação entre vendedor e
              cliente. A aplicação foi desenvolvida com React e atualmente está
              disponível para as plataformas Web.
            </p>
          </div>
        </ContainerProj>
      </Container>
      <Footer />
    </ContainerBig>
  );
}

export default DesktopProjects;
