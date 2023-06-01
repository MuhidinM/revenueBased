import React from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";

const Loans = () => {
  const data = [
    {
      id: 1,
      name: "YardRounded",
      price: 5000,
      status: "pending",
      dueDate: "10/02/2022",
    },
    {
      id: 1,
      name: "YardRounded",
      price: 5000,
      status: "approved",
      dueDate: "10/02/2022",
    },
    {
      id: 1,
      name: "YardRounded",
      price: 5000,
      status: "rejected",
      dueDate: "10/02/2022",
    },
  ];
  const [activeTab, setActiveTab] = useState("all");

  const filterData = () => {
    if (activeTab === "pending") {
      return data.filter((item) => item.status === "pending");
    } else if (activeTab === "approved") {
      return data.filter((item) => item.status === "approved");
    } else if (activeTab === "rejected") {
      return data.filter((item) => item.status === "rejected");
    } else {
      return data;
    }
  };

  const filteredData = filterData();

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Price",
      selector: "price",
      sortable: true,
    },
    {
      name: "status",
      cell: (row) => {
        return (
          <div
            className={`${
              row.status === "pending"
                ? "border flex items-center justify-center rounded-lg bg-gray-200 w-24 h-6"
                : row.status === "rejected"
                ? "border flex items-center justify-center rounded-lg bg-orange-500 w-24 h-6"
                : row.status === "approved" &&
                  "border flex items-center justify-center rounded-lg bg-cyan-500 w-24 h-6"
            } gap-2`}
          >
            <span className={`${row?.status !== "pending" && "text-white"}`}>
              {row?.status}
            </span>
          </div>
        );
      },
    },
    {
      name: "Due Date",
      selector: "dueDate",
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <div className="my-4">
          <div className="flex-wrap">
            <button
              className={`px-6 py-2 rounded-tl-lg ${
                activeTab === "all" ? "bg-cyan-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`px-6 py-2 ${
                activeTab === "approved"
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("approved")}
            >
              Approved
            </button>
            <button
              className={`px-6 py-2 ${
                activeTab === "pending"
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("pending")}
            >
              Pending
            </button>
            <button
              className={`px-6 py-2 ${
                activeTab === "rejected"
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("rejected")}
            >
              Rejected
            </button>
          </div>
          <div className="bg-white rounded-b-lg shadow p-4">
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              highlightOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
