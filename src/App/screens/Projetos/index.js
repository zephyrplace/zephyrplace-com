import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopProjects from "./Desktop";
import MobileProjects from "./Mobile";

export default function ProjectScreen() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return isTabletOrMobile ? <MobileProjects /> : <DesktopProjects />;
}
