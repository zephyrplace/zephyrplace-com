import React from "react";
import photo from "../assets/svg/Renew.svg";

export function Renew() {
  return (
    <div
      className="flex flex-row "
      style={{
        backgroundImage: "white"
      }}
    >
      <div
        style={{ minHeight: "693px", marginTop: "100px" }}
        className="flex flex-1 justify-around flex-col p-10"
      >
        <img
          src={photo}
          style={{
            width: "500px",
            height: "368px",
            marginTop: "-100px"
          }}
          className=""
          alt="renovar"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-10 ">
        <p className="text-2xl">
          Renove seu aplicativo atual com as melhores tecnologias do mercado e
          mantenha seus negócios no topo! IMPRESSIONE!
        </p>
      </div>
    </div>
  );
}
