import React from "react";
import Business from "./Business";
import UserInfo from "./UserInfo";

function Settings() {
  return (
    <>
      <section className="m-8 bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <htmlForm action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <UserInfo />
              <div className="sm:col-span-2 divider"></div>
              <Business />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
            >
              Submit
            </button>
          </htmlForm>
        </div>
      </section>
    </>
  );
}

export default Settings;
