import styled from 'styled-components'
import * as Antd from 'antd'

export const Drawer = styled(Antd.Drawer).attrs({
  closable: false,
  placement: 'left'
})`
  .ant-drawer-content {
    background-color: black;
  }
`

export const Menu = styled(Antd.Menu).attrs({
  theme: 'light',
  defaultSelectedKeys: ['0']
})`
  .ant-menu-item::after {
    border: none;
  }
  .ant-menu-item:hover {
    color: grey;
  }
  .ant-menu-item-active {
    color: grey;
  }
  .ant-menu-item-selected {
    color: black;
  }
  background-color: black;
`

export const Item = styled(Antd.Menu.Item)`
  width: 100%;
  color: white;
  background-color: black;
`

export const MenuText = styled.span`
  font-size: 3vh;
`
