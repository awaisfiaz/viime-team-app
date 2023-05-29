import React, { useState } from "react";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [tableType, setTableType] = useState("PROJECTS");

  const columns = ["No", "Project Title", "Project Description", "Actions"];
  const data = [
    ["01", "Project1", "Description1"],
    ["02", "Project2", "Description2"],
    ["02", "Project3", "Description3"],
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

  const addNewProject = () => {
    setModalType("ADD");
    setShowModal(true);
  };

  const actions = [viewAction, editAction, deleteAction];

  return (
    <div className="screen-background min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full ml-70">
        <div className="flex justify-between items-center px-4 py-2 mt-3">
          <h1 className="text-black text-lg font-roboto tracking-wide">
            <b>PROJECT</b> / HOME
          </h1>
          <button
            onClick={addNewProject}
            className="text-white text-xs font-semibold bg-blue-700 py-3 px-5 mx-2 rounded"
          >
            Add New Project
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
        {/* <Modal
          isOpen={showModal}
          handleClose={() => setShowModal(false)}
          modalType={modalType}
        ></Modal> */}
      </div>
    </div>
  );
};

export default Projects;
