import React from "react";
import { Container, ContainerProj, Image } from "./styles";
import { Menu } from "../../../components/Menu2";
import { Our } from "../../../components/Our";
import Footer from "../../../components/Footer";

import Apoyo from "../../../assets/image/APOYO/Apoyo.jpg";
import BPP from "../../../assets/image/BPP/BPP.jpg";
import CAP from "../../../assets/image/CAP/CAP.jpg";
import TVM from "../../../assets/image/TVM/TVM.jpg";

function Projetos() {
  return (
    <div>
      <Menu />
      <Container>
        <Our />
        <ContainerProj>
          <Image src={BPP} alt="Projeto" />
          <div className="flex flex-col" style={{ marginLeft: "8vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Mobile - <b>BPP</b>
            </p>
            <br />
            <br />
            <p className="text-2xl text-center">
              Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
              experiência é voltada para criação de aplicativos mobile, sempre
              visando o melhor custo benefício, agilidade e perfeição em cada
              desenvolvimento. Podemos ajudar você a alcançar suas metas!{" "}
            </p>
          </div>
        </ContainerProj>
        <ContainerProj>
          <div className="flex flex-col" style={{ marginRight: "8vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Mobile - <b>CAP</b>
            </p>
            <br />
            <br />
            <p className="text-2xl text-center">
              Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
              experiência é voltada para criação de aplicativos mobile, sempre
              visando o melhor custo benefício, agilidade e perfeição em cada
              desenvolvimento. Podemos ajudar você a alcançar suas metas!{" "}
            </p>
          </div>
          <Image src={BPP} alt="Projeto" />
        </ContainerProj>
        <ContainerProj>
          <Image src={BPP} alt="Projeto" />
          <div className="flex flex-col" style={{ marginLeft: "8vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Mobile - <b>TVM</b>
            </p>
            <br />
            <br />
            <p className="text-2xl text-center">
              Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
              experiência é voltada para criação de aplicativos mobile, sempre
              visando o melhor custo benefício, agilidade e perfeição em cada
              desenvolvimento. Podemos ajudar você a alcançar suas metas!{" "}
            </p>
          </div>
        </ContainerProj>
        <ContainerProj>
          <div className="flex flex-col" style={{ marginRight: "8vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Web - <b>Apoyo</b>
            </p>
            <br />
            <p className="text-2xl text-center">
              Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
              experiência é voltada para criação de aplicativos mobile, sempre
              visando o melhor custo benefício, agilidade e perfeição em cada
              desenvolvimento. Podemos ajudar você a alcançar suas metas!{" "}
            </p>
          </div>
          <Image src={BPP} alt="Projeto" />
        </ContainerProj>
      </Container>
      <Footer />
    </div>
  );
}

export default Projetos;
