import React from "react";
import Input from "../../components/Input";
import Selectinput from "../../components/Selectinput";

function LoanRequest() {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 sm:gap-6 bg-white p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
          Loan Request Form
        </h2>

        <div className="w-full">
          <span className="text-sm link-error"></span>
          <Input
            label="lgname"
            title="Legal Name"
            type="text"
            name="lgname"
            place="Epay S.C"
            required=""
          />
        </div>

        <button
          type="submit"
          className="sm:col-span-2 text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default LoanRequest;
