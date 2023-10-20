import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = styled(AppBar)`
  background: black;
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;
const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Home page</Tabs>
        <Tabs to="/all">All User</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
};
export default Navbar;
