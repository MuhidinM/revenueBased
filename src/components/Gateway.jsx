import React from "react";
import { Link } from "react-router-dom";
const month = [];
for (let i = 1; i < 13; i++) {
  month.push({ label: i, value: i });
}
const year = [];
const thisyear = new Date().getFullYear();
const endyear = thisyear + 5;
for (let i = thisyear; i < endyear; i++) {
  year.push({ label: i, value: i });
}

function Gateway() {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img
                className="w-full h-auto"
                src="https://d6vdma9166ldh.cloudfront.net/media/images/1540976335764-pasted%20image%200.png"
                alt="front credit card"
              />
              <div className="flex flex-col items-center justify-center">
                <ul className="flex">
                  <li className="mx-2">
                    <img
                      className="w-16"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                      alt=""
                    />
                  </li>
                  <li className="ml-5">
                    <img
                      className="w-9"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Card payment
              </h1>
              <htmlForm className="space-y-4 md:space-y-6" action="">
                <div>
                  <input
                    type="text"
                    name="cardholder"
                    id="cardNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Card Holder"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    className="bg-gray-50 border
            border-gray-300 text-gray-900 sm:text-sm rounded-lg
            focus:ring-primary focus:border-primary block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex flex-col my-3">
                  <div className="mb-2">
                    <label htmlFor="" className="text-gray-700">
                      Expired
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <select
                      name=""
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      x-model="expired.month"
                    >
                      {month.map((arr) => (
                        <option value={arr.value}>{arr.label}</option>
                      ))}
                    </select>
                    <select
                      name=""
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      x-model="expired.year"
                    >
                      {year.map((arr) => (
                        <option value={arr.value}>{arr.label}</option>
                      ))}
                    </select>
                    <div className="w-full col-span-2">
                      <h1 className="mt-2 text-lg font-bold text-center">
                        $100
                      </h1>
                    </div>
                  </div>
                </div>
                <Link
                  to={"/otp"}
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                >
                  Pay now
                </Link>
              </htmlForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gateway;
