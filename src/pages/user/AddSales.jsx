import React from "react";
import Input from "../../components/Input";
import Fileinput from "../../components/Fileinput";

function AddSales({ values, onSubmit, onCancel }) {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="">
        <Input title="First Name" place="First Name" />
      </div>
      <div className="">
        <Input title="Last Name" place="Last Name" />
      </div>
      <div className="col-span-2">
        <Input title="Email" place="email@epay.com" type="email" />
      </div>
      <div className="col-span-2">
        <Input title="Phone" place="0987654321" type="number" />
      </div>
      <div className="items-center col-span-2 space-x-4">
        <button
          type="submit"
          onSubmit={onSubmit}
          className="text-white rounded-md swal2-styled bg-primary"
        >
          Create
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

export default AddSales;
