import React from "react";
import {
  Container,
  ContainerProj,
  Image,
  Image2,
  ButtonScrool
} from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu } from "../../../components/Menu2";
import Footer from "../../../components/Footer";

import Apoyo from "../../../assets/image/APOYO/Apoyo.jpg";
import BPP from "../../../assets/image/BPP/BPP.png";
import CAP from "../../../assets/image/CAP/CAP.jpg";
import TVM from "../../../assets/image/TVM/TVM.jpg";
import arrow from "../../../assets/svg/arrowdown.svg";
import JWF from "../../../assets/image/JWF/JWF.jpg";

function Projetos() {
  return (
    <div>
      <Menu />
      <Container>
        <Image2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80vh",
              marginRight: "75vh"
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
              flexDirection: "row"
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
        <div id="middle"></div>
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
              desenvolvimento. Podemos ajudar você a alcançar suas metas!
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
              desenvolvimento. Podemos ajudar você a alcançar suas metas!
            </p>
          </div>
          <Image src={CAP} alt="Projeto" />
        </ContainerProj>
        <ContainerProj>
          <Image src={TVM} alt="Projeto" />
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
              desenvolvimento. Podemos ajudar você a alcançar suas metas!
            </p>
          </div>
        </ContainerProj>
        <ContainerProj>
          <div className="flex flex-col" style={{ marginRight: "10vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Web - <b>Apoyo</b>
            </p>
            <br />
            <p className="text-2xl text-center">
              Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
              experiência é voltada para criação de aplicativos mobile, sempre
              visando o melhor custo benefício, agilidade e perfeição em cada
              desenvolvimento. Podemos ajudar você a alcançar suas metas!
            </p>
          </div>
          <Image height="25vh" width="25vw" src={Apoyo} alt="Projeto" />
        </ContainerProj>
        <ContainerProj>
          <Image height="25vh" width="25vw" src={JWF} alt="Projeto" />
          <div className="flex flex-col" style={{ marginLeft: "10vw" }}>
            <p className="text-2xl text-center">
              Aplicativo Web - <b>JWF</b>
            </p>
            <br />
            <p className="text-2xl text-center">
              Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
              experiência é voltada para criação de aplicativos mobile, sempre
              visando o melhor custo benefício, agilidade e perfeição em cada
              desenvolvimento. Podemos ajudar você a alcançar suas metas!
            </p>
          </div>
        </ContainerProj>
      </Container>
      <Footer />
    </div>
  );
}

export default Projetos;
