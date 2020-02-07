import React from "react";
import cap from "../../assets/image/CAP/CAP.jpg";
import { Button } from "../button";

// Private
import { Container } from "./style";

export default function Card() {
  return (
    <Container>
      <div className="flex flex-1 flex-col">
        <img src={cap} alt="Celular" style={{ width: "50vh" }} />
      </div>
      <div className="flex flex-col items-center flex-1">
        <p className="text-3xl text-right">
          Aplicativo Mobile - <b>CAP</b>
        </p>
        <br />
        <p className="text-2xl text-right">CAP</p>
        <Button
          border="5px solid black"
          originalColor="black"
          backgroundColor="black"
          color="white"
        >
          ACESSE
        </Button>
      </div>
    </Container>
  );
}
