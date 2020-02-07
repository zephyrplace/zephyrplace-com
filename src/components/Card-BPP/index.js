import React from "react";
import BPP from "../../assets/image/BPP/BPP.jpg";
import { Button } from "../button";

// Private
import { Container } from "./style";

export default function CardBPP() {
  return (
    <Container>
      <div className="flex flex-1 flex-col">
        <img src={BPP} alt="Celular" style={{ width: "50vh" }} />
      </div>
      <div className="flex flex-col items-center flex-1">
        <p className="text-3xl text-right">
          Aplicativo Mobile - <b>BPP</b>
        </p>
        <br />
        <p className="text-2xl text-right">BPP</p>
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
