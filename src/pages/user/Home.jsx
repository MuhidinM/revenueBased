import React, { useEffect, useState } from "react";
import Card from "./Card";
import Banner from "./Banner";
import Stat from "./Stat";
import AuthService from "../../services/auth.service";
import DataTable from "react-data-table-component";

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

function Home() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <>
      {currentUser.secrate_key == null ? <Banner /> : ""}

      <div className="p-4">
        <Stat />
        <div className="grid gap-4 mt-4 md:grid-cols-12 justify-self-auto">
          <div className="col-span-8">
            <DataTable
              columns={columns}
              data={data}
              pagination
              // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
              subHeader
              // subHeaderComponent={subHeaderComponentMemo}
              // selectableRows
              persistTableHeadstriped
              highlightOnHover
              // actions={actionsMemo}
            />
          </div>
          <div className="flex col-span-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
