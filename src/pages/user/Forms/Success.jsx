import React, { useContext, useState } from "react";
import { FormContext } from "../MultiStepForm";
function Success() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  return (
    <div className="font-medium">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* <div className="sm:col-span-2">Business Information</div> */}
        <div className="sm:col-span-2">
          <b>Legal Name:</b> <br />
          {formData.lgname}
        </div>
        <div className="sm:col-span-2">
          <b>Type of Incorporation:</b> <br />
          {formData.incorporation}
        </div>

        <div className="sm:col-span-2">
          <b>Industry:</b> <br />
          {formData.industry}
        </div>
        <div className="sm:col-span-2">
          <b>Category:</b> <br />
          {formData.category}
        </div>
        <div className="sm:col-span-2">
          <b>Staff size:</b> <br />
          {formData.regstaffsizeion}
        </div>
        <div className="sm:col-span-2">
          <b>Monthly Transaction Amount:</b> <br />
          {formData.transaction}
        </div>
        <div className="sm:col-span-2">
          <b>Tin Number:</b> <br />
          {formData.tinno}
        </div>
        <div className="sm:col-span-2">
          <b>Business Registration Number:</b> <br />
          {formData.bno}
        </div>
        <div className="sm:col-span-3">
          <b>Website Address:</b> <br />
          {formData.waddress}
        </div>

        <div className="sm:col-span-4">
          <b>Business Registration:</b> <br />
          <img className="" src="../card.png" alt="ID" />
        </div>
        <div className="sm:col-span-4">
          <b>Description Of Company:</b> <br />
          {formData.description}
        </div>
        <div className="divider sm:col-span-4">
          <h1>Comapany Address</h1>
        </div>
        <div className="sm:col-span-2">
          <b>Region:</b> <br />
          {formData.region}
        </div>
        <div className="sm:col-span-2">
          <b>City:</b> <br />
          {formData.bcity}
        </div>
        <div className="sm:col-span-2">
          <b>Kifle Ketema:</b> <br />
          {formData.bkifleketema}{" "}
        </div>
        <div className="sm:col-span-2">
          <b>Woreda:</b> <br />
          {formData.bworeda}{" "}
        </div>
        <div className="sm:col-span-2">
          <b>Kebele:</b> <br />
          {formData.bkebele}{" "}
        </div>
        <div className="sm:col-span-2">
          <b>House Number:</b> <br />
          {formData.hno}{" "}
        </div>
        <div className="sm:col-span-2">
          <b>Friendly Location:</b> <br />
          {formData.location}{" "}
        </div>
        <div className="sm:col-span-4">
          <b>Proof of Address:</b> <br />
          <img
            className=""
            // src={m2SettingData.tradeLicense}
            alt="ID"
          />
        </div>
        <button
          type="submit"
          // onClick={props.handleSubmit}
          className="sm:col-span-4 text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Success;
