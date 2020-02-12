import React from "react";
import photo from "../assets/svg/CaraCaminho.svg";

export function Our() {
  return (
    <div
      style={{
        display: "flex",
        height: "40vh",
        width: "100%",
        flex: 1,
        marginTop: "7vh",
        backgroundColor: "red",
        backgroundImage: photo,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div
        style={{
          marginLeft: "50px"
        }}
        className="flex flex-1 flex-col justify-center p-10 "
      >
        <p className="text-2xl text-right">
          Nossos <b>projetos</b> são desenvolvidos por uma equipe de ponta
          <b>preparada</b> para atender <b>todas</b> às suas ideias!
        </p>
      </div>
    </div>
  );
}
