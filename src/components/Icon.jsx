import React from "react";
import logo from "./../assets/images/merchantone1_logo-removebg-preview.png";

function Icon(props) {
  return (
    <>
      <a href={props.re} className="text-xl items-center mx-auto mb-4">
        <img src={logo} alt="Merchant" className="w-36" />
      </a>
    </>
  );
}

export default Icon;
