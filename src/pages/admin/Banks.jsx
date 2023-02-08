import React, { useEffect } from "react";
import Swal from "sweetalert2";
import Card from "../../components/Card";
import Tablesite from "../../components/Tablesite";
import withReactContent from "sweetalert2-react-content";
import BankModal from "../../components/BankModal";
import { addBank, gateBanks } from "../../store/actions/bankAction";
import { useDispatch, useSelector } from "react-redux";
import BankTable from "../../components/BankTable";
const MySwal = withReactContent(Swal);
function Banks() {
  
  return (
    <>
      {/* <div className="grid grid-cols-12 gap-4 m-4 justify-self-auto">
        <div className="col-span-8 ">
          <label
            htmlFor="my-modal-4"
            className="mb-4 btn btn-outline btn-primary"
            // onClick={showModal}
          >
            Add New
          </label>
          
        </div>
        
      </div> */}
      <BankTable />
    </>
  );
}

export default Banks;
