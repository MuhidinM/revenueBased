import React from "react";

const Bankpay = () => {
  return (
    <>
      <div>
        <input
          type="text"
          name="account"
          id="account"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Bank Account"
          required=""
        />
      </div>
    </>
  );
};

export default Bankpay;
