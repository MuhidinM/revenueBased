import React from "react";
import Card from "../../components/Card";
import Tablesite from "../../components/Tablesite";

function Banks() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4 justify-self-auto">
        <div className="col-span-8 ">
          <label
            htmlFor="my-modal-4"
            className="mb-4 btn btn-outline btn-primary"
          >
            Add New
          </label>
          <Tablesite />
        </div>
        <div className="flex col-span-4">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Banks;
