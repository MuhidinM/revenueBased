import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { FormContext } from "../MultiStepForm";
import Input from "../../../components/Input";
import Selectinput from "../../../components/Selectinput";
import Fileinput from "../../../components/Fileinput";
import Textarea from "../../../components/Textarea";
import Addressproof from "../../../components/Addressproof";
import * as Yup from "yup";

const region = [
  { label: "Afar", value: "af" },
  { label: "Amhara", value: "am" },
  { label: "Benishangul", value: "bg" },
  { label: "Fedral", value: "fd" },
  { label: "Gambela", value: "gm" },
  { label: "Harar", value: "hr" },
  { label: "Oromia", value: "or" },
  { label: "Sidama", value: "sd" },
  { label: "Somalia", value: "sm" },
  { label: "SNNPR", value: "sn" },
  { label: "Tigray", value: "tg" },
];
const incorporation = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const industry = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const category = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const staffsize = [
  { label: "Up to 5", value: "5" },
  { label: "6 to 15", value: "15" },
  { label: "16 to 50", value: "50" },
  { label: "Above 50", value: "a50" },
];
const transaction = [
  { label: "Below 10,000", value: "10000" },
  { label: "10,000 to 50,000", value: "50000" },
  { label: "50,000 to 100,000", value: "100000" },
  { label: "Above 100,000", value: "a100000" },
];

function Basic2() {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [tradeLicenseImage, settradeLicenseImage] = useState();
  const [tradeLicenseImageName, settradeLicenseImageName] = useState("");
  const [proofOfAddress, setproofOfAddress] = useState({});
  const [proofOfAddressImageName, setproofOfAddressImageName] = useState("");
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const file1 = (e) => {
    console.log("Hello");
    setproofOfAddress(e.target.files[0]);
    setproofOfAddressImageName(e.target.files[0].name);
  };

  const fileInputTOForm = (e) => {
    console.log(e.currentTarget.id);
    settradeLicenseImage(e.target.files[0]);
    settradeLicenseImageName(e.target.files[0].name);
  };
  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const validationSchema = Yup.object().shape({
    waddress: Yup.string().required("Fullname is required"),

    description: Yup.string().required("Fullname is required"),
    file: Yup.mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  return (
    <Formik
      initialValues={{
        waddress: "",
        description: "",
        file: undefined,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // formData.append("tradeLicenseImage", tradeLicenseImage);
        const data = { ...formData, ...values };
        console.log(data);
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      {(props) => (
        <>
          <>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
                Business In Formation
              </h2>

              <div className="sm:col-span-2">
                <span className="text-sm link-error">
                  {props.errors.waddress && props.touched.waddress
                    ? props.errors.waddress
                    : null}
                </span>
                <Input
                  label="waddress"
                  title="Website Address"
                  type="text"
                  name="waddress"
                  value={props.values.waddress}
                  handleChange={props.handleChange}
                  id="waddress"
                  place="Epay.com"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <Fileinput
                  lable="trdlicence"
                  title="Trade Licence"
                  name="file"
                  fileInputTOForm={fileInputTOForm}
                  //   value={tradeLicenseImage}
                />
              </div>
              <div className="sm:col-span-2">
                <span className="text-sm link-error">
                  {props.errors.description && props.touched.description
                    ? props.errors.description
                    : null}
                </span>
                <Textarea
                  label="description"
                  title="Description Of Company"
                  value={props.values.description}
                  handleChange={props.handleChange}
                  name="description"
                />
              </div>

              <button
                type="submit"
                onClick={props.handleSubmit}
                className="sm:col-span-2 text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Continue
              </button>
            </div>
          </>
        </>
      )}

      {/* <Form className="flex flex-col justify-center items-center">
        <div className="text-2xl font-medium self-center mb-2">Welcome!</div>
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Name</label>
          <Field
            name="name"
            className="rounded-md border-2 p-2"
            placeholder="John Doe"
          />
        </div>
        <ErrorMessage name="name" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Email</label>
          <Field
            name="email"
            className="rounded-md border-2 p-2"
            placeholder="john.doe@gmail.com"
          />
        </div>
        <ErrorMessage name="email" render={renderError} />
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit"
        >
          Continue
        </button>
      </Form> */}
    </Formik>
  );
}

export default Basic2;
