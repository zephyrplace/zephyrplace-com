import React from "react";
import Hand from "./assets/svg/Grupo 55.svg";
import { Header } from "./styled/Header";
import { Menu } from "./components/Menu";
import { Create } from "./components/Create";
import { Renew } from "./components/Renew";

function App() {
  return (
    <div>
      <Header>
        <Menu />
        <div className="flex flex-row items-center">
          <p className="flex-1 title text-white">
            Soluções digitais para o seu negócio.
          </p>
          <img
            src={Hand}
            className="flex-1 animated infinite tada m-10"
            alt="Hand"
          />
        </div>
      </Header>
      <Renew />
      <Create />
    </div>
  );
}

export default App;
