import React from "react";
import Menu from "../../../../components/Menu";
import Footer from "../../../../components/Footer";
import { Header } from "../../../../styled/Header";
import { Waves } from "../../../../components/Waves";
import { Link } from "react-scroll";
import { Button } from "../../../../components/button";
import { Here } from "../../../../components/Here";
import { Container, HeadContainer } from "./styles";

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
          <p>
            <strong>Renove</strong> seus aplicativos com as
            <strong>melhores </strong>
            tecnologias do mercado e mantenha o seu negócio no
            <strong>topo!</strong>
          </p>
          <Link to="middle" smooth duration={500}>
            <Button> SAIBA MAIS</Button>
          </Link>
          <img src={photo} className="flex-1  object-cover" alt="img" />
        </HeadContainer>
        <Waves />
      </Header>
      <Container />
      <Footer />
    </div>
  );
}

export default MobileHome;
