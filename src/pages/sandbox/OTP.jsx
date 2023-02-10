import React, { useState } from "react";
import { Link } from "react-router-dom";

function OTP() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <>
      <section className="text-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              OTP Verification
            </h1>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Your One Time Password or OTP has been sent to your mobile phone.
              Please retrive it and enter in the space below.
              <b> Note:</b> this token can be used only once and Would expire in
              5 minutes.
            </p>
            <htmlForm
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
            >
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  OTP Code (use : 0000)
                </label>
                <div className="flex flex-row items-center justify-between w-full max-w-xs py-4 mx-auto">
                  {otp.map((data, index) => {
                    return (
                      <div className="w-16 h-16">
                        <input
                          type="text"
                          name="otp"
                          id="otp"
                          className="bg-gray-50 border text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required=""
                          maxLength="1"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      </div>
                    );
                  })}
                  {/* {otp.join("")} use this to send the data */}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Confirm
              </button>
            </htmlForm>
          </div>
        </div>
      </section>
    </>
  );
}

export default OTP;
