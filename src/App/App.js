import React from "react";
import { Header } from "../styled/Header";
import { Menu } from "../components/Menu";
import { Create } from "../components/Create";
import { Renew } from "../components/Renew";
import CardCAP from "../components/Card-CAP";
import CardTVM from "../components/Card-TVM";
import CardApoyo from "../components/Card-APOYO";
import CardBPP from "../components/Card-BPP";
import { Button } from "../components/button";
import { Here } from "../components/Here";
import { Container, Linha, Section, Image } from "./styles";

import photo from "../assets/svg/Mulher-lampada.svg";
import section1 from "../assets/svg/Section1.svg";
import section2 from "../assets/svg/Section2.svg";
import section3 from "../assets/svg/Section3.svg";
import section4 from "../assets/svg/Section4.svg";
import section5 from "../assets/svg/Section5.svg";
import section6 from "../assets/svg/Section6.svg";
import { Waves } from "../components/Waves";

function App() {
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
        <div
          style={{
            width: "100vw",
            minHeight: "10vh",
            alignItems: "center"
          }}
        >
          <p style={{ fontSize: 40, fontWeight: 600 }} className=" mx-10 p-3">
            O que fazemos?
          </p>
          <p style={{ fontSize: 25 }} className=" mx-10 p-5">
            Aqui na Zephyr Place fazemos a sua ideia se tornar real! Nossa
            experiência é voltada para criação de aplicativos mobile, sempre
            visando o melhor custo benefício, agilidade e perfeição em cada
            desenvolvimento.
          </p>
        </div>
        <CardBPP />
        <CardCAP />
        <CardTVM />
        <CardApoyo />
      </Container>
      <Here />
      <Renew />
      <Linha />
      <Create />
      <Section className="flex flex-col p-2">
        <p style={{ fontSize: 35, fontWeight: 600 }}>NOSSAS ETAPAS BÁSICAS</p>
        <div style={{ marginTop: "20vh" }} className="flex flex-row">
          <Image src={section1} alt="Mobile" />
          <div className="flex flex-col">
            <p style={{ fontSize: 30, fontWeight: 600 }} className=" mx-10 p-3">
              1. Descubra
            </p>
            <p style={{ fontSize: 20 }} className=" mx-10 p-5">
              O primeiro passo é descobir o problema que precisa ser resolvido
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p style={{ fontSize: 30, fontWeight: 600 }} className=" mx-10 p-3">
              2. Desenvolva um MVP
            </p>
            <p style={{ fontSize: 20 }} className=" mx-10 p-5">
              Um MVP é um produto com um conjunto míninmo de recursos que
              resolve um problema definido
            </p>
          </div>
          <Image src={section2} alt="Mobile" />
        </div>
        <div className="flex flex-row">
          <Image src={section3} alt="Mobile" />
          <div className="flex flex-col">
            <p style={{ fontSize: 30, fontWeight: 600 }} className=" mx-10 p-3">
              3. Estabeleça o MVP
            </p>
            <p style={{ fontSize: 20 }} className=" mx-10 p-5">
              Quando o produto estiver pronto para ser amplamente distribuido,
              ele já terá clientes estabelicidos
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p style={{ fontSize: 30, fontWeight: 600 }} className=" mx-10 p-3">
              4. Avalie seus resultados
            </p>
            <p style={{ fontSize: 20 }} className=" mx-10 p-5">
              Medir as reações e comportamentos dos clientes em relação aos
              produtos contruídos e, em seguida, decidir se deve perseverar ou
              dinamizar a ideia
            </p>
          </div>
          <Image src={section4} alt="Mobile" />
        </div>
        <div className="flex flex-row">
          <Image src={section5} alt="Mobile" />
          <div className="flex flex-col">
            <p style={{ fontSize: 30, fontWeight: 600 }} className=" mx-10 p-3">
              5. Aprenda
            </p>
            <p style={{ fontSize: 20 }} className=" mx-10 p-5">
              O objetivo de um MVP é a menira mais barata de testar sua solução
              e ajudar a inicar o processo de aprendizado o mais rápido possível
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p style={{ fontSize: 30, fontWeight: 600 }} className=" mx-10 p-3">
              6. Evolua sua solução
            </p>
            <p style={{ fontSize: 20 }} className=" mx-10 p-5">
              Expanda para o mercado e atraia mais usuários, saiba que você pode
              realmente investir em uma ideia testada e validade
            </p>
          </div>
          <Image src={section6} alt="Mobile" />
        </div>
      </Section>
    </div>
  );
}

export default App;
