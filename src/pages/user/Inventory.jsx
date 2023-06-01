import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddInventory from "./AddInventory";
import { useDispatch, useSelector } from "react-redux";
import InventoryService from "../../services/inventory.service";
import { getInventoryDetail } from "../../store/actions/getInventoryAction";
import AssignInventory from "./AssignInventory";
import { getLoanConfigDetail } from "../../store/actions/getLoanConfigAction";
import { getSalesDetail } from "../../store/actions/getSalesAction";
import AssignLoan from "./AssignLoan";
import LoanConfigService from "../../services/loanConfig.service";
const MySwal = withReactContent(Swal);

const columns = [
  {
    name: "Image",
    cell: (row) => {
      return (
        <div className="p-2">
          <img
            src={`http://192.168.14.245:5000/image/${row.item_pic}`}
            style={{ width: "40px", height: "40px" }}
            alt=""
          />
        </div>
      );
    },
  },
  {
    name: "Name",
    selector: (row) => row.item_name,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.item_type,
    sortable: true,
  },
  {
    name: "Code",
    selector: (row) => row.item_code,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.item_price,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row) => new Date(row.createdAt).toISOString().split("T")[0],
    sortable: true,
  },
];

function Inventory() {
  let formData = new FormData();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  // console.log(userData);
  const { userID } = userData;

  useEffect(() => {
    if (userID) {
      dispatch(getInventoryDetail(userID));
    }
  }, [userID, dispatch]);

  const inventoryInfo = useSelector((state) => state.inventoryInfo);
  // console.log(userData);
  const { inventoryDetail } = inventoryInfo;

  useEffect(() => {
    if (userID) {
      dispatch(getLoanConfigDetail(userID));
    }
  }, [userID, dispatch]);

  const loanConfigData = useSelector((state) => state.loanConfigInfo);
  // console.log(userData);
  const { loanConfigDetail } = loanConfigData;

  useEffect(() => {
    if (userID) {
      dispatch(getSalesDetail(userID));
    }
  }, [userID, dispatch]);

  const salesData = useSelector((state) => state.salesInfo);
  // console.log(userData);
  const { salesDetail } = salesData;

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Register Item",
        html: (
          <AddInventory
            values={values}
            // onSubmit={(values) => {
            //   console.log("Value From The Child:", values);

            onSubmit={(values, { resetForm }) => {
              formData.append("item_name", values.item_name);
              formData.append("item_type", values.item_type);
              formData.append("item_price", values.item_price);
              formData.append("item_code", values.item_code);
              formData.append("picture", values.picture);
              formData.append("loan_limit", values.loan_limit);
              formData.append("merchant_id", userID);
              resetForm({ values: "" });

              dispatch(InventoryService.CreateInventory(formData));
            }}
            onCancel={() => MySwal.close()}
          />
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };

  const showAssignFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Assign Sales",
        html: (
          <AssignInventory
            values={values}
            inventoryDetail={inventoryDetail}
            salesDetail={salesDetail}
            // onSubmit={(values) => {
            //   console.log("Value From The Child:", values);

            onSubmit={(values) => {
              console.log("running");
              dispatch(
                InventoryService.AssignInventory(
                  values.item_id,
                  values.sales_id,
                  userID
                )
              );
            }}
            onCancel={() => MySwal.close()}
          />
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };
  const showAssignLoanForm = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Assign Loan",
        html: (
          <AssignLoan
            inventoryDetail={inventoryDetail}
            loanConfigDetail={loanConfigDetail}
            values={values}
            onSubmit={(values) => {
              dispatch(
                LoanConfigService.AssignLoanConfig(
                  values.item_id,
                  values.loan_conf_id,
                  userID
                )
              );
            }}
            onCancel={() => MySwal.close()}
          />
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };

  const showModal = () => {
    showFormModal({
      item_type: "",
      picture: "",
      item_code: "",
      item_price: "",
      item_name: "",
      loan_limit: "",
      merchant_id: userID,
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  const showAssignModal = () => {
    showAssignFormModal({
      item_id: "",
      sales_id: "",
      merchant_id: userID,
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };
  const showAssignLoan = () => {
    showAssignLoanForm({
      item_id: "",
      loan_conf_id: "",
      merchant_id: userID,
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <div>
      <button
        type="button"
        className="mb-4 btn btn-outline btn-primary"
        onClick={showModal}
      >
        Add Inventory
      </button>
      <button
        type="button"
        className="mb-4 ml-2 btn btn-outline btn-primary"
        onClick={showAssignModal}
      >
        Assign Sales
      </button>
      <button
        type="button"
        className="mb-4 ml-2 btn btn-outline btn-primary"
        onClick={showAssignLoan}
      >
        Assign Loan
      </button>
      <DataTable
        columns={columns}
        data={inventoryDetail}
        pagination
        persistTableHeadstriped
        highlightOnHover
      />
    </div>
  );
}

export default Inventory;