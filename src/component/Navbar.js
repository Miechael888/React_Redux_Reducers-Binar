import React from "react";
import { useState } from "react";
import NavbarName from "./NavbarName";
import NavbarImage from "./NavbarImage";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <NavbarName />
      <NavbarImage />
    </div>
  );
};

export default Navbar;
