import React from "react";
import Button from "./Button";
import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="setWidth d-f ai-c jc-sb">
        <img src={logo} alt="logo" />
        <Button
          text="Try It Free"
          color="hsl(192, 100%, 9%)"
          bg_color=" hsl(0, 0%, 100%)"
        />
      </div>
    </header>
  );
};

export default Header;
