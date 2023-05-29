import React from "react";
import Card from "./Card";

function Inventory() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Inventory;
