import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetail } from "../../store/actions/getTransactionAction";

function Transactions() {
  const TransactionList = useSelector((state) => state.transactionDetail);
  console.log(TransactionList);
  const { loading, error, transactionDetail } = TransactionList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionDetail());
  }, [dispatch]);
  console.log(transactionDetail);

  const renderList = transactionDetail.map((item, index) => (
    <tr>
      <th>{item.paymentId}</th>
      <td>{item.messageId}</td>
      <td>{item.debitAmount}</td>
      <td>{item.creditAccount}</td>
      <td>{item.debitAccount}</td>
      <td>{item.debitAccount}</td>
    </tr>
  ));

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
              {renderList}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transactions;
