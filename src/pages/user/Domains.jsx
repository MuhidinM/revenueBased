import React, { useMemo, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DomainComponent from "../../components/DomainComponent";
import { addDomain, getDomain } from "../../store/actions/domainAction";
import AuthService from "../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";
const MySwal = withReactContent(Swal);

const columns = [
  {
    name: "urlsName",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "url",
    label: "url",
    options: {
      filter: true,
      sort: false,
    },
  },
];

// const data = [
//   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
//   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
//   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
//   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
// ];
const options = {
  filterType: "checkbox",
};

function Domains() {
  const [tableData, setTableData] = useState([]);
  const addedDomain = useSelector((state) => state.domain);
  // const addedDomain = useSelector((state) => console.log(state));
  console.log(addedDomain);
  const { loading, error, domain, domains } = addedDomain;
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      dispatch(getDomain());
      setTableData(domains);

      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Register Your Domain",
        html: (
          <DomainComponent
            values={values}
            onSubmit={(values) => {
              console.log(values);
              console.log(currentUser.id);
              dispatch(addDomain(currentUser.id, values.name, values.url));
              console.log("The button is got Clicked");
            }}
          ></DomainComponent>
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
      name: "",
      url: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <div className="m-4">
      <button
        type="button"
        className="mb-4 btn btn-outline btn-primary"
        onClick={showModal}
      >
        Add Domain
      </button>
      {console.log(tableData)}
      <MUIDataTable
        title={"Domain List"}
        data={domains}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default Domains;
