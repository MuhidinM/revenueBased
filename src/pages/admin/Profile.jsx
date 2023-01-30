import React from "react";

function Profile() {
  return (
    <>
      <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        How much do you expect to use each month?
      </h3>
      <ul class="grid w-full gap-6 md:grid-cols-6">
        <li>
          <input
            type="radio"
            id="r1"
            name="hosting"
            value="r1"
            class="hidden peer"
            required
          />
          <label
            for="r1"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="w-16"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
              alt=""
            />
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="r2"
            name="hosting"
            value="r2"
            class="hidden peer"
            required
          />
          <label
            for="r2"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="w-16"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
              alt=""
            />
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="r3"
            name="hosting"
            value="r3"
            class="hidden peer"
            required
          />
          <label
            for="r3"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="w-16"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
              alt=""
            />
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="r4"
            name="hosting"
            value="r4"
            class="hidden peer"
            required
          />
          <label
            for="r4"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="w-16"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
              alt=""
            />
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="r5"
            name="hosting"
            value="r5"
            class="hidden peer"
            required
          />
          <label
            for="r5"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="w-16"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
              alt=""
            />
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="r6"
            name="hosting"
            value="r6"
            class="hidden peer"
          />
          <label
            for="r6"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">500</div>
            </div>
          </label>
        </li>
      </ul>
    </>
  );
}

export default Profile;
