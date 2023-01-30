import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Business from "./Business";
import UserService from "../../services/user.service";
import Fileinput from "../../components/Fileinput";
import Input from "../../components/Input";
import Addressproof from "../../components/Addressproof";
import Selectinput from "../../components/Selectinput";
import Textarea from "../../components/Textarea";
import AuthService from "../../services/auth.service";
// import UserInfo from "./UserInfo";
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

function Settings() {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [tradeLicenseImage, settradeLicenseImage] = useState();
  const [tradeLicenseImageName, settradeLicenseImageName] = useState("");
  const [proofOfAddress, setproofOfAddress] = useState({});
  const [proofOfAddressImageName, setproofOfAddressImageName] = useState("");

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  console.log(currentUser.email);
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
    lgname: Yup.string().required("Legal Name is required"),
    incorporation: Yup.string().required("Incorporation is required"),
    industry: Yup.string().required("Industry is required"),
    category: Yup.string().required("Fullname is required"),
    regstaffsizeion: Yup.string().required("Fullname is required"),
    transaction: Yup.string().required("Fullname is required"),
    tinno: Yup.string().required("Fullname is required"),
    bno: Yup.string().required("Fullname is required"),
    waddress: Yup.string().required("Fullname is required"),
    // tradeLicense: Yup.string().required("Fullname is required"),
    // tinNumber: Yup.string().required("Fullname is required"),
    description: Yup.string().required("Fullname is required"),
    region: Yup.string().required("Fullname is required"),
    bcity: Yup.string().required("Fullname is required"),
    bkifleketema: Yup.string().required("Fullname is required"),
    bworeda: Yup.string().required("Fullname is required"),
    bkebele: Yup.string().required("Fullname is required"),
    hno: Yup.string().required("Fullname is required"),
    location: Yup.string().required("Fullname is required"),
    // proofOfAddress: Yup.mixed()
    //   .nullable()
    //   .required("Required Field")
    //   .test("size", "File Is Too large", (value) => {
    //     return value && value.size <= 5 * 1024 * 1024;
    //   })
    //   .test("type", "Invalid File Format", (value) => {
    //     return (
    //       (value && value.type === "image/jpeg") ||
    //       value.type === "image/jpg" ||
    //       value.type === "image/png"
    //     );
    //   }),
  });
  let formData = new FormData();
  return (
    <>
      <section className="m-8 bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <Formik
            initialValues={{
              lgname: "",
              incorporation: "",
              industry: "",
              category: "",
              regstaffsizeion: "",
              transaction: "",
              tinno: "",
              bno: "",
              waddress: "",
              tradeLicenseImage: "",
              description: "",
              region: "",
              bcity: "",
              bkifleketema: "",
              bworeda: "",
              bkebele: "",
              hno: "",
              location: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              formData.append("lgname", values.lgname);
              formData.append("incorporation", "A");
              formData.append("industry", "A");
              formData.append("category", "A");
              formData.append("regstaffsizeion", values.regstaffsizeion);
              formData.append("transaction", values.transaction);
              formData.append("tinno", values.tinno);
              formData.append("bno", values.bno);
              formData.append("waddress", values.waddress);
              formData.append("tradeLicenseImage", tradeLicenseImage);
              formData.append("description", values.description);
              formData.append("region", values.region);
              formData.append("user", currentUser.email);
              formData.append("bcity", values.bcity);
              formData.append("bkifleketema", values.bkifleketema);
              formData.append("bworeda", values.bworeda);
              formData.append("bkebele", values.bkebele);
              formData.append("hno", values.hno);
              formData.append("location", values.location);
              formData.append("proofOfAddress", proofOfAddress);
              UserService.BussinessInfoRequest(formData).then(
                (resp) => {
                  console.log(resp.message);
                  setMessage(resp.message);
                  setSuccessful(true);
                },
                (error) => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();

                  setMessage(resMessage);
                  setSuccessful(false);
                }
              );
            }}
          >
            {(props) => (
              <>
                {!successful && (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                      <div className="sm:col-span-2 divider"></div>
                      <h2 className="mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
                        Business In Formation
                      </h2>

                      <div className="w-full">
                        <span className="text-sm link-error">
                          {props.errors.lgname && props.touched.lgname
                            ? props.errors.lgname
                            : null}
                        </span>
                        <Input
                          label="lgname"
                          title="Legal Name"
                          type="text"
                          name="lgname"
                          value={props.values.lgname}
                          handleChange={props.handleChange}
                          // onChange={props.handleChange}

                          place="Egate S.C"
                          required=""
                        />
                      </div>
                      <div className="w-full">
                        <span className="text-sm link-error">
                          {props.errors.incorporation &&
                          props.touched.incorporation
                            ? props.errors.incorporation
                            : null}
                        </span>
                        <Selectinput
                          arr={incorporation}
                          id="incorporation"
                          name="incorporation"
                          value={props.values.incorporation}
                          handleChange={props.handleChange}
                          title="Type of Incorporation"
                        />
                      </div>
                      <div className="w-full">
                        <span className="text-sm link-error">
                          {props.errors.industry && props.touched.industry
                            ? props.errors.industry
                            : null}
                        </span>
                        <Selectinput
                          arr={industry}
                          id="industry"
                          name="industry"
                          value={props.values.industry}
                          handleChange={props.handleChange}
                          title="Industry"
                        />
                      </div>

                      <div>
                        <span className="text-sm link-error">
                          {props.errors.category && props.touched.category
                            ? props.errors.category
                            : null}
                        </span>
                        <Selectinput
                          arr={category}
                          id="category"
                          name="category"
                          title="Category"
                          value={props.values.category}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div>
                        <span className="text-sm link-error">
                          {props.errors.regstaffsizeion &&
                          props.touched.regstaffsizeion
                            ? props.errors.regstaffsizeion
                            : null}
                        </span>
                        <Selectinput
                          arr={staffsize}
                          id="regstaffsizeion"
                          name="regstaffsizeion"
                          title="Staff size"
                          value={props.values.regstaffsizeion}
                          handleChange={props.handleChange}
                        />
                      </div>
                      <div>
                        <span className="text-sm link-error">
                          {props.errors.transaction && props.touched.transaction
                            ? props.errors.transaction
                            : null}
                        </span>
                        <Selectinput
                          arr={transaction}
                          id="transaction"
                          name="transaction"
                          value={props.values.transaction}
                          handleChange={props.handleChange}
                          title="Monthly Transaction Amount"
                        />
                      </div>
                      <div>
                        <span className="text-sm link-error">
                          {props.errors.tinno && props.touched.tinno
                            ? props.errors.tinno
                            : null}
                        </span>
                        <Input
                          label="tinno"
                          title="Tin Number"
                          type="text"
                          name="tinno"
                          id="tinno"
                          value={props.values.tinno}
                          handleChange={props.handleChange}
                          place="FM48496469"
                          required=""
                        />
                      </div>
                      <div>
                        <span className="text-sm link-error">
                          {props.errors.bno && props.touched.bno
                            ? props.errors.bno
                            : null}
                        </span>
                        <Input
                          label="bno"
                          title="Business Registration Number"
                          type="text"
                          name="bno"
                          value={props.values.bno}
                          handleChange={props.handleChange}
                          id="bno"
                          place="FM48496469"
                          required=""
                        />
                      </div>
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
                          place="egate.com"
                          required=""
                        />
                      </div>
                      <div className="">
                        <Fileinput
                          lable="trdlicence"
                          title="Trade Licence"
                          name="tradeLicense"
                          fileInputTOForm={fileInputTOForm}
                          value={tradeLicenseImage}
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
                          {props.errors.bkifleketema &&
                          props.touched.bkifleketema
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
                    </div>
                  </>
                )}
              </>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}

export default Settings;
