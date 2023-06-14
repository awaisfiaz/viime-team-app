import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import { useSubscription } from "@apollo/client";
import { PROJECTS_SUBSCRIPTION } from "../graphQl/subscriptions";
import { useQuery } from "@apollo/client";
import { PROJECT_QUERY } from "../graphQl/queries";
import { DELETE_PROJECT } from "../graphQl/mutations";
import { useMutation } from "@apollo/client";
import Toast from "../components/Toast";
import Spinner from "../components/Spinner";

const Projects = () => {
  const { data, loading, error } = useSubscription(PROJECTS_SUBSCRIPTION);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [tableType, setTableType] = useState("PROJECTS");
  const [viewedProjectId, setViewedProjectId] = useState(null);
  const [toDeleteProjectId, setToDeleteProjectId] = useState(null);
  const {
    data: viewedProject,
    loading: projectLoading,
    error: projectError,
  } = useQuery(PROJECT_QUERY, {
    skip: !viewedProjectId,
    variables: { id: viewedProjectId },
  });

  const [toast, setToast] = useState(null);

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: toDeleteProjectId },
    onCompleted(res) {
      setToast({
        title: "Project Details Deleted",
        description: "Detail Deleted",
        status: "success",
      });
    },
    onError(err) {
      setToast({
        title: "Failed",
        description: `Error occurred ${err.message}`,
        status: "error",
      });
    },
  });

  useEffect(() => {
    if (!projectLoading && !projectError && viewedProject) {
    }
  }, [viewedProject, projectLoading, projectError]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const columns = ["No", "Project Title", "Project Description", "Actions"];

  const tableData = data.projects.map((project, index) => [
    `${index + 1}`,
    project.title,
    project.description,
  ]);

  const createViewAction = (projectId) => () => {
    setModalType("VIEW");
    setShowModal(true);
    setViewedProjectId(projectId);
  };

  const createEditAction = (projectId) => () => {
    setModalType("EDIT");
    setShowModal(true);
    setViewedProjectId(projectId);
  };

  const createDeleteAction = (projectId) => () => {
    setModalType("DELETE");
    setShowModal(true);
    setToDeleteProjectId(projectId);
  };

  const actions = data.projects.map((project) => [
    createViewAction(project.id),
    createEditAction(project.id),
    createDeleteAction(project.id),
  ]);

  const addNewProject = () => {
    setModalType("ADD");
    setShowModal(true);
  };

  return (
    <div className="screen-background min-h-screen flex">
      <Sidebar />
      <div className="screen-background flex flex-col w-full ml-70 overflow-auto overscroll-x-auto">
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
        {toast && (
          <Toast
            key={toast.title}
            title={toast.title}
            description={toast.description}
            status={toast.status}
          />
        )}
        <div className="mt-4">
          <Table
            columns={columns}
            data={tableData}
            actions={actions}
            showModal={showModal}
            setShowModal={setShowModal}
            modalType={modalType}
            tableType={tableType}
            viewedProjectId={viewedProjectId}
            viewedProject={viewedProject?.projects_by_pk}
            deleteProject={deleteProject}
            setToast={setToast}
          />
        </div>
      </div>
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #5a5a5a;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
