import React from "react";

function Icon(props) {
  return (
    <>
      <a href={props.re} className="text-xl normal-case btn btn-ghost">
        <img src="../PaymentGateway.png" alt="Epay" className="w-24" />
      </a>
    </>
  );
}

export default Icon;
