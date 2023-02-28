import React, { useEffect } from "react";
import Input from "./Input";
import { addBank, gateBanks } from "../store/actions/bankAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BankModal from "./BankModal";
import DataTable from "react-data-table-component";
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
  console.log(bankListData);
  const { loading, error, bank } = bankListData;
  console.log(bank);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gateBanks());
    dispatch(addBank);
  }, [dispatch]);

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
              dispatch(addBank(values.bankName, values.bankCode));
              // dispatch()
              // resolve(values);
              // BankAccountServices.confirmOtp("0932308204", otp).then(
              //   (res) => {
              //     dispatch(setPrimaryAccount(e.target.value));
              Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 3000,
              });
              //   }
              // );
            }}
            onCancel={() => MySwal.close()}
          ></BankModal>
        ),

        // onClose: () => reject(),
        showConfirmButton: false,
      });
      // <Otp></Otp>
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
