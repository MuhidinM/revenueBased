import React, { useEffect } from "react";
import Input from "./Input";
import { addBank, gateBanks } from "../store/actions/bankAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BankModal from "./BankModal";
const MySwal = withReactContent(Swal);
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

  const renderList =
    bank instanceof Array
      ? bank.map((item, index) => (
          <tr>
            <th></th>
            <td>{item.bankName}</td>
            <td>{item.bankCode}</td>
          </tr>
        ))
      : "";
  const showModal = () => {
    fireSwal({
      bankName: "",
      bankCode: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  // if(typeof bank ){

  // }
  // if(bank instanceof Array){

  // }

  return (
    <>
      <div className="grid gap-4 my-4 mt-4 md:grid-cols-12 justify-self-auto">
        <div className="grid grid-cols-12 gap-4 m-4 justify-self-auto">
          <div className="col-span-8 ">
            <label
              htmlFor="my-modal-4"
              className="mb-4 btn btn-outline btn-primary"
              onClick={showModal}
            >
              Add New
            </label>
            {/* <BankTable bank={bank} /> */}
          </div>
          <div className="flex col-span-4">{/* <Card /> */}</div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Bank Name</th>
              <th>Bank Code</th>
            </tr>
          </thead>
          <tbody>{renderList}</tbody>
        </table>
      </div>
    </>
  );
}

export default BankTable;
