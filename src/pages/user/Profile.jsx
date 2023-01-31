import React from "react";
import Fileinput from "../../components/Fileinput";
import Input from "../../components/Input";
import Selectinput from "../../components/Selectinput";

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
  return (
    <>
      <section className="m-8 bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <htmlForm action="#">
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
                  required=""
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
                  required=""
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
                  required=""
                />
              </div>
              <div>
                <Selectinput arr={gender} id="gender" title="Gender" />
              </div>
              <div className="sm:col-span-2">
                <Input
                  label="paddress"
                  title="Address"
                  type="text"
                  name="paddress"
                  id="paddress"
                  place="Some where ..."
                  required=""
                />
              </div>
              <div>
                <Selectinput arr={region} id="region" title="Region" />
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    {date.map((arr) => (
                      <option value={arr.value}>{arr.label}</option>
                    ))}
                  </select>
                  <select
                    id="month"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    {month.map((arr) => (
                      <option value={arr.value}>{arr.label}</option>
                    ))}
                  </select>
                  <select
                    id="year"
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
                  required=""
                />
              </div>
              <div>
                <Selectinput
                  arr={idtype}
                  id="kidt"
                  title="Identification Card Type"
                />
              </div>
              <div className="sm:col-span-2">
                <Fileinput lable="licence" title="Identification Card" />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
            >
              Submit
            </button>
          </htmlForm>
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
