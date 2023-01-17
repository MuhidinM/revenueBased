import React from 'react'
import Input from './Input';
import Selectinput from './Selectinput';
const dropdown = [
    { label: "CBO", value: "1" },
    { label: "CBE", value: "2" },
    { label: "BOA", value: "2" },
  ];
  
function Maccounts(props) {
  return (
    <>
    <div className="">
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              {props.title}
            </h2>
            <htmlForm action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="sm:col-span-2">
                  <Input
                    label="accholder"
                    title="Account Holder"
                    type="text"
                    name="accholder"
                    id="accholder"
                    place="Hunda Temam Biniam"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <Input
                    label="accno"
                    title="Account Number"
                    type="text"
                    name="accno"
                    id="accno"
                    place="1022225648986"
                    required=""
                  />
                </div>
                <div>
                <Selectinput arr={dropdown} id="bank" title="Choose Bank" />
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
    </>
  )
}

export default Maccounts