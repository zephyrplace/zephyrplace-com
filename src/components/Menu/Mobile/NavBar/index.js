import React from "react";
import { useHistory } from "react-router-dom";

// Private
import { Drawer, Menu, Item, MenuText } from "./styles";

export default function NavBar({ open, onClose }) {
  const history = useHistory();
  return (
    <Drawer onClose={onClose} visible={open}>
      <br />
      <br />
      <br />
      <Menu>
        <Item key="1" onClick={() => history.push("/")}>
          <MenuText>Home</MenuText>
        </Item>
        <Item key="2" onClick={() => history.push("/Projects")}>
          <MenuText>Projetos</MenuText>
        </Item>

        <Item key="3" onClick={() => history.push("/About")}>
          <MenuText>Sobre nós</MenuText>
        </Item>
      </Menu>
    </Drawer>
  );
}
