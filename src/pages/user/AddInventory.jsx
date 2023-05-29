import React from "react";
import Input from "../../components/Input";
import Fileinput from "../../components/Fileinput";

function AddInventory({ values, onSubmit, onCancel }) {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="">
        <Input title="Name" place="Name" />
      </div>
      <div className="">
        <Input title="Code" place="Code" />
      </div>
      <div className="">
        <Input title="Type" place="Type" />
      </div>
      <div className="">
        <Input title="Price" place="Price" type="number" />
      </div>
      <div className="col-span-2">
        <Fileinput title="test" />
      </div>
      <div className="items-center col-span-2 space-x-4">
        <button
          type="submit"
          onSubmit={onSubmit}
          className="text-white rounded-md swal2-styled bg-primary"
        >
          Add
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="swal2-cancel swal2-styled"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddInventory;
