import React from "react";
import { useMediaQuery } from "react-responsive";
import Desktop from "./Mobile";
import Mobile from "./Mobile";

export default function Footer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return isTabletOrMobile ? <Mobile /> : <Desktop />;
}
