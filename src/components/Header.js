import React from "react";
import { Navbar, Button, NavLink, NavbarBrand, NavbarText } from "reactstrap";

const Header = (details) => {
  return (
    <Navbar>
      <NavbarText className="navtext">LGM Internship</NavbarText>

      <Button
        className="btns"
        onClick={() => {
          details.handleClick(true);
        }}
      >
        Get User
      </Button>
    </Navbar>
  );
};
export default Header;
