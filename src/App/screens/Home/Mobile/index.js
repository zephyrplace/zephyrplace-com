import React from "react";
import Menu from "../../../../components/Menu";
import Footer from "../../../../components/Footer";
import { Header } from "../../../../styled/Header";
import { Waves } from "../../../../components/Waves";
import { Link } from "react-scroll";
import { Button } from "../../../../components/button";
import { Here } from "../../../../components/Heremobile/Heremobile";
import {
  Container,
  HeadContainer,
  IMG,
  TextTitle,
  Section,
  Image,
  Tools,
  P
} from "./styles";

import photo from "../../../../assets/svg/Mulher-lampada.svg";
import section1 from "../../../../assets/svg/Section1.svg";
import section2 from "../../../../assets/svg/Section2.svg";
import section3 from "../../../../assets/svg/Section3.svg";
import section4 from "../../../../assets/svg/Section4.svg";
import section5 from "../../../../assets/svg/Section5.svg";
import section6 from "../../../../assets/svg/Section6.svg";

function MobileHome() {
  return (
    <div>
      <Header>
        <Menu />
        <HeadContainer>
          <TextTitle>
            <strong>Renove</strong> seus aplicativos com as
            <strong> melhores </strong>
            tecnologias do mercado e mantenha o seu negócio no
            <strong> topo!</strong>
          </TextTitle>
          <Link to="middle" smooth duration={500}>
            <Button> SAIBA MAIS</Button>
          </Link>
          <IMG src={photo} styleclassName="object-cover" alt="img" />
        </HeadContainer>
        <Waves />
      </Header>
      <Container>
        <Here />
        <div style={{ height: "0", marginBottom: "-2vh" }} id="middle"></div>
        <Section className="flex flex-col p-2">
          <P>NOSSAS ETAPAS BÁSICAS</P>
          <div
            style={{
              marginTop: "10vh",
              backgroundColor: "white",
              width: "100vw",
              minHeight: "35vh",
              alignItems: "center"
            }}
            className="flex flex-col"
          >
            <div>
              <Image src={section1} alt="Mobile" />
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontSize: "5vh", fontWeight: 600 }}
                className=" mx-8 p-3 text-center"
              >
                1. Descubra
              </p>
              <p style={{ fontSize: "3vh" }} className=" mx-8 p-3 text-center">
                O primeiro passo é descobir o problema que precisa ser resolvido
              </p>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              minHeight: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div>
              <Image src={section2} alt="Mobile" />
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontSize: "5vh", fontWeight: 600 }}
                className=" mx-8 p-3 text-center"
              >
                2. Desenvolva um MVP
              </p>
              <p style={{ fontSize: "3vh" }} className=" mx-8 p-5 text-center">
                Um MVP é um produto com um conjunto míninmo de recursos que
                resolve um problema definido
              </p>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "white",
              minHeight: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div>
              <Image src={section3} alt="Mobile" />
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontSize: "5vh", fontWeight: 600 }}
                className=" mx-10 p-3 text-center"
              >
                3. Estabeleça o MVP
              </p>
              <p style={{ fontSize: "3vh" }} className=" mx-10 p-5 text-center">
                Quando o produto estiver pronto para ser amplamente distribuido,
                ele já terá clientes estabelicidos
              </p>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              mineHight: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div>
              <Image src={section4} alt="Mobile" />
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontSize: "5vh", fontWeight: 600 }}
                className=" mx-10 p-3 text-center"
              >
                4. Avalie seus resultados
              </p>
              <p
                style={{ fontSize: "3vh" }}
                className=" mx-10 p-3 text-center "
              >
                Medir as reações e comportamentos dos clientes em relação aos
                produtos contruídos e, em seguida, decidir se deve perseverar ou
                dinamizar a ideia
              </p>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "white",
              alignItems: "center",
              minHeight: "35vh",
              width: "100vw"
            }}
          >
            <div>
              <Image src={section5} alt="Mobile" />
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontSize: "5vh", fontWeight: 600 }}
                className=" mx-10 p-3 text-center"
              >
                5. Aprenda
              </p>
              <p style={{ fontSize: "3vh" }} className=" mx-10 p-5 text-center">
                O objetivo de um MVP é a menira mais barata de testar sua
                solução e ajudar a inicar o processo de aprendizado o mais
                rápido possível
              </p>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              minHeight: "35vh",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <div>
              <Image src={section6} alt="Mobile" />
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontSize: "5vh", fontWeight: 600 }}
                className=" mx-10 p-3 text-center"
              >
                6. Evolua sua solução
              </p>
              <p style={{ fontSize: "3vh" }} className=" mx-10 text-center">
                Expanda para o mercado e atraia mais usuários, saiba que você
                pode realmente investir em uma ideia testada e validade
              </p>
            </div>
          </div>
        </Section>
        <Tools>
          <P>FERRAMENTAS QUE USAMOS</P>
        </Tools>
      </Container>
      <Footer />
    </div>
  );
}

export default MobileHome;
