import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bankpay from "./Bankpay";
import Cardpay from "./Cardpay";
import Mobilepay from "./Mobilepay";

function Gateway() {
  const [select, setSelect] = useState("CBOC");
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img
                className="w-full h-auto"
                src="../card.png"
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
              <h1 className="leading-tight tracking-tight text-gray-900 dark:text-white">
                choose payment
              </h1>
              <div className="">
                <select
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                  className="my-6 select bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={"CBOC"} selected>
                    Cooperative bank of Oromia Card
                  </option>
                  <option value={"CBOA"}>
                    Cooperative bank of Oromia Account
                  </option>

                  <option value={"EB"}>E-birr</option>
                  <option value={"TB"}>Tele Birr</option>
                  <option value={"BOAC"}>Bank of Abisinia Card</option>
                  <option value={"BOAA"}>Bank of Abisinia Account</option>
                </select>
              </div>

              <htmlForm className="space-y-4 md:space-y-6" action="">
                {select === "CBOA" && <Bankpay />}
                {select === "CBOC" && <Cardpay />}
                {select === "EB" && <Mobilepay />}
                {select === "BOAA" && <Bankpay />}
                {select === "BOAC" && <Cardpay />}
                {select === "TB" && <Mobilepay />}
              </htmlForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gateway;
