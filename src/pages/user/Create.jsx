import React from "react";

function Create() {
  return (
    <>
      {/* Put this part behtmlFore </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="relative w-11/12 max-w-5xl modal-box">
          <label
            htmlFor="my-modal-4"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Generate Api key</h3>
          <div className="">
            <section className="bg-white dark:bg-gray-900">
              <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                {/* <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white"></h2> */}
                <htmlForm action="#">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Choose Bank
                      </label>
                      <select
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      >
                        <option selected="">Electronics</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        value="Apple"
                        placeholder="Product brand"
                        required=""
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="8"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        placeholder="Write a product description here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                    >
                      Generate
                    </button>
                  </div>
                </htmlForm>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
