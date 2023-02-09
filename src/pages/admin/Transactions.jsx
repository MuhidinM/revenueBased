// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetailAll } from "../../store/actions/adminFetchAllTransactions";
import { getTransactionByTransactionId } from "../../store/actions/adminFetchAllTransactions";
import Input from "../../components/Input";

function Transactions() {
  const [conditionalRendering, setconditionalRendering] = useState(true);
  const TransactionList = useSelector((state) => state.transactionDetailAll);
  const TransactionById = useSelector(
    (state) => state.transactionByTransactionId
  );
  // this.setState({data: data.conversations});
  console.log(TransactionList);
  const { loading, error, transactionDetailAll } = TransactionList;
  const { loadingt, errort, transactionByTransactionId } = TransactionById;

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("useEffect");
    dispatch(getTransactionDetailAll());
  }, [dispatch]);
  console.log(transactionDetailAll);

  const renderList = conditionalRendering ? (
    transactionDetailAll.map((item, index) => (
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
    ))
  ) : (
    <tr>
      <th>{transactionByTransactionId.transactionID}</th>
      <td>{transactionByTransactionId.clientId}</td>
      <td>{transactionByTransactionId.messageId}</td>
      <td>{transactionByTransactionId.TRANSACTIONTYPE}</td>
      <td>{transactionByTransactionId.DEBITACCTNO}</td>
      <td>{transactionByTransactionId.DEBITAMOUNT}</td>
      <td>{transactionByTransactionId.CREDITTHEIRREF}</td>
      <td>{transactionByTransactionId.CREDITACCTNO}</td>
      <td>{transactionByTransactionId.CREDITCURRENCY}</td>
      <td>{transactionByTransactionId.TRANSACTION_DATE}</td>
      <td>{transactionByTransactionId.STATUS}</td>
    </tr>
  );

  const searchByTransactionId = (e) => {
    e.preventDefault();
    console.log(typeof e.target.value);
    if (e.target.value.length >= 12) {
      dispatch(getTransactionByTransactionId(e.target.value));
    }
    setconditionalRendering(false);

    console.log("response" + transactionByTransactionId);
  };

  // if (transactionDetail) {
  return (
    <>
      <div className="grid gap-4 my-4 mt-4 md:grid-cols-12 justify-self-auto">
        <div className="col-span-9"></div>
        <div className="col-span-3">
          <Input
            label="search"
            title="Search"
            type="text"
            name="search"
            // value={props.values.lgname}
            // handleChange={props.handleChange}
            // onChange={props.handleChange}
            handleChange={searchByTransactionId}
            place="Search by transactionid"
            required=""
          />
        </div>
      </div>
      <div className="w-5/6 m-8">
        <div className="mt-4 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>TransactionID</th>
                <th>ClientId</th>
                <th>MessageId</th>
                <th>TRANSACTION TYPE</th>
                <th>DEBIT ACCTNO</th>
                <th>DEBIT AMOUNT</th>
                <th>CREDITTHEIRREF</th>
                <th>CREDIT ACCTNO</th>
                <th>CURRENCY</th>
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
