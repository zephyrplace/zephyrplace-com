import React from "react";
import { Header } from "./styled/Header";
import { Menu } from "./components/Menu";
import { Create } from "./components/Create";
import { Renew } from "./components/Renew";
import CardCAP from "./components/Card-CAP";
import CardTVM from "./components/Card-TVM";
import CardApoyo from "./components/Card-APOYO";
import CardBPP from "./components/Card-BPP";
import { Button } from "./components/button";
import { Here } from "./components/Here";

function App() {
  return (
    <div>
      <Header>
        <Menu />
        <div
          style={{
            width: 650,
            marginLeft: 600,
            marginTop: 50,
            padding: 5
          }}
          className="flex flex-col items-center"
        >
          <div className="flex-1 title text-white">
            <b>Renove</b> seus aplicativos com as <b>melhores </b>
            tecnologias do mercado e mantenha o seu negócio no <b>topo!</b>
          </div>
          <br />
          <Button> SAIBA MAIS</Button>
        </div>
        <div className="wave" />
      </Header>
      <br />
      <br />
      <div
        style={{ height: "350vh", marginBottom: 70 }}
        className="flex flex-col intems-center mx-auto justify-around"
      >
        <CardCAP />
        <CardTVM />
        <CardBPP />
        <CardApoyo />
      </div>
      <Here />
      <Renew />
      <Create />
    </div>
  );
}

export default App;
