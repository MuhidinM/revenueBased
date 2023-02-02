import React from "react";
import { Link } from "react-router-dom";

//here to add the logic

function Transactions() {
  return (
    <>
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
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>MessageId</td>
                <td>100</td>
                <td>1022200021557</td>
                <td>1022200021557</td>
                <td>ETB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transactions;
