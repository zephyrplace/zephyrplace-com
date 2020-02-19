import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHome from "./Desktop";
import MobileHome from "./Mobile";

export default function HomeScreen() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return isTabletOrMobile ? <MobileHome /> : <DesktopHome />;
}
