import React from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddSales from "./AddSales";
import { useSelector, useDispatch } from "react-redux";
import UserService from "../../services/user.service";
import { useEffect } from "react";
import { getSalesDetail } from "../../store/actions/getSalesAction";

const MySwal = withReactContent(Swal);

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

function Sales() {
  const userData = useSelector((state) => state.userProfile);
  // console.log(userData);
  const { userID } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userID) {
      dispatch(getSalesDetail(userID));
    }
  }, [userID, dispatch]);

  const salesData = useSelector((state) => state.salesInfo);
  // console.log(userData);
  const { salesDetail } = salesData;
  // const showFormModal = (values) => {
  //   return new Promise((resolve, reject) => {
  //     MySwal.fire({
  //       title: "Create Sales",
  //       html: <AddSales values={values} onCancel={() => MySwal.close()} />,
  //       onClose: () => reject(),
  //       onCancel: () => Swal.close(),
  //       showConfirmButton: false,
  //     });
  //   });
  // };
  // const showModal = () => {
  //   showFormModal({})
  //     .then((values) => console.log(values))
  //     .catch(() => console.log("Modal closed"));
  // };

  const showFormModalSales = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Register Sales",
        html: (
          <AddSales
            values={values}
            onSubmit={(values) => {
              console.log("Value From The Child:", values.username);

              dispatch(UserService.CreateSales(values.username, userID));
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

  const showModalSales = () => {
    showFormModalSales({
      username: "",
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
        onClick={showModalSales}
      >
        Add New Sales
      </button>
      <DataTable
        columns={columns}
        data={salesDetail}
        pagination
        persistTableHeadstriped
        highlightOnHover
      />
    </div>
  );
}

export default Sales;
