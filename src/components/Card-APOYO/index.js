import React from "react";
import Apoyo from "../../assets/image/CAP/CAP.jpg";
import { Button } from "../button";

// Private
import { Container } from "./style";

export default function CardApoyo() {
  return (
    <Container>
      <div className="flex flex-1 flex-col">
        <img src={Apoyo} alt="Celular" style={{ width: "50vh" }} />
      </div>
      <div className="flex flex-col items-center flex-1">
        <p className="text-4xl text-right">Apoyo</p>
        <br />
        <p className="text-2xl text-right">Apoyo</p>
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
