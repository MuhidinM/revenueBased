import React, { useContext, useState } from "react";
import { FormContext } from "../MultiStepForm";
function Success() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  return <div className="font-medium">{formData.lgname}</div>;
}

export default Success;
