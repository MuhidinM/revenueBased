import React from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddInventory from "./AddInventory";
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

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];
function Inventory() {
  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "INVENTORY INFORMATION",
        html: <AddInventory values={values} onCancel={() => MySwal.close()} />,
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
      });
    });
  };
  const showModal = () => {
    showFormModal({})
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
      <DataTable
        columns={columns}
        data={data}
        pagination
        persistTableHeadstriped
        highlightOnHover
      />
    </div>
  );
}

export default Inventory;
