import React from "react";
import { Menu } from "../../../components/Menu2";
import { Container, Container2, ContainerBig } from "./styles";
import Footer from "../../../components/Footer";

function AboutUs() {
  return (
    <div>
      <ContainerBig>
        <Menu />
        <Container className="relative">
          <div
            className="absolute right-0"
            style={{ marginTop: "25vh", marginRight: "15vw" }}
          >
            <p style={{ fontSize: 35 }} className=" mx-8 p-3">
              <b>Conheça </b> nossa história!
            </p>
          </div>
        </Container>
        <Container2 className="relative">
          <div
            style={{ width: "50vw" }}
            className="absolute flex flex-col items-center "
          >
            <div className="flex flex-row ">
              <p style={{ fontSize: 30 }} className=" mx-8 p-3 ">
                <b>Como a ZP surgiu </b>
              </p>
            </div>
            <div className="flex flex-row">
              <p style={{ fontSize: 20 }} className=" mx-8 p-3 text-center">
                Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
                experiência é voltada para criação de aplicativos mobile, sempre
                visando o melhor custo benefício, agilidade e perfeição em cada
                desenvolvimento. Podemos ajudar você a alcançar suas metas!
              </p>
            </div>
          </div>
          <div
            style={{ width: "50vw" }}
            className="absolute bottom-0 flex flex-col items-center "
          >
            <div className="flex flex-row ">
              <p style={{ fontSize: 30 }} className=" mx-8 p-3 ">
                <b>Nossa missão </b>
              </p>
            </div>
            <div className="flex flex-row">
              <p style={{ fontSize: 20 }} className=" mx-8 p-3 text-center">
                Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
                experiência é voltada para criação de aplicativos mobile, sempre
                visando o melhor custo benefício, agilidade e perfeição em cada
                desenvolvimento. Podemos ajudar você a alcançar suas metas!
              </p>
            </div>
          </div>
          <div
            style={{ width: "50vw", marginTop: "50vh" }}
            className="absolute right-0 flex flex-col items-center "
          >
            <div className="flex flex-row ">
              <p style={{ fontSize: 30 }} className=" mx-8 p-3 ">
                <b>Nossa visão </b>
              </p>
            </div>
            <div className="flex flex-row">
              <p style={{ fontSize: 20 }} className=" mx-8 p-3 text-center">
                Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
                experiência é voltada para criação de aplicativos mobile, sempre
                visando o melhor custo benefício, agilidade e perfeição em cada
                desenvolvimento. Podemos ajudar você a alcançar suas metas!
              </p>
            </div>
          </div>
        </Container2>
      </ContainerBig>
      <Footer />
    </div>
  );
}

export default AboutUs;
