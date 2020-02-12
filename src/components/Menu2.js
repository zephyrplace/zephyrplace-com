import React from "react";
import logo from "../assets/svg/Caminho 12.svg";
import zephyrplace from "../assets/svg/Grupo 572.svg";

export function Menu() {
  return (
    <div className="flex justify-between p-4">
      <div className="flex justify-around">
        <img src={logo} className="flex-1" alt="logo" />
        <img src={zephyrplace} className="flex-1 ml-10" alt="logo" />
      </div>

      {/* vamos fazer o menu responsivo depois ! :D */}

      {/* <div className='flex flex-auto justify-around items-center'>
        <a className='text-white text-lg font-bold'>HOME</a>
        <a className='text-white text-lg font-bold'>BLOG</a>
        <a className='text-white text-lg font-bold'>PROJETOS</a>
        <a className='text-white text-lg font-bold'>SOBRE NÓS</a>
        <a className='text-white text-lg font-bold'>CONTATO</a>
      </div> */}
    </div>
  );
}
