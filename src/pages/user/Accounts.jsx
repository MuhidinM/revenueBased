import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import BankAccountServices from "../../services/bank-account.services";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccounts,
  setPrimaryAccount,
} from "../../store/actions/bank_accountAction";
import Selectinput from "../../components/Selectinput";
import ModalFire from "../../components/index";
import Otp from "../../components/Otp";
import withReactContent from "sweetalert2-react-content";
import DataTable from "react-data-table-component";
import jwtDecode from "jwt-decode";
import Spinner from "../../components/Spinner/Spinner";

const CustomLoader = () => (
  <div>
    <h1>Loading data...</h1>
    <Spinner />
  </div>
);

const customStyles = {
  headRow: {
    style: {
      border: "none",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "rgb(230, 244, 244)",
      borderBottomColor: "#FFFFFF",
      borderRadius: "25px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};

const columns = [
  {
    name: "Account Holder",
    selector: (row) => row.accountHolderName,
    sortable: true,
  },
  {
    name: "Account Number",
    selector: (row) => row.accountNumber,
    sortable: true,
  },
  {
    name: "Bank Name",
    selector: (row) => row.bankName,
    sortable: true,
  },
  {
    name: "Primary",
    selector: (row) => (row.primaryAccount === "1" ? "primary" : "secondary"),
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => (row.status === "1" ? "activated" : "pending"),
    sortable: true,
  },
];

// choose[0] = { label: "Set Primary", value: "1" };

const MySwal = withReactContent(Swal);
function Accounts() {
  const AccountListData = useSelector((state) => state.accountsList);
  console.log(AccountListData);
  const { loading, error, bankAccounts } = AccountListData;
  console.log("Account Numbers:", bankAccounts);
  const dispatch = useDispatch();

  const tokenInfo = useSelector((state) => state.userProfile);
  const { token } = tokenInfo;
  const user_token = jwtDecode(token);
  const user_id = user_token?.user_id;
  const userData = useSelector((state) => state.userProfile);
  const { phone_number } = userData?.userDetail;

  useEffect(() => {
    dispatch(getAccounts(user_id));
  }, [dispatch]);

  console.log(bankAccounts);

  const interpretResponse = (response) => {
    let actionResponse = JSON.stringify(response);
    console.log("Action Response Is" + actionResponse.response);
    console.log(
      " Response Is" + response.response,
      response.message + "",
      response.responseCode
    );
    if (response.response === "success" || response.responseCode == 200) {
      console.log(response);
      console.log("Rsponse from useEffect is here" + response);
      Swal.fire({
        icon: "success",
        title: "Account Updated",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (response.responseCode === 403 && response.respone === "error") {
      console.log("Un Authorised User ");
      Swal.fire({
        icon: "error",
        title: response.message,
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Account Is Not Updated",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log("target", e.target.value);

    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Are you sure?",
        text: `You want to set ${e.target.value}Your Primary Account?`,
        icon: "warning",
        // dangerMode: true,
        showCancelButton: true,
        confirmButtonColor: "#01ADED",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed === true) {
          BankAccountServices.sendOtp(phone_number);
          const value = {
            first: "",
            second: "",
            third: "",
            fourth: "",
            fifth: "",
            sixth: "",
          };

          MySwal.fire({
            title: "",
            html: (
              <Otp
                values={value}
                onSubmit={(values) => {
                  console.log("Hello from the second swal");
                  // resolve(values);
                  const otp =
                    values.first +
                    values.second +
                    values.third +
                    values.fourth +
                    values.fifth +
                    values.sixth;
                  BankAccountServices.confirmOtp(phone_number, otp).then(
                    (res) => {
                      dispatch(
                        setPrimaryAccount({
                          user_id: user_id,
                          value: e.target.value,
                          interpretResponse,
                        })
                      );
                    }
                  );
                }}
                onCancel={() => MySwal.close()}
              ></Otp>
            ),

            // onClose: () => reject(),
            showConfirmButton: false,
          });
          <Otp></Otp>;
        }
      });
    });
  };

  const choose = bankAccounts?.map((element) => ({
    label: element.bankName + "-" + element.accountNumber,
    value: element.bankaccount_id,
  }));

  // if (bankAccounts) {
  //   console.log(bankAccounts);
  //   for (let index = 0; index < bankAccounts.length; index++) {
  //     const element = bankAccounts[index];
  //     // console.log(element);
  //     console.log("running");
  //     if (choose.length < bankAccounts.length) {
  //       choose.push({
  //         label: element.bankName + "-" + element.accountNumber,
  //         value: element.bankaccount_id,
  //       });
  //     }
  //   }
  // console.log("choose", choose);
  // const renderList = bankAccounts.map((item, index) => (
  //   <tr>
  //     <th>{item.bankaccount_id}</th>
  //     <td>{item.accountHolderName}</td>
  //     <td>{item.accountNumber}</td>
  //     <td>{item.bankName}</td>
  //     <td>{item.primaryAccount === "1" ? "primary" : "secondary"}</td>
  //     <td>{item.status === "0" ? "pending" : "activated"}</td>
  //   </tr>
  // ));
  return (
    <>
      <div className="grid gap-4 md:grid-cols-12 justify-self-auto">
        <div className="col-span-12">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-12">
            <div className="col-span-9 mt-6">
              <ModalFire></ModalFire>
            </div>
            <div className="col-span-3">
              <Selectinput
                arr={choose}
                id="choose"
                name="choose"
                handleChange={handleChange}
                title="Choose Primary"
              />
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <DataTable
              title="Account List"
              columns={columns}
              data={bankAccounts}
              className="my-custom-table"
              pagination
              // selectableRows
              progressPending={loading}
              progressComponent={<CustomLoader />}
              customStyles={customStyles}
              highlightOnHover
              pointerOnHover
              dense
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Accounts;
