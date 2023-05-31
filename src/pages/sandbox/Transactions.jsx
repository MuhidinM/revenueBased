// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetail } from "../../store/actions/getTransactionAction";

function Transactions() {
  const TransactionList = useSelector((state) => state.transactionDetail);
  // this.setState({data: data.conversations});
  // console.log(TransactionList);
  const { loading, error, transactionDetail } = TransactionList;

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("useEffect");
    dispatch(getTransactionDetail());
  }, [dispatch]);
  // console.log(transactionDetail);

  const renderList = transactionDetail.map((item, index) => (
    <tr>
      <th>{item.paymentId}</th>
      <td>{item.messageId}</td>
      <td>{item.debitAmount}</td>
      <td>{item.creditAccount}</td>
      <td>{item.debitAccount}</td>
      <td>{item.debitCurrency}</td>
    </tr>
  ));

  // if (transactionDetail) {
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
            <tbody>{renderList}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transactions;
