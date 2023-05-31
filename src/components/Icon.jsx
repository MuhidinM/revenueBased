import React from "react";
import logo from "./../assets/images/merchantone1_logo.png";

function Icon(props) {
  return (
    <>
      <a href={props.re} className="text-xl normal-case btn btn-ghost">
        <img src={logo} alt="Merchant" className="w-36" />
      </a>
    </>
  );
}

export default Icon;
