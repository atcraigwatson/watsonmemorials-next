import React from "react";
import NavbarItem from "./NavbarItem";

const NavbarCollapse = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <NavbarItem label={"Home"} path={"/"} />
        <NavbarItem label={"About"} path={"/about"} />
        <NavbarItem label={"Online Brochure"} path={"/headstones"} />
        <NavbarItem label={"Photo Plaques"} path={"/photo-plaques"} />
        <NavbarItem label={"Inscription Examples"} path={"/inscription-examples"} />
        <NavbarItem label={"Services"} path={"/services"} />
        <NavbarItem label={"Contact"} path={"/contact"} />
      </ul>
    </div>
  );
};

export default NavbarCollapse;
