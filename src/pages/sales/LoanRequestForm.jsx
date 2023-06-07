import React from "react";
import Input from "../../components/Input";
// import Selectinput from "../../components/Selectinput";
import Pdfinput from "./Pdfinput";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  generateLoanDetailPdf,
  // getLoanRequestDetail,
} from "../../store/actions/getLoanConfigAction";

function LoanRequestForm() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  // console.log(userData);
  const { userID } = userData;

  // useEffect(() => {
  //   if (userID) {
  //     dispatch(getLoanRequestDetail(userID));
  //   }
  // }, [userID, dispatch]);

  // const loanData = useSelector((state) => state.loanConfigInfo);
  // // console.log(userData);
  // const { loanPdf } = loanData;
  const [loanPdf, setLoanPdf] = useState("");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = loanPdf;
    link.target = "_blank";
    link.download = "filename.pdf"; // Set the desired file name
    link.click();
  };

  const location = useLocation();
  const national_id = new URLSearchParams(location.search).get("national_id");
  const first_name = new URLSearchParams(location.search).get("first_name");
  const middle_name = new URLSearchParams(location.search).get("middle_name");
  const last_name = new URLSearchParams(location.search).get("last_name");
  const customer_account = new URLSearchParams(location.search).get(
    "customer_account"
  );
  const customer_phone_number = new URLSearchParams(location.search).get(
    "customer_phone_number"
  );
  const item_id = new URLSearchParams(location.search).get("item_id");
  const loan_amount = new URLSearchParams(location.search).get("loan_amount");
  const repayment_term = new URLSearchParams(location.search).get(
    "repayment_term"
  );
  const interest_rate = new URLSearchParams(location.search).get(
    "interest_rate"
  );
  const loan_req_id = new URLSearchParams(location.search).get("loan_req_id");

  const [data, setData] = useState({
    loan_req_id: loan_req_id ? loan_req_id : "",
    national_id: national_id ? national_id : "",
    first_name: first_name ? first_name : "",
    middle_name: middle_name ? middle_name : "",
    last_name: last_name ? last_name : "",
    customer_account: customer_account ? customer_account : "",
    customer_phone_number: customer_phone_number ? customer_phone_number : "",
    item_id: item_id ? item_id : "",
    loan_amount: loan_amount ? loan_amount : "",
    duration: repayment_term ? repayment_term : "",
    interest_rate: interest_rate ? interest_rate : "",
    loan_purpose: "",
    agreement_form: "",
  });
  console.log("DFDFDFD", loanPdf);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="bg-white p-6">
      <div className="grid gap-4 grid-cols-6 sm:gap-6 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
          Loan Request Form
        </h2>
        <div className="w-full col-span-4">
          <div className="flex justify-end whitespace-nowrap items-center">
            <span className="mr-5 flex">Download Pdf from here :-</span>
            {loanPdf?.length > 0 ? (
              <span
                onClick={handleDownload}
                className="text-cyan-500 cursor-pointer"
              >
                Download PDF
              </span>
            ) : (
              <span
                className="text-cyan-500 cursor-pointer"
                onClick={(e) =>
                  dispatch(
                    generateLoanDetailPdf(
                      userID,
                      data.loan_req_id,
                      data.first_name,
                      data.last_name,
                      data.interest_rate,
                      data.duration,
                      10000,
                      setLoanPdf
                    )
                  )
                }
              >
                Generate PDF
              </span>
            )}
          </div>
        </div>

        <div className="divider col-span-6 text-cyan-500 text-lg">
          Customer Information
        </div>

        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="national_id"
            title="National Id"
            type="text"
            value={data.national_id}
            onchange={() => handleChange}
            name="national_id"
            place="Customer National Id"
            required=""
          />
        </div>

        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="first_name"
            title="First Name"
            type="text"
            value={data.first_name}
            name="first_name"
            place="Customer First Name"
            required=""
          />
        </div>
        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="middle_name"
            title="Middle Name"
            type="text"
            value={data.middle_name}
            name="middle_name"
            place="Customer First Name"
            required=""
          />
        </div>
        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="last_name"
            title="Last Name"
            type="text"
            value={data.last_name}
            name="last_name"
            place="Customer Last Name"
            required=""
          />
        </div>

        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="customer_account"
            title="Customer Account Number"
            type="text"
            value={data.customer_account}
            name="customer_account"
            place="Account Number"
            required=""
          />
        </div>
        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="customer_phone_number"
            title="Phone Number"
            type="text"
            value={data.customer_phone_number}
            name="customer_phone_number"
            place="Customer Mobile Number"
            required=""
          />
        </div>
        <div className="divider col-span-6 text-cyan-500 text-lg">
          Other Information
        </div>

        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="loan_amount"
            title="Loan Amount"
            type="text"
            value={data.loan_amount}
            name="loan_amount"
            place="Loan Amount"
            required=""
          />
        </div>
        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="loan_purpose"
            title="Loan Purpose"
            type="text"
            value={data.loan_purpose}
            name="loan_purpose"
            place="Loan Purpose"
            required=""
          />
        </div>
        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="duration"
            title="Repayment Term"
            type="text"
            value={data.duration}
            name="duration"
            place="Repayment Term"
            required=""
          />
        </div>
        <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="interest_rate"
            title="Interest Rate"
            type="text"
            value={data.interest_rate}
            name="interest_rate"
            place="Interest Rate"
            required=""
          />
        </div>
        <div className="col-span-2">
          <Pdfinput
            lable="loan_request"
            title="Loan Request (PDF)"
            name="loan_request"
            // fileInputTOForm={fileInputTOFormDoc}
            // value={agrementDoc}
          />
        </div>
        {/* <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="cumulative_interest"
            title="Comulative Interest"
            type="text"
            name="cumulative_interest"
            place="Comulative Interest"
            required=""
          />
        </div> */}
        {/* <div className="w-full col-span-2">
          <span className="text-sm link-error"></span>
          <Input
            label="total_repayment"
            title="Total Repayment"
            type="text"
            name="total_repayment"
            place="Total Repayment"
            required=""
          />
        </div> */}
      </div>
      <div className="flex items-center justify-end">
        <button
          type="submit"
          className=" text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}

export default LoanRequestForm;
