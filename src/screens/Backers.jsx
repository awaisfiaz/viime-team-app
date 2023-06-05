import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import { useSubscription } from "@apollo/client";
import { BACKERS_SUBSCRIPTION } from "../graphQl/subscriptions";
import { useQuery } from "@apollo/client";
import { BACKER_QUERY } from "../graphQl/queries";
import { DELETE_BACKER } from "../graphQl/mutations";
import { useMutation } from "@apollo/client";
import Toast from "../components/Toast";
import Spinner from "../components/Spinner";

const Backers = () => {
  const { data, loading, error } = useSubscription(BACKERS_SUBSCRIPTION);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [tableType, setTableType] = useState("BACKERS");
  const [viewedBackerId, setViewedBackerId] = useState(null);
  const [toDeleteBackerId, setToDeleteBackerId] = useState(null);
  const {
    data: viewedBacker,
    loading: backerLoading,
    error: backerError,
  } = useQuery(BACKER_QUERY, {
    skip: !viewedBackerId,
    variables: { id: viewedBackerId },
  });

  const [toast, setToast] = useState(null);

  const [deleteBacker] = useMutation(DELETE_BACKER, {
    variables: { id: toDeleteBackerId },
    onCompleted(res) {
      setToast({
        title: "Backer Details Deleted",
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
    if (!backerLoading && !backerError && viewedBacker) {
    }
  }, [viewedBacker, backerLoading, backerError]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

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

  const tableData = data.backers.map((backer, index) => [
    `${index + 1}`,
    backer.order_number,
    backer.member_name,
    backer.project_name,
    backer.status,
    backer.pledge_money,
    backer.backers_description,
    backer.estimated_delivery_date,
  ]);

  const createViewAction = (backerId) => () => {
    setModalType("VIEW");
    setShowModal(true);
    setViewedBackerId(backerId);
  };

  const createEditAction = (backerId) => () => {
    setModalType("EDIT");
    setShowModal(true);
    setViewedBackerId(backerId);
  };

  const createDeleteAction = (backerId) => () => {
    setModalType("DELETE");
    setShowModal(true);
    setToDeleteBackerId(backerId);
  };

  const actions = data.backers.map((backer) => [
    createViewAction(backer.id),
    createEditAction(backer.id),
    createDeleteAction(backer.id),
  ]);

  const addNewBacker = () => {
    setModalType("ADD");
    setShowModal(true);
  };

  return (
    <div className="screen-background min-h-screen flex">
      <Sidebar />
      <div className="screen-background flex flex-col w-full overflow-auto overscroll-x-auto">
        <div className="flex justify-between items-center px-4 py-2 mt-3">
          <h1 className="text-black text-lg font-roboto tracking-wide">
            <b>BACKER</b> / LIST VIEW
          </h1>
          <button
            onClick={addNewBacker}
            className="text-white text-xs font-semibold bg-blue-700 py-3 px-5 mx-2 rounded"
          >
            Add New Backer
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
            viewedBackerId={viewedBackerId}
            viewedBacker={viewedBacker?.backers_by_pk}
            deleteBacker={deleteBacker}
            setToast={setToast}
          />
        </div>
      </div>
    </div>
  );
};

export default Backers;
