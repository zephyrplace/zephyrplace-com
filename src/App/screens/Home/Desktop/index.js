import React from "react";
import { Header } from "../../../../styled/Header";
import Menu from "../../../../components/Menu";
import { Button } from "../../../../components/button";
import { Here } from "../../../../components/Here";
import { Container, Section, Image, Tools, ContainerDown } from "./styles";
import Footer from "../../../../components/Footer";
import { Waves } from "../../../../components/Waves";
import { Link } from "react-scroll";
import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";

import photo from "../../../../assets/svg/Mulher-lampada.svg";
import section1 from "../../../../assets/svg/Section1.svg";
import section2 from "../../../../assets/svg/Section2.svg";
import section3 from "../../../../assets/svg/Section3.svg";
import section4 from "../../../../assets/svg/Section4.svg";
import section5 from "../../../../assets/svg/Section5.svg";
import section6 from "../../../../assets/svg/Section6.svg";
import fogete from "../../../../assets/image/Fogete/Fogete.png";

export default function DesktopHome() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Header>
        <StickyHeader header={<Menu />}> </StickyHeader>
        <div
          style={{ marginBottom: "-15vh", marginTop: "15vh" }}
          className="aboslute flex flex-wrap flex-1 items-center"
        >
          <div className="flex w-full md:w-2/5 lg:w-2/6 mx-10">
            <img src={photo} className="flex-1  object-cover" alt="img" />
          </div>
          <div className="flex w-full md:w-2/4 lg:w-2/4 xl:w-2/4 flex-col p-2">
            <div className="flex-1 title text-white ">
              <strong>Renove</strong> seus aplicativos com as{" "}
              <strong>melhores </strong>
              tecnologias do mercado e mantenha o seu negócio no{" "}
              <strong>topo!</strong>
            </div>
            <br />
            <div style={{ marginLeft: "16vw" }}>
              <Link to="middle" smooth duration={500}>
                <Button> SAIBA MAIS</Button>
              </Link>
            </div>
          </div>
        </div>
        <Waves />
      </Header>
      <Container className="flex flex-col items-center mx-auto justify-around">
        <div style={{ height: "0", marginBottom: "-25vh" }} id="middle" />
        <div style={{ marginBottom: "-10vh" }}>
          <img src={fogete} alt="Frase" />
        </div>
        <Here />
        <Section className="flex flex-col p-2">
          <p style={{ fontSize: 35, fontWeight: 600 }}>NOSSAS ETAPAS BÁSICAS</p>
          <div
            style={{
              marginTop: "10vh",
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
      <ContainerDown className="relative">
        <div
          style={{
            width: "30vw",
            marginTop: "24vh",
            marginLeft: "8vw",
            fontSize: "3.2vh",
            lineHeight: "7vh"
          }}
          className="absolute text-center"
        >
          O <strong> React Native </strong>é uma biblioteca que permite criar
          aplicativos para celular usando apenas JavaScript. Ele usa o mesmo
          design que o React.
        </div>
        <div
          style={{
            width: "30vw",
            marginTop: "65vh",
            marginRight: "8vw",
            fontSize: "3.2vh",
            lineHeight: "7vh"
          }}
          className="absolute right-0 text-center"
        >
          O <b> Node.JS </b> pode ser definido como um ambiente de execução
          JavaScript server-side. Isso significa que com o Node.JS é possível
          criar aplicações JavaScript.
        </div>
        <div
          style={{
            width: "33vw",
            marginTop: "141vh",
            marginLeft: "6vw",
            fontSize: "3.2vh",
            lineHeight: "7vh"
          }}
          className="absolute text-center"
        >
          <p>
            <b>Git </b> é um sistema de controle de versões,{" "}
          </p>
          usado principalmente no desenvlvimento de software, mas pode ser usado
          para registrar o histórico de adições de qualquer arquvio.
        </div>
        <div
          style={{
            width: "25vw",
            marginBottom: "92vh",
            marginRight: "10vw",
            fontSize: "3.2vh",
            lineHeight: "7vh"
          }}
          className="absolute bottom-0 right-0 text-center"
        >
          O <b> Adobe XD </b> é uma ferramenta de desing de experiência do
          usuário baseada em vetor para aplicativos Web, e aplicativos móveis.
        </div>
        <div
          style={{
            width: "30vw",
            marginBottom: "22vh",
            marginLeft: "8vw",
            fontSize: "3.2vh",
            lineHeight: "7vh"
          }}
          className="absolute bottom-0 text-center"
        >
          O <b> Adobe Ilustrator </b> é um programa utilizado por designers
          gráficos com foco em ilustrações. Ele permite uma interação maior
          entre os usuários e desenvolvedores.
        </div>
      </ContainerDown>
      <Footer />
    </div>
  );
}
