import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams, useSearchParams } from "react-router-dom";
import PaymentServices from "../services/payment.service";
function PayPal() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [data1, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const callBackUrl = searchParams.get("callBackUrl");
  useEffect(() => {
    if (success) {
      alert("Payment successfull");
      window.opener.postMessage("Success", callBackUrl);
      window.opener.focus();
      // window.opener.postMessage("Success", callBackUrl);
      // window.opener.focus();
      // window.close();
    }
  }, [success]);
  console.log(data1);

  const responseData = {};
  // if (data1 !== undefined) {
  //   responseData.orderID = data1.id;
  //   responseData.status = data1.status;
  //   responseData.amountValue = data1.purchase_units[0].amount.value;
  //   responseData.currency_code = data1.parchase_units[0].amount.currency_code;
  //   responseData.payeeEmail = data1.parchase_units[0].payee.email_address;
  //   responseData.description = data1.parchase_units[0].description;
  //   responseData.transactionId = data1.parchase_units[0].description;
  //   responseData.payeeMerchant_id =
  //     data1.parchase_units[0].payments.captures[0].id;
  //   responseData.payeeMerchant_id =
  //     data1.parchase_units[0].payments.captures[0].id;
  //   responseData.create_time = data1.create_time;
  //   responseData.update_time = data1.update_time;
  //   responseData.payerGiven_name = data1.payer.name.given_name;
  //   responseData.payerSurname = data1.payer.name.surname;
  //   responseData.payerEmailAddress = data1.payer.email_address;
  //   responseData.payer_id = data1.payer.payer_id;
  //   responseData.payerCountry_code = data1.payer.address.country_code;
  //   responseData.linksHref = data1.parchase_units[0].payments.links[0].href;
  // }

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],

        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        console.log("momo" + orderID);
        return orderID;
      });
  };
  // console.log("The order payment" + createOrder);
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log("Details: " + JSON.stringify(details));
      console.log(
        "Purchase Units" + JSON.stringify(details.purchase_units[0].payments)
      );
      const orderId = details.id;
      const status = details.status;

      const amountValue =
        details.purchase_units[0].payments.captures[0].amount.value;
      const currency_code =
        details.purchase_units[0].payments.captures[0].amount.currency_code;
      const payeeEmail = details.purchase_units[0].payee.email_address;
      const payeeMerchant_id = details.purchase_units[0].payee.merchant_id;
      const description = details.purchase_units[0].description;
      const transactionId = details.purchase_units[0].payments.captures[0].id;
      const create_time = details.create_time;
      const update_time = details.update_time;
      const payerGiven_name = details.payer.name.given_name;
      const payerSurname = details.payer.name.surname;
      const payerEmailAddress = details.payer.email_address;
      const payer_id = details.payer.payer_id;
      const payerCountry_code = details.payer.address.country_code;
      const linksHref = details.links[0].href;
      PaymentServices.logPayPalResponse(
        orderId,
        status,
        amountValue,
        currency_code,
        payeeEmail,
        payeeMerchant_id,
        description,
        transactionId,
        create_time,
        update_time,
        payerGiven_name,
        payerSurname,
        payerEmailAddress,
        payer_id,
        payerCountry_code,
        linksHref
      );

      setSuccess(true);

      setData(details);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AVMxeRFDhF10jeyuiTloAKenMlJyFj1NPYa74OKz4gFCfhdQyTTwegKKP_LNkV6ds3rPR_Oxll9gy8fh",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}
export default PayPal;
