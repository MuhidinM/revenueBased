import React, { useState } from "react";
import QRCode from "react-qr-code";

const Generateqr = () => {
    const sk = "&secretKey=95f838bd-2c7d-40f7-ab0a-121814b81871";
    const mid = "?clientId=5b5433ad-21df-46f5-a873-a540a0373bc1";
  const url = "http://192.168.0.217:3000/gateway/" + sk + mid;
  const [text, setText] = useState(url);
  const [amount, setamount] = useState(0);
  function value(e) {
    setamount(e.target.value);
    setText(url + e.target.value);
  }
  return (
    <>
      <div className="w-5/6 m-auto mt-10 md:mt-48">
        <div className="text-center text-4xl my-12 text-primary">
          You are paying {amount} birr
        </div>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 300,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            bgColor={"#F1F5F9"}
            fgColor={"#01ADED"}
            level={"L"}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={text}
            viewBox={`0 0 256 256`}
          />
          <div className="mt-4">
            <label
              //   htmlFor={props.label}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Amount
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              onChange={value}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Generateqr;
