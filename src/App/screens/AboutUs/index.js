import React from "react";
import { Menu } from "../../../components/Menu2";
import {
  Container,
  Container2,
  ContainerBig,
  ContainerImg,
  Image
} from "./styles";
import Footer from "../../../components/Footer";
import Equipe1 from "../../../assets/image/Equipe1/Equipe1.jpg";
import Equipe2 from "../../../assets/image/Equipe2/Equipe2.jpg";
import Equipe3 from "../../../assets/image/Equipe3/Equipe3.jpg";
import Equipe4 from "../../../assets/image/Equipe4/Equipe4.jpg";
import Equipe5 from "../../../assets/image/Equipe5/Equipe5.jpg";
import Equipe6 from "../../../assets/image/Equipe6/Equipe6.jpg";

/* Alterar as fotos da equipe */

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
            style={{ width: "50vw", marginTop: "60vh" }}
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
        <ContainerImg>
          <div
            style={{
              padding: "5vh 5vw",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "4vh"
            }}
            className="flex flex-row"
          >
            <Image width="25vw" height="45vh" src={Equipe1} />
            <Image width="25vw" height="45vh" src={Equipe2} />
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

export default AboutUs;
