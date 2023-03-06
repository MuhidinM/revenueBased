import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams, useSearchParams } from "react-router-dom";
import PaymentServices from "../services/payment.service";
function PayPal(props) {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [responseData, setresponseData] = useState({});
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [data1, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const callBackUrl = searchParams.get("callBackUrl");
  console.log(callBackUrl);
  useEffect(() => {
    if (success) {
      window.opener.postMessage(
        JSON.stringify(responseData),
        "http://localhost:3001/"
      );
      window.opener.focus();
      window.close();
      // window.opener.postMessage("Success", callBackUrl);
      // window.opener.focus();
      // window.close();
    }
  }, [success]);
  console.log(data1);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: props.amount,
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
      const response_to_Client = {
        orderId: orderId,
        status: status,
        amount: amountValue,
        currencyCode: currency_code,
        payeeEmail: payeeEmail,
        payeeMerchant_id: payeeMerchant_id,
        description: description,
        transactionId: transactionId,
        create_time: create_time,
        payerGiven_name: payerGiven_name,
        payerSurname: payerSurname,
        payerEmailAddress: payerEmailAddress,
        payer_id: payer_id,
        payerCountry_code: payerCountry_code,
        linksHref: linksHref,
      };
      setresponseData(response_to_Client);
      console.log("Response to Jiggi", response_to_Client);

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
