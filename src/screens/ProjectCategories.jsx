import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const ProjectCategories = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [tableType, setTableType] = useState("PROJECT CATEGORIES");
  const columns = [
    "No",
    "Project Category ID",
    "Project Category Title",
    "Actions",
  ];
  const data = [
    ["01", "CategoryID1", "CategoryTitle1"],
    ["02", "CategoryID2", "CategoryTitle2"],
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

  const addNewCategory = () => {
    setModalType("ADD");
    setShowModal(true);
  };

  const actions = [viewAction, editAction, deleteAction];

  return (
    <div className="screen-background min-h-screen flex">
      <Sidebar />
      <div className="screen-background flex flex-col w-full overflow-auto overscroll-x-auto">
        <div className="flex justify-between items-center px-4 py-2 mt-3">
          <h1 className="text-black text-lg font-roboto tracking-wide">
            <b>PROJECT CATEGORIES</b> / VIEW
          </h1>
          <button
            onClick={addNewCategory}
            className="text-white text-xs font-semibold bg-blue-700 py-3 px-5 mx-2 rounded"
          >
            Add New Project Category
          </button>
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

export default ProjectCategories;
