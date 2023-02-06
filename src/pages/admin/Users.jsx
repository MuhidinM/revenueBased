import React from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Tablesite from "../../components/Tablesite";
import Table from "./Table";

function Users() {
  return (
    <>
      <div className="grid gap-4 my-4 mt-4 md:grid-cols-12 justify-self-auto">
        <div className="col-span-9"></div>
        <div className="col-span-3">
          <Input
            label="search"
            title="Search"
            type="text"
            name="search"
            // value={props.values.lgname}
            // handleChange={props.handleChange}
            // onChange={props.handleChange}

            place="Search by name"
            required=""
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Region</th>
              <th>Birth Date</th>
              <th>Identification No</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Quality Control Specialist</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <a href="" className="text-primary">
                  view
                </a>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Desktop Support Technician</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <a href="" className="text-primary">
                  view
                </a>
              </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Tax Accountant</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>
                <a href="" className="text-primary">
                  view
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
