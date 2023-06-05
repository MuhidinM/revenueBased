import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fileinput from "../../components/Fileinput";
import Input from "../../components/Input";
import Selectinput from "../../components/Selectinput";
import AuthService from "../../services/auth.service";
import { Formik } from "formik";
import * as Yup from "yup";
// import { CreateOrUpdate } from "../store/actions/";
import KYCService from "../../services/kyc.service";
import { getEkyInfo } from "../../store/actions/userProfileAction";
import Swal from "sweetalert2";

const business_type = [
  { label: "Sole Proprietorship", value: "Sole Proprietorship" },
  { label: "Partnership", value: "Partnership" },
  { label: "Coorporation", value: "Coorporation" },
];

function Profile() {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(true);

  const userData = useSelector((state) => state.userProfile);
  // console.log(userData);
  const { userID } = userData;
  useEffect(() => {
    if (userID) {
      dispatch(getEkyInfo(userID));
    }
  }, [userID, updated, dispatch]);

  // console.log(userData);
  const { kyc, loading } = userData;

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [agrementDoc, setAgrement_doc] = useState();
  const [businessLicence, setBusinessLicence] = useState();
  const [validIdentification, setValidIdentification] = useState();
  const [activeKYC, setActiveKYC] = useState(kyc ? true : false); // set this to true if they are active
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
    setAgrement_doc(e.target.files[0]);
  };
  const fileInputTOFormID = (e) => {
    setValidIdentification(e.target.files[0]);
  };
  const fileInputTOFormLicence = (e) => {
    setBusinessLicence(e.target.files[0]);
  };
  let formData = new FormData();
  return (
    <>
      {loading ? (
        <span>Loading</span>
      ) : (
        <section className="m-8 bg-white dark:bg-gray-900">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <Formik
              initialValues={{
                first_name: kyc?.first_name ? kyc?.first_name : "",
                last_name: kyc?.last_name ? kyc?.last_name : "",
                business_name: kyc?.business_name ? kyc?.business_name : "",
                business_type: kyc?.business_type ? kyc?.business_type : "",
                tin_number: kyc?.tin_number ? kyc?.tin_number : "",
                business_address: kyc?.business_address
                  ? kyc?.business_address
                  : "",
                website_url: kyc?.website_url ? kyc?.website_url : "",
                legal_entity_type: kyc?.legal_entity_type
                  ? kyc?.legal_entity_type
                  : "",
                date_of_establishment: kyc?.date_of_establishment
                  ? kyc?.date_of_establishment
                  : "",
                valid_identification: kyc?.valid_identification
                  ? kyc?.valid_identification
                  : "",
                compliance_aml: kyc?.compliance_aml ? kyc?.compliance_aml : "",
                business_licence: kyc?.business_licence
                  ? kyc?.business_licence
                  : "",
                agrement_doc: kyc?.agrement_doc ? kyc?.agrement_doc : "",
                merchant_status: kyc?.merchant_status
                  ? kyc?.merchant_status
                  : "",
                merchant_id: userID,
              }}
              // validationSchema={validationSchema}
              onSubmit={(values) => {
                formData.append("first_name", values.first_name);
                formData.append("last_name", values.last_name);
                formData.append("business_name", values.business_name);
                formData.append("business_type", values.business_type);
                formData.append("website_url", values.website_url);
                formData.append("tin_number", values.tin_number);
                formData.append("business_address", values.business_address);
                formData.append("legal_entity_type", values.legal_entity_type);
                formData.append(
                  "date_of_establishment",
                  values.date_of_establishment
                );
                formData.append("compliance_aml", values.compliance_aml);
                formData.append("merchant_status", values.merchant_status);
                formData.append("valid_identification", validIdentification);
                formData.append("business_license", businessLicence);
                formData.append("agreement_doc", agrementDoc);
                formData.append("merchant_id", userID);
                // console.log(formData);
                dispatch(
                  KYCService.CreateKYC(formData, setUpdated, updated)
                    .then(
                      (response) =>
                        response &&
                        Swal.fire({
                          icon: "success",
                          title: "kyc Created Successfully",
                          showConfirmButton: false,
                          timer: 3000,
                        })
                    )
                    .catch(
                      (error) =>
                        error &&
                        Swal.fire({
                          icon: "error",
                          title: `Something went wrong`,
                          showConfirmButton: false,
                          timer: 3000,
                        })
                    )
                );
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
                            name="first_name"
                            id="first_name"
                            place="Fist Name"
                            value={props.values.first_name}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        <div className="w-full">
                          <Input
                            label="last_name"
                            title="Last Name"
                            name="last_name"
                            id="last_name"
                            place="Last Name"
                            value={props.values.last_name}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        <div className="w-full">
                          <Input
                            label="Business Name"
                            title="Business Name"
                            name="business_name"
                            id="business_name"
                            place="Business Name"
                            value={props.values.business_name}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        <div className="w-full">
                          {activeKYC ? (
                            <Input
                              label="business_type"
                              title="Business Type"
                              name="business_type"
                              id="business_type"
                              value={props.values.business_type}
                              disabled={true}
                            />
                          ) : (
                            <Selectinput
                              arr={business_type}
                              id="business_type"
                              name="business_type"
                              value={props.values.business_type}
                              handleChange={props.handleChange}
                              title="Busines Type"
                            />
                          )}
                        </div>
                        <div className="w-full">
                          <Input
                            label="business_address"
                            title="Business Address"
                            name="business_address"
                            id="business_address"
                            place="Some where..."
                            value={props.values.business_address}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        <div className="w-full">
                          <Input
                            label="tin_number"
                            title="Tin Number"
                            name="tin_number"
                            id="tin_number"
                            place="TN7378987654"
                            value={props.values.tin_number}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>

                        <div className="w-full">
                          <Input
                            label="legal_entity_type"
                            title="Legal Entity Type"
                            name="legal_entity_type"
                            id="legal_entity_type"
                            place="legal entity type"
                            value={props.values.legal_entity_type}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        <div className="w-full">
                          <div className="">
                            <label
                              htmlFor={"date"}
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Date of Establishment
                            </label>
                            <input
                              type="date"
                              id="datepicker"
                              name="date_of_establishment"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                              value={props.values.date_of_establishment}
                              onChange={props.handleChange}
                              disabled={activeKYC ? true : false}
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <Input
                            label="compliance_aml"
                            title="Compliance Anti Money Laundary"
                            name="compliance_aml"
                            id="compliance_aml"
                            place="Compliance Anti Money Laundary"
                            value={props.values.compliance_aml}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        <div className="w-full">
                          <Input
                            label="merchant_status"
                            title="Merchant Status"
                            name="merchant_status"
                            id="merchant_status"
                            place="Merchant Status"
                            value={props.values.merchant_status}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <Input
                            label="website_url"
                            title="Website URL"
                            name="website_url"
                            id="website_url"
                            place="epay.com"
                            value={props.values.website_url}
                            handleChange={props.handleChange}
                            disabled={activeKYC ? true : false}
                          />
                        </div>
                        {activeKYC ? (
                          <>
                            <div className="col-span-2">
                              <img
                                width={1240}
                                height={1752}
                                className="mb-3"
                                src={
                                  kyc.valid_identification
                                    ? kyc.valid_identification
                                    : "https://dummyimage.com/1240x1752/d1d1d1/000000"
                                }
                                alt="ID Card"
                              />
                              <label
                                htmlFor=""
                                className="text-xl font-bold py-2"
                              >
                                ID Card
                              </label>
                            </div>
                            <div className="col-span-2">
                              <img
                                width={1240}
                                height={1752}
                                className="mb-3"
                                src={
                                  kyc.business_licnense
                                    ? kyc.business_licnense
                                    : "https://dummyimage.com/1240x1752/d1d1d1/000000"
                                }
                                alt="Business Lisence"
                              />
                              <label
                                htmlFor=""
                                className="text-xl font-bold py-2"
                              >
                                Business Lisence
                              </label>
                            </div>
                            <div className="col-span-2">
                              <img
                                width={1240}
                                height={1752}
                                className="mb-3"
                                src={
                                  kyc.agreement_doc
                                    ? kyc.agreement_doc
                                    : "https://dummyimage.com/1240x1752/d1d1d1/000000"
                                }
                                alt="Agreement Document"
                              />
                              <label
                                htmlFor=""
                                className="text-xl font-bold py-2"
                              >
                                Agreement Document
                              </label>
                            </div>
                          </>
                        ) : (
                          <div className="sm:col-span-2">
                            <div className="">
                              <Fileinput
                                lable="valid_identification"
                                title="Valid Identification"
                                name="valid_identification"
                                fileInputTOForm={fileInputTOFormID}
                                value={validIdentification}
                              />
                            </div>
                            <div className="">
                              <Fileinput
                                lable="business_licence"
                                title="Business Licence"
                                name="business_licence"
                                fileInputTOForm={fileInputTOFormLicence}
                                value={businessLicence}
                              />
                            </div>
                            <div className="">
                              <Fileinput
                                lable="agrement_doc"
                                title="Bank Agrement Document"
                                name="agrement_doc"
                                fileInputTOForm={fileInputTOFormDoc}
                                value={agrementDoc}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      {activeKYC ? (
                        ""
                      ) : (
                        <button
                          type="submit"
                          onClick={props.handleSubmit}
                          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
                        >
                          Submit
                        </button>
                      )}
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
      )}
    </>
  );
}

export default Profile;
