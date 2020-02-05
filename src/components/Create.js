import React from "react";
import photo from "../assets/svg/Create.svg";

export function Create() {
  return (
    <div
      className="flex flex-row "
      style={{
        backgroundImage: "white",
        height: "200px"
      }}
    >
      <div
        style={{ marginLeft: "50px" }}
        className="flex flex-1 flex-col justify-center p-10 "
      >
        <p className="text-2xl">
          Crimamos a sua ideia e fazemos com que ela se torne realidade!
          Buscamos sempre inovar em cada projeto, preservando o estilo
        </p>
      </div>
      <div
        style={{ minHeight: "100px", marginTop: "100px", marginLeft: "200px" }}
        className="flex flex-1 justify-around flex-col "
      >
        <img
          src={photo}
          style={{
            width: "400px",
            height: "368px",
            marginTop: "-100px"
          }}
          className=""
          alt="renovar"
        />
      </div>
    </div>
  );
}
