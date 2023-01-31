import React from "react";

const Mobilepay = () => {
  return (
    <>
      <div>
        <input
          type="text"
          name="mobile"
          id="mobile"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0987654321"
          required=""
        />
      </div>
    </>
  );
};

export default Mobilepay;
