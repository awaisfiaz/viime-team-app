import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Backers = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [tableType, setTableType] = useState("BACKERS");
  const columns = [
    "No",
    "Order Number",
    "Member Name",
    "Project Name",
    "Status",
    "Pledge Money",
    "Description",
    "Estimated Delivery Date",
    "Actions",
  ];
  const data = [
    [
      "01",
      "Order1",
      "Member1",
      "Project1",
      "Status1",
      "$300",
      "Description1",
      "Date1",
    ],
    [
      "02",
      "Order2",
      "Member2",
      "Project2",
      "Status2",
      "$400",
      "Description2",
      "Date2",
    ],
  ];

  const viewAction = () => {
    setModalType("VIEW");
    setShowModal(true);
  };

  const editAction = () => {
    setModalType("EDIT");
    setShowModal(true);
  };

  const deleteAction = () => {
    setModalType("DELETE");
    setShowModal(true);
  };

  const actions = [viewAction, editAction, deleteAction];
  return (
    <div className="screen-background min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full ml-70">
        <div className="flex justify-between items-center px-4 py-2 mt-3">
          <h1 className="text-black text-lg font-roboto tracking-wide">
            <b>BACKERS</b> / LIST VIEW
          </h1>
        </div>
        <div className="mt-4">
          <Table
            columns={columns}
            data={data}
            actions={actions}
            showModal={showModal}
            setShowModal={setShowModal}
            modalType={modalType}
            tableType={tableType}
          />
        </div>
      </div>
    </div>
  );
};

export default Backers;
