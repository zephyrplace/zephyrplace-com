import React from "react";
import Menu from "../../../../components/Menu";
import {
  Container,
  Container2,
  ContainerBig,
  ContainerImg,
  Image
} from "./styles";
import Footer from "../../../../components/Footer";
import Equipe1 from "../../../../assets/image/Equipe1/Equipe1.jpg";
import Equipe2 from "../../../../assets/image/Equipe2/Equipe2.jpg";
import Equipe3 from "../../../../assets/image/Equipe3/Equipe3.jpg";
import Equipe4 from "../../../../assets/image/Equipe4/Equipe4.jpg";
import Equipe5 from "../../../../assets/image/Equipe5/Equipe5.jpg";
import Equipe6 from "../../../../assets/image/Equipe6/Equipe6.jpg";
import { Header } from "../../../../styled/Header";
import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";

function DesktopAboutUs() {
  return (
    <div>
      <ContainerBig>
        <Header>
          <StickyHeader header={<Menu />}> </StickyHeader>
        </Header>
        <Container className="relative">
          <div
            className="absolute right-0"
            style={{ marginTop: "25vh", marginRight: "15vw" }}
          >
            <p style={{ fontSize: 35 }} className="p-3">
              <b>Conheça </b> nossa história!
            </p>
          </div>
        </Container>
        <Container2 className="relative">
          <div
            style={{ width: "60vw" }}
            className="absolute flex flex-col items-center "
          >
            <div className="flex flex-row ">
              <p style={{ fontSize: 30 }} className="p-3 ">
                <b>Como a ZP surgiu </b>
              </p>
            </div>
            <div className="flex flex-row">
              <p style={{ fontSize: 20 }} className="p-10 text-justify">
                A Zephyr Place surgiu há alguns anos atrás quando um time de
                <b> pessoas revolucionárias </b>decidiu criar algo que ajudasse
                tanto as grandes empresas quanto os menores empreendedores a
                crescer e expandir os seus horizontes através das melhores
                tecnologias do mercado que serviriam de base para tudo o que
                ainda estava por vir.
              </p>
            </div>
          </div>
          <div
            style={{ width: "50vw", marginBottom: "20vh" }}
            className="absolute bottom-0 flex flex-col items-center "
          >
            <div className="flex flex-row ">
              <p style={{ fontSize: 30 }} className="p-3 ">
                <b>Nossa missão </b>
              </p>
            </div>
            <div className="flex flex-row">
              <p style={{ fontSize: 20 }} className="p-10 text-justify">
                <b>Renovar, Inovar e Impressionar! </b> Trabalhamos para que os
                nossos clientes tenham um grande upgrade nos seus projetos
                atuais com as melhores tecnologias disponíveis no mercado
              </p>
            </div>
          </div>
          <div
            style={{ width: "50vw", marginTop: "60vh" }}
            className="absolute right-0 flex flex-col items-center "
          >
            <div className="flex flex-row ">
              <p style={{ fontSize: 30 }} className="p-3 ">
                <b>Nossa visão </b>
              </p>
            </div>
            <div className="flex flex-row">
              <p style={{ fontSize: 20 }} className="p-10 text-justify">
                Queremos ampliar os nossos negócios e ajudar cada vez mais
                pessoas através da tecnologia, que tem se tornado um dos motores
                da nossa sociedade atual, para que todos tenham a oportunidade
                de <b> crescer e evoluir!</b>
              </p>
            </div>
          </div>
        </Container2>
        <ContainerImg>
          <div
            style={{
              padding: "5vh 5vw",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "1.5vh"
            }}
            className="flex flex-row"
          >
            <Image width="25vw" height="42vh" src={Equipe1} />
            <Image width="25vw" height="42vh" src={Equipe2} />
            <Image width="25vw" height="42vh" src={Equipe3} />
          </div>
          <div
            style={{
              padding: "5vh 5vw",
              width: "100%",
              justifyContent: "space-between"
            }}
            className="flex flex-row"
          >
            <Image width="25vw" height="45vh" src={Equipe4} />
            <Image width="25vw" height="42vh" src={Equipe5} />
            <Image width="25vw" height="45vh" src={Equipe6} />
          </div>
        </ContainerImg>
      </ContainerBig>
      <Footer />
    </div>
  );
}

export default DesktopAboutUs;
