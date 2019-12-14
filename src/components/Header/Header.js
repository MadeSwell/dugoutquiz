import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import * as Styled from "./styles/StyledHeader";

import logo from "../../img/dugoutquiz-logo.svg";

export default function Header() {
  return (
    <Styled.Header>
      <Link to="/">
        <img src={logo} width="250" />
      </Link>
      {/* <Menu>
        <MenuButton as={Button} variantColor="white">
          Menu
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu> */}
    </Styled.Header>
  );
}
