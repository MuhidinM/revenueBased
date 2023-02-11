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

function Workspace() {
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
  const validationSchema = Yup.object().shape({
    region: Yup.string().required("Fullname is required"),
    bcity: Yup.string().required("Fullname is required"),
    bkifleketema: Yup.string().required("Fullname is required"),
    bworeda: Yup.string().required("Fullname is required"),
    bkebele: Yup.string().required("Fullname is required"),
    hno: Yup.string().required("Fullname is required"),
    location: Yup.string().required("Fullname is required"),
  });

  return (
    <Formik
      initialValues={{
        region: "",
        bcity: "",
        bkifleketema: "",
        bcbworedaity: "",
        bkebele: "",
        hno: "",
        location: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        console.log(data);
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      {(props) => (
        <>
          {!successful && (
            <>
              <div className="divider sm:col-span-2"></div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
                Business Address
              </h2>
              <div>
                <span className="text-sm link-error">
                  {props.errors.region && props.touched.region
                    ? props.errors.region
                    : null}
                </span>
                <Selectinput
                  arr={region}
                  id="region"
                  title="Region"
                  value={props.values.region}
                  handleChange={props.handleChange}
                  name="region"
                />
              </div>
              <div>
                <span className="text-sm link-error">
                  {props.errors.bcity && props.touched.bcity
                    ? props.errors.bcity
                    : null}
                </span>
                <Input
                  label="bcity"
                  title="City"
                  type="text"
                  name="bcity"
                  value={props.values.bcity}
                  handleChange={props.handleChange}
                  id="bcity"
                  place="Adama"
                  required=""
                />
              </div>
              <div>
                <span className="text-sm link-error">
                  {props.errors.bkifleketema && props.touched.bkifleketema
                    ? props.errors.bkifleketema
                    : null}
                </span>
                <Input
                  label="bkifleketema"
                  title="Kifle Ketema"
                  type="text"
                  name="bkifleketema"
                  value={props.values.bkifleketema}
                  handleChange={props.handleChange}
                  id="bkifleketema"
                  place="Lugo"
                  required=""
                />
              </div>
              <div>
                <span className="text-sm link-error">
                  {props.errors.bworeda && props.touched.bworeda
                    ? props.errors.bworeda
                    : null}
                </span>
                <Input
                  label="bworeda"
                  title="Woreda"
                  type="text"
                  name="bworeda"
                  value={props.values.bworeda}
                  handleChange={props.handleChange}
                  id="bworeda"
                  place="Adama"
                  required=""
                />
              </div>
              <div>
                <span className="text-sm link-error">
                  {props.errors.bkebele && props.touched.bkebele
                    ? props.errors.bkebele
                    : null}
                </span>
                <Input
                  label="bkebele"
                  title="Kebele"
                  type="text"
                  name="bkebele"
                  value={props.values.bkebele}
                  handleChange={props.handleChange}
                  id="bkebele"
                  place="03"
                  required=""
                />
              </div>
              <div>
                <span className="text-sm link-error">
                  {props.errors.hno && props.touched.hno
                    ? props.errors.hno
                    : null}
                </span>
                <Input
                  label="hno"
                  title="House Number"
                  type="text"
                  name="hno"
                  value={props.values.hno}
                  handleChange={props.handleChange}
                  id="hno"
                  place="G67-32"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <span className="text-sm link-error">
                  {props.errors.location && props.touched.location
                    ? props.errors.location
                    : null}
                </span>
                <Input
                  label="location"
                  title="Friendly Location"
                  type="text"
                  name="location"
                  value={props.values.location}
                  handleChange={props.handleChange}
                  id="location"
                  place="Near Dembel City Mall"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <Addressproof
                  lable="proof"
                  title="Proof of Address"
                  name="proof"
                  file1={file1}
                  value={proofOfAddress}
                />
              </div>
              <button
                type="submit"
                onClick={props.handleSubmit}
                className="sm:col-span-2 text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Verify
              </button>
            </>
          )}
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

export default Workspace;
