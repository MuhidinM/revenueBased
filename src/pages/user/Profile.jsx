import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Fileinput from "../../components/Fileinput";
import Input from "../../components/Input";
import Selectinput from "../../components/Selectinput";
import AuthService from "../../services/auth.service";
import { Formik } from "formik";
import * as Yup from "yup";
import Datepicker from "tailwind-datepicker-react";
// import { CreateOrUpdate } from "../store/actions/";
import { CreateOrUpdate } from "../../store/actions/userProfileAction";

const business_type = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const legal_entity_type = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const options = {
  title: "Demo Title",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-red-500",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date("2022-01-01"),
  language: "en",
};

function Profile() {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [agrementDoc, setAgrement_doc] = useState();
  const [businessLicence, setBusinessLicence] = useState();
  const [validIdentification, setValidIdentification] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  // console.log(currentUser.id);
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    business_name: Yup.string().required("Business Name is required"),
    business_type: Yup.string().required("Business Type is required"),
    tin_number: Yup.string().required("Tin Number is required"),
    business_address: Yup.string().required("Business Address is required"),
    website_url: Yup.string().required("Website URL is required"),
    legal_entity_type: Yup.string().required("Legal Entity Type is required"),
    date_of_establishment: Yup.string().required(
      "Date of Establishment is required"
    ),
    valid_identification: Yup.string().required("Identification is required"),
    compliance_aml: Yup.string().required("Compliance Aml is required"),
    business_licence: Yup.string().required("Business Licence is required"),
    agrement_doc: Yup.string().required("Bank Agrement Document is required"),
    merchant_status: Yup.string().required("Merchant Status is required"),
  });

  const fileInputTOFormDoc = (e) => {
    setValidIdentification(e.target.files[0]);
  };
  const fileInputTOFormID = (e) => {
    setValidIdentification(e.target.files[0]);
  };
  const fileInputTOFormLicence = (e) => {
    setValidIdentification(e.target.files[0]);
  };
  let formData = new FormData();
  return (
    <>
      <section className="m-8 bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              business_name: "",
              business_type: "",
              tin_number: "",
              business_address: "",
              website_url: "",
              legal_entity_type: "",
              date_of_establishment: "",
              valid_identification: "",
              compliance_aml: "",
              business_licence: "",
              agrement_doc: "",
              merchant_status: "",
            }}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              formData.append("Helo", "hello");
              formData.append("fname", values.first_name);
              formData.append("last_name", values.last_name);
              formData.append("business_name", values.business_name);
              formData.append("business_type", values.business_type);
              formData.append("tin_number", values.tin_number);
              formData.append("business_address", values.business_address);
              formData.append("website_url", values.website_url);
              formData.append("legal_entity_type", values.legal_entity_type);
              formData.append(
                "date_of_establishment",
                values.date_of_establishment
              );
              formData.append("compliance_aml", values.compliance_aml);
              formData.append("merchant_status", values.merchant_status);
              formData.append("valid_identification", validIdentification);
              formData.append("business_licence", businessLicence);
              formData.append("agrement_doc", agrementDoc);
              // console.log(formData);
              dispatch(CreateOrUpdate(formData))
                .then((res) => console.log(res))
                .catch((e) => console.log(e));
            }}
          >
            {(props) => (
              <>
                {!successful && (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                      <h2 className="mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
                        Pesonal Information
                      </h2>
                      <div className="w-full">
                        <Input
                          label="first_name"
                          title="First Name"
                          type="text"
                          name="first_name"
                          id="first_name"
                          place="Lelisa"
                          value={props.values.first_name}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="last_name"
                          title="Last Name"
                          type="text"
                          name="last_name"
                          id="last_name"
                          place="Abdusemed"
                          value={props.values.last_name}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="business_name"
                          title="Business Name"
                          type="text"
                          name="business_name"
                          id="business_name"
                          place="Test"
                          value={props.values.business_name}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Selectinput
                          arr={business_type}
                          id="business_type"
                          name="business_type"
                          value={props.values.business_type}
                          handleChange={props.handleChange}
                          title="Busines Type"
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="business_address"
                          title="Business Address"
                          type="text"
                          name="business_address"
                          id="business_address"
                          place="Some where..."
                          value={props.values.business_address}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="tin_number"
                          title="Tin Number"
                          type="text"
                          name="tin_number"
                          id="tin_number"
                          place="TN7378987654"
                          value={props.values.tin_number}
                          handleChange={props.handleChange}
                        />
                      </div>

                      <div className="w-full">
                        <Selectinput
                          arr={legal_entity_type}
                          id="legal_entity_type"
                          name="legal_entity_type"
                          value={props.values.legal_entity_type}
                          handleChange={props.handleChange}
                          title="Legal Entity Type"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor={"date"}
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Date of Establishment
                        </label>
                        <Datepicker
                          options={options}
                          onChange={handleChange}
                          show={show}
                          setShow={handleClose}
                        />
                        {/* <Input
                          label="date_of_establishment"
                          title="Date of Establishment"
                          type="text"
                          name="date_of_establishment"
                          id="date_of_establishment"
                          place="kkk"
                          value={props.values.date_of_establishment}
                          handleChange={props.handleChange}
                        /> */}
                      </div>
                      <div className="w-full">
                        <Input
                          label="compliance_aml"
                          title="Compliance Aml"
                          type="text"
                          name="compliance_aml"
                          id="compliance_aml"
                          place="Compliance Aml"
                          value={props.values.compliance_aml}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="merchant_status"
                          title="Merchant Status"
                          type="text"
                          name="merchant_status"
                          id="merchant_status"
                          place="Merchant Status"
                          value={props.values.merchant_status}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Input
                          label="website_url"
                          title="Website URL"
                          type="text"
                          name="website_url"
                          id="website_url"
                          place="epay.com"
                          value={props.values.website_url}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Fileinput
                          lable="valid_identification"
                          title="Valid Identification"
                          name="valid_identification"
                          fileInputTOForm={fileInputTOFormID}
                          value={validIdentification}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Fileinput
                          lable="business_licence"
                          title="Business Licence"
                          name="business_licence"
                          fileInputTOForm={fileInputTOFormLicence}
                          value={businessLicence}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Fileinput
                          lable="agrement_doc"
                          title="Bank Agrement Document"
                          name="agrement_doc"
                          fileInputTOForm={fileInputTOFormDoc}
                          value={agrementDoc}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      onClick={props.handleSubmit}
                      className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
                    >
                      Submit
                    </button>
                  </>
                )}
                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
              </>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}

export default Profile;
