import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopAboutUs from "./Desktop";
import MobileAboutUs from "./Mobile";

export default function AboutUsScreen() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return isTabletOrMobile ? <MobileAboutUs /> : <DesktopAboutUs />;
}
