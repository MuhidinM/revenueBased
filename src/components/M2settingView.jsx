import React from "react";

function M2settingView(props) {
  return (
    <>
      <h3 className="text-lg font-bold">{props.title}</h3>
      <div className="">
        <section className="bg-white dark:bg-gray-900">
          <div className="grid gap-4 pt-8 sm:grid-cols-4 sm:gap-6">
            <div className="divider sm:col-span-4">Presonal Information</div>
            <div className="w-full">
              {" "}
              <b>First Name: </b> <br /> Lelisa
            </div>
            <div className="w-full">
              {" "}
              <b>Middle Name:</b> <br />
              Abdusemed
            </div>
            <div className="w-full">
              <b>Last Name:</b> <br />
              Chera
            </div>
            <div className="w-full">
              <b>Gender:</b> <br />
              Male
            </div>
            <div className="sm:col-span-4">
              <b>Address:</b> <br />
              Some where ...
            </div>
            <div className="w-full">
              <b>Region:</b> <br />
              Oromia
            </div>
            <div className="w-full">
              <b>Birth date:</b> <br />
              28/5/1997
            </div>
            <div className="w-full">
              <b>Identification Card Number:</b> <br />
              TG873/12
            </div>
            <div className="w-full">
              <b>Identification Card Type:</b>
              <br /> Kebele ID
            </div>
            <div className="sm:col-span-4">
              <b>Identification Card:</b> <br />
              <img className="" src="../card.png" alt="ID" />
            </div>
            <div className="divider sm:col-span-4">Business Information</div>
            <div className="w-full">
              <b>Legal Name:</b> <br />
              Egate S.C
            </div>
            <div className="w-full">
              <b>Type of Incorporation:</b> <br />A
            </div>
            <div className="w-full">
              <b>Gender:</b> <br />
              Male
            </div>
            <div className="w-full">
              <b>Industry:</b> <br />A
            </div>
            <div className="w-full">
              <b>Category:</b> <br />A
            </div>
            <div className="w-full">
              <b>Staff size:</b> <br />
              Up to 5
            </div>
            <div className="w-full">
              <b>Monthly Transaction Amount:</b> <br />
              Below 10,000
            </div>
            <div className="w-full">
              <b>Tin Number:</b> <br />
              FM48496469
            </div>
            <div className="w-full">
              <b>Business Registration Number:</b> <br />
              FM48496469
            </div>
            <div className="sm:col-span-3">
              <b>Website Address:</b> <br />
              egate.com
            </div>
            <div className="sm:col-span-4">
              <b>Tin Number:</b> <br />
              <img className="" src="../card.png" alt="ID" />
            </div>
            <div className="sm:col-span-4">
              <b>Business Registration:</b> <br />
              <img className="" src="../card.png" alt="ID" />
            </div>
            <div className="sm:col-span-4">
              <b>Description Of Company:</b> <br />
              Your description here
            </div>
            <div className="divider sm:col-span-4">
              Business Address Information
            </div>
            <div className="w-full">
              <b>Region:</b> <br />
              Oromia
            </div>
            <div className="w-full">
              <b>City:</b> <br />
              Adama
            </div>
            <div className="w-full">
              <b>Kifle Ketema:</b> <br />
              Lugo
            </div>
            <div className="w-full">
              <b>Woreda:</b> <br />
              Adama
            </div>
            <div className="w-full">
              <b>Kebele:</b> <br />
              03
            </div>
            <div className="w-full">
              <b>House Number:</b> <br />
              G67-32
            </div>
            <div className="sm:col-span-2">
              <b>Friendly Location:</b> <br />
              Near Dembel City Mall
            </div>
            <div className="sm:col-span-4">
              <b>Proof of Address:</b> <br />
              <img className="" src="../card.png" alt="ID" />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-3.5 mt-4 text-sm font-medium text-center text-white rounded-lg sm:mt-6 bg-primary focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
          >
            Activate
          </button>
        </section>
      </div>
    </>
  );
}

export default M2settingView;
