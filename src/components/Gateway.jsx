import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bankpay from "./Bankpay";
import Cardpay from "./Cardpay";
import Mobilepay from "./Mobilepay";
import PayPal from "./PayPal";
import Stripe from "./Stripe";
import { useParams, useSearchParams } from "react-router-dom";
function Gateway() {
  const [select, setSelect] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const currency = searchParams.get("currency");
  const amount = searchParams.get("amount");
  const orderID = searchParams.get("orderId");

  useEffect(() => {
    if (currency === "ETB") {
      setSelect("CBOA");
    } else {
      setSelect("payPal");
    }
  }, []);
  console.log("currency is:", currency);

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img
                className="w-full h-auto"
                src="../Cooperative_Bank_of_Oromia.png"
                alt="front credit card"
              />
              <div className="grid grid-cols-2">
                <h1 className="leading-tight mt-2 text-lg tracking-tight text-gray-900 dark:text-white">
                  Choose payment
                </h1>
                {/* <div className="w-full col-span-2"> */}
                <h1 className="mt-2 text-lg font-bold text-center dark:text-white">
                  {amount} {currency}
                </h1>
                {/* </div> */}
              </div>

              <div className="">
                <select
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                  className="my-6 select bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {currency === "ETB" ? (
                    <option value={"CBOA"} selected>
                      Coopass
                    </option>
                  ) : (
                    ""
                  )}
                  {currency === "ETB" ? (
                    <option value={"CBOC"}>
                      Cooperative bank of Oromia Card
                    </option>
                  ) : (
                    ""
                  )}
                  {/* {currency === "ETB" ? (
                    <option value={"EB"}>E-birr</option>
                  ) : (
                    ""
                  )} */}
                  {currency === "USD" && (
                    <>
                      <option value={"payPal"} selected>
                        payPal
                      </option>
                      {/* <option value={"payPal"}>payPal</option> */}
                    </>
                  )}
                  {currency === "USD" ? (
                    <option value={"stripe"}>
                      Stripe
                    </option>
                  ) : (
                    ""
                  )}
                  {/* <option value={"payPal"}>payPal</option> */}
                </select>
              </div>

              <htmlForm className="space-y-4 md:space-y-6" action="">
                {currency === "ETB" ? select === "CBOA" && <Bankpay /> : ""}
                {currency === "ETB"
                  ? select === "CBOC" && <Cardpay amount={amount} />
                  : ""}
                {currency === "ETB" ? select === "EB" && <Mobilepay /> : ""}
                {currency === "USD" && select === "payPal" && (
                  <PayPal amount={amount} orderId={orderID} />
                )}
                {currency === "USD" ? select === "stripe" && <Stripe /> : ""}
                {/* {select === "CBOC" && <Cardpay />}
                {select === "EB" && <Mobilepay />}
                {select === "payPal" && <PayPal />} */}
                {/* {select === "payPal" && <PayPal />} */}
              </htmlForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gateway;
