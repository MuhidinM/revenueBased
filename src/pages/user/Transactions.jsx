// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetailAll } from "../../store/actions/adminFetchAllTransactions";

function Transactions() {
  const TransactionList = useSelector((state) => state.getTransactionDetailAll);
  // this.setState({data: data.conversations});
  console.log(TransactionList);
  const { loading, error, transactionDetailAll } = TransactionList;

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("useEffect");
    dispatch(getTransactionDetailAll());
  }, [dispatch]);
  console.log(transactionDetailAll);

  const renderList = transactionDetailAll.map((item, index) => (
    <tr>
      <th>{item.transactionID}</th>
      <td>{item.clientId}</td>
      <td>{item.messageId}</td>
      <td>{item.TRANSACTIONTYPE}</td>
      <td>{item.DEBITACCTNO}</td>
      <td>{item.DEBITAMOUNT}</td>
      <td>{item.CREDITTHEIRREF}</td>
      <td>{item.CREDITACCTNO}</td>
      <td>{item.CREDITCURRENCY}</td>
      <td>{item.TRANSACTION_DATE}</td>
      <td>{item.STATUS}</td>
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
                <th>transactionID</th>
                <th>clientId</th>
                <th>messageId</th>
                <th>TRANSACTIONTYPE</th>
                <th>DEBITACCTNO</th>
                <th>DEBITAMOUNT</th>
                <th>CREDITTHEIRREF</th>
                <th>CREDITACCTNO</th>
                <th>CREDITCURRENCY</th>
                <th>TRANSACTION_DATE</th>
                <th>STATUS</th>
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
