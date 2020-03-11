import React from "react";
import { A } from "./styles";

import logo from "../../../assets/svg/Caminho 12.svg";
import zephyrplace from "../../../assets/svg/Grupo 572.svg";
import { useHistory } from "react-router-dom";

export default function Desktop() {
  const history = useHistory();

  return (
    <div className="flex justify-between p-4">
      <div className="flex justify-around">
        <img src={logo} className="flex-1" alt="logo" />
        <img src={zephyrplace} className="flex-1 ml-10" alt="logo" />
      </div>

      <div className="flex flex-auto justify-around items-center">
        <A
          onClick={() => history.push("/Projects")}
          className="text-black text-lg font-bold"
        >
          HOME
        </A>
        <A
          onClick={() => history.push("/Projects")}
          className="text-black text-lg font-bold"
        >
          PROJETOS
        </A>
        <A
          onClick={() => history.push("/About")}
          className="text-black text-lg font-bold"
        >
          SOBRE NÓS
        </A>
      </div>
    </div>
  );
}
