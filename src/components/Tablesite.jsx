import React, { useState } from "react";
import { Link } from "react-router-dom";
import M2settingView from "./M2settingView";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import { ModalForm } from "./ModalForm";
import BankAccountServices from "../services/bank-account.services";
import { approvePendingBussiness } from "../store/actions/BussinessAction";
import Otp from "./Otp";
import UserService from "../services/user.service";
const MySwal = withReactContent(Swal);
function Tablesite(props) {
  const bussinesResponse = useSelector((state) => state.bussinessInfo);
  console.log(bussinesResponse);
  const { loading, error, pendingBussiness } = bussinesResponse;
  const dispatch = useDispatch();
  const tableData = props.request;
  const [isOpen, setisOpen] = useState(false);
  const [dataIndex, setdataIndex] = useState();

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "ADD ACCOUNTS",
        html: (
          <M2settingView
            modal_data={values}
            title="View Unactivated Account"
            onSubmit={(value) => {
              console.log(value);
              console.log("Your Button is got Clicked");
              dispatch(
                approvePendingBussiness(value),
                Swal.fire({
                  icon: "success",
                  title: "Verified Successfully",
                  showConfirmButton: false,
                  timer: 3000,
                })
              ).then(() => {
                console.log("firing swal");
              });

              // UserService.approvePendingBussinessById(value).then(
              //   (resp) => {
              //     console.log(resp.message);
              //     Swal.fire({
              //       icon: "success",
              //       title: "The Account Has been Successfully Activated",
              //       showConfirmButton: false,
              //       timer: 3000,
              //     });
              //   },
              //   (error) => {
              //     console.log(error.message);
              //   }
              // );
            }}
            onCancel={() => {
              Swal.close();
            }}
          />
        ),

        onClose: () => reject(),
        showConfirmButton: false,
      });
    });
  };

  const setBoolean = (index) => () => {
    console.log(index);
    setisOpen(true);
    setdataIndex(index);
  };

  if (tableData) {
    const showModal = (index) => {
      showFormModal(tableData[index])
        .then((values) => console.log(values))
        .catch(() => console.log("Modal closed"));
    };

    const renderList = tableData.map((item, index) => (
      <tr>
        <th>{item.bussiness_id}</th>
        <td>{item.legalName}</td>
        <td>{item.incorporationType}</td>
        <td>{item.status === "0" ? "pending" : "approved"}</td>
        <td>
          <label
            htmlFor="my-modal-3"
            className="cursor-pointer"
            onClick={() => showModal(index)}
          >
            <svg
              className="w-6 h-6 text-primary"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </label>
        </td>
        <td>
          <a href="">view</a>
        </td>
      </tr>
    ));

    return (
      <>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Legal Name</th>
                <th>Incorporation Type</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {renderList}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Tablesite;
