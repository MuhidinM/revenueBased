import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Tablesite from "../../components/Tablesite";

// const fetch_url = "http://localhost:8081/payment/v1/fetchAllTransaction";
// const FetchPayment = () => {
//   const fetchTransactions = () => {
//     axios.get(fetch_url).then((res) => {
//       console.log("data res" + res.data);
//     });
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);
//   return <h1>hello txn fetch</h1>;
// };

function Sites() {
  return (
    <>
      <Input
        label="transactions"
        title="Transaction Search"
        type="text"
        name="transactions"
        // value={props.values.lgname}
        // handleChange={props.handleChange}
        // onChange={props.handleChange}

        place="Search by transactionId"
        required=""
      />
      <div className="w-5/6 m-8">
        <div className="mt-4 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>paymentId</th>
                <th>messageId</th>
                <th>Debit Amount</th>
                <th>CreditAccount</th>
                <th>Debit Account</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Sites;
