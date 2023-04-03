import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Parameters",
    selector: (row) => row.key,
    // style: { backgroundColor: 'gray' },
  },
  {
    name: "Description",
    selector: (row) => row.des,
    wrap: true,
    grow: 10,
  },
  {
    name: "Required",
    selector: (row) => row.mandatory,
  },
];

const data = [
  {
    key: "API key",
    des: " An API key is a unique identifier used to authenticate and authorize access to an application programming interface (API). Once you have successfully registered your bank account, an API key will be provided to you. You will be able to change the API key anytime",
    mandatory: "Mandatory",
  },
  {
    key: "Client ID",
    des: "A Client ID is a unique identifier assigned to a client application or device by a server. Once you have successfully registered your account, a Client Id will be provided to you.",
    mandatory: "Mandatory",
  },
  {
    key: "Secret key",
    des: "A secret key, also known as a client secret, is a confidential key used in secure communication between a client application and a server,. Once you have successfully filled KYC and authenticated your account, a Secret key will be provided to you.",
    mandatory: "Mandatory",
  },
  {
    key: "Amount",
    des: "Amount of money refers to the quantity or value of a monetary unit such as dollars, euros, or yen, which may be exchanged or used to purchase goods and services.This will be provided from a client application",
    mandatory: "Mandatory",
  },
  {
    key: "Currency",
    des: "USD or ETB are both valid options for currency.",
    mandatory: "Mandatory",
  },
  {
    key: "Order Id",
    des: "An Order ID is a unique identifier assigned to a specific order or transaction, which is used to track and manage the status of the order throughout the fulfillment process.",
    mandatory: "Mandatory",
  },
  {
    key: "Callback URL",
    des: "A callback URL is a web address that a server uses to send a response to a client application after completing a request, typically used in webhooks to facilitate communication between different systems.",
    mandatory: "Mandatory",
  },
  {
    key: "Device Id",
    des: "A device ID is a unique identifier assigned to a physical device, which is used to distinguish it from other devices and enable access to specific services or applications.",
    mandatory: "Optional",
  },
];
function ApiDocs() {
  return (
    <>
      <div className="md:mx-36">
        <section>
          <div className="px-4 pt-24 mx-auto max-w-7xl md:px-12 lg:px-24">
            <div className="flex flex-col w-full mb-12 text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl dark:text-white">
                Get Started and <br className="hidden lg:block" />
                Process Payments!
              </h1>
              <h1 className="text-lg mt-12 text-gray-400">
                Welcome to the epay API documentation! Our API enables you to
                integrate payment processing into your website or application,
                providing your customers with a secure and easy-to-use payment
                experience. With support for a variety of payment methods,
                currencies, and languages, our API offers customizable payment
                forms and flexible integration options. Our documentation
                provides detailed information on endpoints, parameters, and
                responses, along with code samples in multiple programming
                languages.
              </h1>
              <div className="mt-12 text-xl text-gray-800">
                <h1>
                  To assist you, here's an example code snippet you could send
                  us.
                </h1>
              </div>
            </div>
            <div className="m-4 text-left">
              <div className="mb-8">
                <DataTable
                  columns={columns}
                  data={data}
                  highlightOnHover
                  responsive
                />
              </div>
              <div className="mockup-code text-success">
                <pre data-prefix="1">
                  <code>
                    <span className=" text-warning">const</span> sk =
                    "ccf2313b-8d29-42fb-9fb6-d9cf65c3e4e4"
                    <span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="2">
                  <code>
                    <span className="text-warning">const</span> apikey =
                    "11cf1af5-b33a-42e7-85e8-d39e6d4c9a8e"
                    <span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="3">
                  <code>
                    <span className="text-warning">const</span> mid =
                    "2fec3ae8-b7d8-4c44-8a43-7e37617741a5"
                    <span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="4">
                  <code>
                    <span className="text-warning">const</span> amount = 59.99
                    <span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="5">
                  <code>
                    <span className="text-warning">const</span> currency = "USD"
                    <span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="6">
                  <code>
                    <span className="text-warning">const</span> orderId =
                    "id123456"<span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="7">
                  <code>
                    <span className="text-warning">const</span> callBackUrl =
                    "http://192.168.231.76:3000/"
                    <span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="7">
                  <code>
                    <span className="text-warning">const</span> openPopUp ={" "}
                    <span className="text-warning">(</span>
                    <span className="text-warning">)</span> =&gt;{" "}
                    <span className="text-error">&#123;</span>
                  </code>
                </pre>
                <pre data-prefix="8">
                  <code>
                    <span className="text-warning">const</span> URL
                    =`http://localhost:3000/gateway/&clientId=$
                    <span className="text-error">
                      <span className="text-error">&#123;</span>
                    </span>
                    mid
                    <span className="text-error">
                      <span className="text-error">&#125;</span>
                    </span>
                    &secretKey=$<span className="text-error">&#123;</span>sk
                    <span className="text-error">
                      <span className="text-error">&#125;</span>
                    </span>
                    &key=$<span className="text-error">&#123;</span>apikey
                    <span className="text-error">
                      <span className="text-error">&#125;</span>
                    </span>
                    &callBackUrl=
                  </code>
                </pre>
                <pre data-prefix="9">
                  <code>
                    $<span className="text-error">&#123;</span>callBackUrl
                    <span className="text-error">
                      <span className="text-error">&#125;</span>
                    </span>
                    &currency=$<span className="text-error">&#123;</span>
                    currency
                    <span className="text-error">
                      <span className="text-error">&#125;</span>
                    </span>
                    &orderId=$<span className="text-error">&#123;</span>orderId
                    <span className="text-error">
                      <span className="text-error">&#125;</span>
                    </span>
                    &amount=$<span className="text-error">&#123;</span>amount
                    <span className="text-error">
                      <span className="text-error">&#125;</span>
                    </span>
                    `<span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="10">
                  <code>
                    <span className="text-warning">const</span> myWindow =
                    window.open<span className="text-warning">(</span> URL, "",
                    "width=500,height=700,left=500,location=0,resizable=yes,top=100
                    " <span className="text-warning">)</span>
                    <span className="text-warning">;</span>
                  </code>
                </pre>
                <pre data-prefix="11">
                  <code>
                    <span className="text-error">&#125;</span>
                    <span className="text-warning">;</span>
                  </code>
                </pre>
              </div>
            </div>
            <div className="mt-12 text-xl text-center">
              <h1>You may receive a JSON sample in the following format.</h1>
            </div>

            <div className="m-4 text-left">
              <div className="mockup-code text-success">
                <pre data-prefix="1">
                  <code>
                    <span className="text-error">&#123;</span>
                  </code>
                </pre>
                <pre data-prefix="2">
                  <code> "clientOrderId"<span className="text-warning">:</span> "id123456",</code>
                </pre>
                <pre data-prefix="3">
                  <code> "paypalOrderId"<span className="text-warning">:</span> "29R69370YX753645R",</code>
                </pre>
                <pre data-prefix="4">
                  <code> "status"<span className="text-warning">:</span> "COMPLETED",</code>
                </pre>
                <pre data-prefix="5">
                  <code> "amount"<span className="text-warning">:</span> "59.99",</code>
                </pre>
                <pre data-prefix="6">
                  <code> "currencyCode"<span className="text-warning">:</span> "USD",</code>
                </pre>
                <pre data-prefix="7">
                  <code>
                    {" "}
                    "payeeEmail"<span className="text-warning">:</span> "sb-lfhliu@business.example.com",
                  </code>
                </pre>
                <pre data-prefix="8">
                  <code> "payeeMerchant_id"<span className="text-warning">:</span> "DFHK5ABTCGGB2",</code>
                </pre>
                <pre data-prefix="9">
                  <code> "description"<span className="text-warning">:</span> "Sunflower",</code>
                </pre>
                <pre data-prefix="10">
                  <code> "transactionId"<span className="text-warning">:</span> "31M012574S2856233",</code>
                </pre>
                <pre data-prefix="11">
                  <code> "create_time"<span className="text-warning">:</span> "2023-03-30T08:25:26Z",</code>
                </pre>
                <pre data-prefix="12">
                  <code> "payerGiven_name"<span className="text-warning">:</span> "John",</code>
                </pre>
                <pre data-prefix="13">
                  <code> "payerSurname"<span className="text-warning">:</span> "Doe",</code>
                </pre>
                <pre data-prefix="14">
                  <code>
                    {" "}
                    "payerEmailAddress"<span className="text-warning">:</span>
                    "sb-urhuir@personal.example.com",
                  </code>
                </pre>
                <pre data-prefix="15">
                  <code> "payer_id"<span className="text-warning">:</span> "4F45BG9WUPUSL",</code>
                </pre>
                <pre data-prefix="16">
                  <code> "payerCountry_code"<span className="text-warning">:</span> "US",</code>
                </pre>
                <pre data-prefix="17">
                  <code>
                    {" "}
                    "linksHref"<span className="text-warning">:</span>
                    "https://api.sandbox.paypal.com/v2/checkout/orders/29R69370YX753645R"
                  </code>
                </pre>
                <pre data-prefix="18">
                  <code>
                    <span className="text-error">&#125;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ApiDocs;
