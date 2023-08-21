import React from "react";

const Button = ({ text, color, bg_color }) => {
  return (
    <a
      className="button boxShadow d-f ai-c jc-c"
      href="#"
      style={{ color: `${color}`, backgroundColor: `${bg_color}` }}
    >
      {text}
    </a>
  );
};

export default Button;
