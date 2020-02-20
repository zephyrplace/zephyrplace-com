import React from "react";
import { Container, Text, Containertxt } from "./styles";

import photo from "../../assets/svg/Mulher.svg";

export function Here() {
  return (
    <Container className="flex flex-col items-center">
      <div
        style={{ marginBottom: "-10vh" }}
        className="flex flex-1 justify-around flex-row "
      >
        <img
          src={photo}
          style={{
            width: "40vw",
            height: "36vh"
          }}
          className=""
          alt="renovar"
        />
      </div>
      <Containertxt
        style={{}}
        className="flex flex-1 flex-row justify-center p-10 "
      >
        <Text className="text-center">
          Aqui na <b>Zephyr Place</b> fazemos a sua ideia se tornar real! Nossa
          experiência é voltada para criação de aplicativos mobile, sempre
          visando o melhor custo benefício, agilidade e perfeição em cada
          desenvolvimento. Podemos ajudar você a alcançar suas metas!
        </Text>
      </Containertxt>
    </Container>
  );
}
