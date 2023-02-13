import React, { useContext, useState } from "react";
import { FormContext } from "../MultiStepForm";
function Success() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  return (
    <div className="font-medium">
      <div className="grid gap-4 pt-8 sm:grid-cols-2 sm:gap-6">
        {/* <div className="sm:col-span-2">Business Information</div> */}
        <div className="w-full">
          <b>Legal Name:</b> <br />
          {formData.lgname}
        </div>
        <div className="w-full">
          <b>Type of Incorporation:</b> <br />
          {formData.incorporation}
        </div>

        <div className="w-full">
          <b>Industry:</b> <br />
          {formData.industry}
        </div>
        <div className="w-full">
          <b>Category:</b> <br />
          {formData.category}
        </div>
        <div className="w-full">
          <b>Staff size:</b> <br />
          {formData.regstaffsizeion}
        </div>
        <div className="w-full">
          <b>Monthly Transaction Amount:</b> <br />
          {formData.transaction}
        </div>
        <div className="w-full">
          <b>Tin Number:</b> <br />
          {formData.tinno}
        </div>
        <div className="w-full">
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
        <div className="w-full">
          <b>Region:</b> <br />
          {formData.region}
        </div>
        <div className="w-full">
          <b>City:</b> <br />
          {formData.bcity}
        </div>
        <div className="w-full">
          <b>Kifle Ketema:</b> <br />
          {formData.bkifleketema}{" "}
        </div>
        <div className="w-full">
          <b>Woreda:</b> <br />
          {formData.bworeda}{" "}
        </div>
        <div className="w-full">
          <b>Kebele:</b> <br />
          {formData.bkebele}{" "}
        </div>
        <div className="w-full">
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
            width={300}
            height={400}
            alt="ID"
          />
        </div>
      </div>
    </div>
  );
}

export default Success;
