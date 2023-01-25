import React from "react";

function M2settingView(props) {
  const m2SettingData = props.modal_data;
  console.log(m2SettingData && m2SettingData.legalName);
  if (m2SettingData) {
    return (
      <>
        <h3 className="text-lg font-bold">{props.title}</h3>
        <div className="">
          <section className="bg-white dark:bg-gray-900">
            <div className="grid gap-4 pt-8 sm:grid-cols-4 sm:gap-6">
              <div className="divider sm:col-span-4">Business Information</div>
              <div className="w-full">
                <b>Legal Name:</b> <br />
                {m2SettingData.legalName}
              </div>
              <div className="w-full">
                <b>Type of Incorporation:</b> <br />
                {m2SettingData.incorporationType}
              </div>

              <div className="w-full">
                <b>Industry:</b> <br />
                {m2SettingData.industry}
              </div>
              <div className="w-full">
                <b>Category:</b> <br />
                {m2SettingData.category}
              </div>
              <div className="w-full">
                <b>Staff size:</b> <br />
                {m2SettingData.staffSize}
              </div>
              <div className="w-full">
                <b>Monthly Transaction Amount:</b> <br />
                {m2SettingData.monthlyTransacionAmount}
              </div>
              <div className="w-full">
                <b>Tin Number:</b> <br />
                {m2SettingData.tinNumber}
              </div>
              <div className="w-full">
                <b>Business Registration Number:</b> <br />
                {m2SettingData.bussinessRegistrationNumber}
              </div>
              <div className="sm:col-span-3">
                <b>Website Address:</b> <br />
                {m2SettingData.websiteAddress}
              </div>

              <div className="sm:col-span-4">
                <b>Business Registration:</b> <br />
                <img className="" src="../card.png" alt="ID" />
              </div>
              <div className="sm:col-span-4">
                <b>Description Of Company:</b> <br />
                {m2SettingData.companyDescription}
              </div>
              <div className="divider sm:col-span-4">
                <h1>Comapany Address</h1>
              </div>
              <div className="w-full">
                <b>Region:</b> <br />
                {m2SettingData.bussinessAddresses[0].region}
              </div>
              <div className="w-full">
                <b>City:</b> <br />
                {m2SettingData.bussinessAddresses[0].city}
              </div>
              <div className="w-full">
                <b>Kifle Ketema:</b> <br />
                {m2SettingData.bussinessAddresses[0].kifleKetema}
              </div>
              <div className="w-full">
                <b>Woreda:</b> <br />
                {m2SettingData.bussinessAddresses[0].woreda}
              </div>
              <div className="w-full">
                <b>Kebele:</b> <br />
                {m2SettingData.bussinessAddresses[0].kebele}
              </div>
              <div className="w-full">
                <b>House Number:</b> <br />
                {m2SettingData.bussinessAddresses[0].housNumber}
              </div>
              <div className="sm:col-span-2">
                <b>Friendly Location:</b> <br />
                {m2SettingData.bussinessAddresses[0].friendlyLocation}
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
}

export default M2settingView;
