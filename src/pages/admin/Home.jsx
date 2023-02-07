import React from "react";
import Card from "./Card";
import Stat from "../../components/Stat";
import Table from "./Table";
function Content() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4 justify-self-auto">
        <div className="col-span-8">
          <Stat />
          <Table />
        </div>
        <div className="flex col-span-4">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Content;
