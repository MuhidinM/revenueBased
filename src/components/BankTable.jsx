import React, { useEffect, useState } from "react";
import Input from "./Input";
import { addBank, gateBanks } from "../store/actions/bankAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BankModal from "./BankModal";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";
const MySwal = withReactContent(Swal);

const columns = [
  {
    name: "Bank Name",
    selector: (row) => row.bankName,
    sortable: true,
  },
  {
    name: "Bank Code",
    selector: (row) => row.bankCode,
    sortable: true,
  },
];

function BankTable() {
  const bankListData = useSelector((state) => state.bankInfo);
  let { loading, error, bank, response } = bankListData;
  // const [backendResponse, setbackendResponse] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gateBanks());
    dispatch(addBank);
    // setbackendResponse(response);
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("Hello useEffect is running well");
  //   if (response === "success") {
  //     console.log(response);
  //     console.log("Rsponse from useEffect is here" + response);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Bank Created",
  //       showConfirmButton: false,
  //       timer: 3000,
  //     });
  //   } else if (response.length > 0 && response != "success") {
  //     console.log("Rsponse from useEffect is here" + response);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Bank Is Not Created",
  //       showConfirmButton: false,
  //       timer: 3000,
  //     });
  //   }
  // }, [response.length > 0]);

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
        title: "Bank Created",
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
        title: "Bank Is Not Created",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  const fireSwal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "",
        html: (
          <BankModal
            values={values}
            onSubmit={(values) => {
              console.log("Hello from the second swal");
              console.log(values.bankName);
              console.log(values.bankCode);
              dispatch(
                addBank({
                  bankName: values.bankName,
                  bankCode: values.bankCode,
                  interpretResponse,
                })
              );
              console.log("Bank Response" + response);
            }}
            onCancel={() => MySwal.close()}
          ></BankModal>
        ),

        showConfirmButton: false,
      });
    });
  };
  console.log(bank, "heloo");

  const showModal = () => {
    fireSwal({
      bankName: "",
      bankCode: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <>
      <DataTable
        title="Bank List"
        columns={columns}
        data={bank}
        pagination
        // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        // subHeaderComponent={subHeaderComponentMemo}
        // selectableRows
        persistTableHeadstriped
        highlightOnHover
        // actions={actionsMemo}
      />
    </>
  );
}

export default BankTable;
