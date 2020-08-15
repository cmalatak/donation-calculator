import React, { useState } from "react";
import NavMenu from "./NavMenu";

const MobileNavButton = () => {
  const [navMenuState, setNavMenuState] = useState("closed");
  const toggleNavMenu = () => {
    if (navMenuState === "closed") {
      setNavMenuState("open");
    } else {
      setNavMenuState("closed");
    }
  };
  return (
    <>
      <button onClick={() => toggleNavMenu()}>Menu</button>
      {navMenuState === "open" ? <NavMenu /> : ""}
    </>
  );
};

export default MobileNavButton;
