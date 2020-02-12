import React from "react";
import { Header } from "../../../styled/Header";
import { Menu } from "../../../components/Menu";
import { Button } from "../../../components/button";
import { Here } from "../../../components/Here";
import { Container, Section, Image, Tools } from "./styles";
import Footer from "../../../components/Footer";
import { Waves } from "../../../components/Waves";

import photo from "../../../assets/svg/Mulher-lampada.svg";
import section1 from "../../../assets/svg/Section1.svg";
import section2 from "../../../assets/svg/Section2.svg";
import section3 from "../../../assets/svg/Section3.svg";
import section4 from "../../../assets/svg/Section4.svg";
import section5 from "../../../assets/svg/Section5.svg";
import section6 from "../../../assets/svg/Section6.svg";

function Home() {
  return (
    <div>
      <Header>
        <Menu />
        <div className="flex flex-wrap flex-1 items-center">
          <div className="flex w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-3 mx-10">
            <img
              src={photo}
              className="flex-1 rounded-full object-cover"
              alt="img"
            />
          </div>
          <div className="flex w-full md:w-2/4 lg:w-2/4 xl:w-2/4 flex-col p-2">
            <div className="flex-1 title text-white ">
              <b>Renove</b> seus aplicativos com as <b>melhores </b>
              tecnologias do mercado e mantenha o seu negócio no <b>topo!</b>
            </div>
            <br />
            <Button> SAIBA MAIS</Button>
          </div>
        </div>
        <Waves />
      </Header>
      <Container className="flex flex-col items-center mx-auto justify-around">
        <Here />
        <Section className="flex flex-col p-2">
          <p style={{ fontSize: 35, fontWeight: 600 }}>NOSSAS ETAPAS BÁSICAS</p>
          <div
            style={{
              marginTop: "20vh",
              backgroundColor: "white",
              width: "100vw",
              height: "35vh",
              alignItems: "center"
            }}
            className="flex flex-row"
          >
            <div style={{ marginLeft: "100px" }}>
              <Image src={section1} alt="Mobile" />
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontSize: 30, fontWeight: 600 }}
                className=" mx-8 p-3"
              >
                1. Descubra
              </p>
              <p style={{ fontSize: 20 }} className=" mx-8 p-3">
                O primeiro passo é descobir o problema que precisa ser resolvido
              </p>
            </div>
          </div>
          <div
            className="flex flex-row"
            style={{
              height: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div className="flex flex-col" style={{ marginLeft: "11vw" }}>
              <p
                style={{ fontSize: 30, fontWeight: 600 }}
                className=" mx-8 p-3"
              >
                2. Desenvolva um MVP
              </p>
              <p style={{ fontSize: 20 }} className=" mx-8 p-5">
                Um MVP é um produto com um conjunto míninmo de recursos que
                resolve um problema definido
              </p>
            </div>
            <div style={{ marginRight: "10vw" }}>
              <Image src={section2} alt="Mobile" />
            </div>
          </div>
          <div
            className="flex flex-row"
            style={{
              backgroundColor: "white",
              height: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div style={{ marginLeft: "10vw" }}>
              <Image src={section3} alt="Mobile" />
            </div>
            <div className="flex flex-col" style={{ marginRight: "10vw" }}>
              <p
                style={{ fontSize: 30, fontWeight: 600 }}
                className=" mx-10 p-3"
              >
                3. Estabeleça o MVP
              </p>
              <p style={{ fontSize: 20 }} className=" mx-10 p-5">
                Quando o produto estiver pronto para ser amplamente distribuido,
                ele já terá clientes estabelicidos
              </p>
            </div>
          </div>
          <div
            className="flex flex-row"
            style={{
              height: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div className="flex flex-col" style={{ marginLeft: "10vw" }}>
              <p
                style={{ fontSize: 30, fontWeight: 600 }}
                className=" mx-10 p-3"
              >
                4. Avalie seus resultados
              </p>
              <p style={{ fontSize: 20 }} className=" mx-10 p-3">
                Medir as reações e comportamentos dos clientes em relação aos
                produtos contruídos e, em seguida, decidir se deve perseverar ou
                dinamizar a ideia
              </p>
            </div>
            <div style={{ marginRight: "12vw" }}>
              <Image src={section4} alt="Mobile" />
            </div>
          </div>
          <div
            className="flex flex-row "
            style={{
              backgroundColor: "white",
              alignItems: "center",
              height: "35vh",
              width: "100vw"
            }}
          >
            <div style={{ marginLeft: "13vw" }}>
              <Image src={section5} alt="Mobile" />
            </div>
            <div className="flex flex-col" style={{ marginRight: "10vw" }}>
              <p
                style={{ fontSize: 30, fontWeight: 600 }}
                className=" mx-10 p-3"
              >
                5. Aprenda
              </p>
              <p style={{ fontSize: 20 }} className=" mx-10 p-5">
                O objetivo de um MVP é a menira mais barata de testar sua
                solução e ajudar a inicar o processo de aprendizado o mais
                rápido possível
              </p>
            </div>
          </div>
          <div
            className="flex flex-row"
            style={{
              height: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div className="flex flex-col" style={{ marginLeft: "13vw" }}>
              <p
                style={{ fontSize: 30, fontWeight: 600 }}
                className=" mx-10 p-3"
              >
                6. Evolua sua solução
              </p>
              <p style={{ fontSize: 20 }} className=" mx-10">
                Expanda para o mercado e atraia mais usuários, saiba que você
                pode realmente investir em uma ideia testada e validade
              </p>
            </div>
            <div style={{ marginRight: "13vw" }}>
              <Image src={section6} alt="Mobile" />
            </div>
          </div>
        </Section>
        <Tools>
          <p style={{ fontSize: 35, fontWeight: 600 }}>
            FERRAMENTAS QUE USAMOS
          </p>
        </Tools>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
