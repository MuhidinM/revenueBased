import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Fileinput from "../../components/Fileinput";
import Input from "../../components/Input";
import Selectinput from "../../components/Selectinput";
import AuthService from "../../services/auth.service";
import { Formik } from "formik";
import * as Yup from "yup";
// import { CreateOrUpdate } from "../store/actions/";
import { CreateOrUpdate } from "../../store/actions/userProfileAction";

const date = [];
for (let i = 1; i < 13; i++) {
  date.push({ label: i, value: i });
}
const month = [];
for (let i = 1; i < 30; i++) {
  month.push({ label: i, value: i });
}
const year = [];
const thisyear = new Date().getFullYear();
const startyear = thisyear - 100;
for (let i = startyear; i < thisyear; i++) {
  year.push({ label: i, value: i });
}

const idtype = [
  { label: "Kebele ID", value: "kebeleid" },
  { label: "Passport", value: "kebeleid" },
  { label: "Driver Licence", value: "Driverlicence" },
];
const gender = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];
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

function Profile() {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [identificationCard, setidentificationCard] = useState();
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
    fname: Yup.string().required("First Name is required"),
    mname: Yup.string().required("Middle Name is required"),
    lname: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    paddress: Yup.string().required("Address is required"),
    region: Yup.string().required("Region is required"),
    date: Yup.string().required("Date is required"),
    month: Yup.string().required("Month is required"),
    year: Yup.string().required("Year is required"),
    id: Yup.string().required("ID is required"),
    cardType: Yup.string().required("You Have to select Card Type"),
    identificationCard: Yup.string().required(
      "You Have to provide Identification Card"
    ),
  });

  const fileInputTOForm = (e) => {
    // console.log(e.currentTarget.id);
    setidentificationCard(e.target.files[0]);
    // settradeLicenseImageName(e.target.files[0].name);
  };
  let formData = new FormData();
  return (
    <>
      <section className="m-8 bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <Formik
            initialValues={{
              fname: "",
              mname: "",
              lname: "",
              gender: "",
              paddress: "",
              region: "",
              date: "",
              month: "",
              year: "",
              id: "",
              cardType: "",
              identificationCard: "",
            }}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              formData.append("Helo", "hello");
              formData.append("fname", values.fname);
              formData.append("mname", values.mname);
              formData.append("lname", values.lname);
              formData.append("gender", values.gender);
              formData.append("paddress", values.paddress);
              formData.append("region", values.region);
              formData.append("date", values.date);
              formData.append("month", values.month);
              formData.append("year", values.year);
              formData.append("tradeLicenseImage", identificationCard);
              formData.append("id", values.id);
              formData.append("cardType", values.cardType);
              formData.append("user", currentUser.email);
              formData.append("identificationCard", values.identificationCard);
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
                        Pesonal In Formation
                      </h2>
                      <div className="w-full">
                        <Input
                          label="fname"
                          title="First Name"
                          type="text"
                          name="fname"
                          id="fname"
                          place="Lelisa"
                          value={props.values.fname}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="mname"
                          title="Middle Name"
                          type="text"
                          name="mname"
                          id="mname"
                          place="Abdusemed"
                          value={props.values.mname}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="lname"
                          title="Last Name"
                          type="text"
                          name="lname"
                          id="lname"
                          place="Chera"
                          value={props.values.lname}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div>
                        <Selectinput
                          arr={gender}
                          name="gender"
                          id="gender"
                          title="Gender"
                          value={props.values.gender}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Input
                          label="paddress"
                          title="Address"
                          type="text"
                          name="paddress"
                          id="paddress"
                          place="Some where ..."
                          value={props.values.paddress}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div>
                        <Selectinput
                          arr={region}
                          id="region"
                          name="region"
                          title="Region"
                          value={props.values.region}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="brand"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Birth Date
                        </label>
                        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                          <select
                            id="date"
                            name="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            value={props.values.date}
                            onChange={props.handleChange}
                          >
                            {date.map((arr) => (
                              <option value={arr.value}>{arr.label}</option>
                            ))}
                          </select>
                          <select
                            id="month"
                            name="month"
                            value={props.values.month}
                            onChange={props.handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                          >
                            {month.map((arr) => (
                              <option value={arr.value}>{arr.label}</option>
                            ))}
                          </select>
                          <select
                            id="year"
                            name="year"
                            value={props.values.year}
                            onChange={props.handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                          >
                            {year.map((arr) => (
                              <option value={arr.value}>{arr.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="w-full">
                        <Input
                          label="id"
                          title="Identification Card Number"
                          type="text"
                          name="id"
                          id="id"
                          place="TG873/12"
                          value={props.values.accountHolder}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div>
                        <Selectinput
                          arr={idtype}
                          id="kidt"
                          name="cardType"
                          title="Identification Card Type"
                          value={props.values.accountHolder}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Fileinput
                          lable="licence"
                          title="Identification Card"
                          name="identificationCard"
                          fileInputTOForm={fileInputTOForm}
                          value={identificationCard}
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

          <htmlForm action="#"></htmlForm>
          <htmlForm>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <h2 className="mt-8 mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
                Security
              </h2>
              <div className="w-full">
                <Input
                  label=""
                  title="Old Password"
                  type="password"
                  name=""
                  id=""
                  place="••••••••"
                  required=""
                />
              </div>
              <div className="w-full"></div>
              <div className="w-full">
                <Input
                  label=""
                  title="New Password"
                  type="password"
                  name=""
                  id=""
                  place="••••••••"
                  required=""
                />
              </div>
              <div className="w-full"></div>
              <div className="w-full">
                <Input
                  label=""
                  title="Repeat Password"
                  type="password"
                  name=""
                  id=""
                  place="••••••••"
                  required=""
                />
              </div>
              <div className="w-full"></div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
            >
              Change
            </button>
          </htmlForm>
        </div>
      </section>
    </>
  );
}

export default Profile;
