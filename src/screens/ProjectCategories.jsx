import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import { useSubscription } from "@apollo/client";
import { CATEGORIES_SUBSCRIPTION } from "../graphQl/subscriptions";
import { useQuery } from "@apollo/client";
import { CATEGORY_QUERY } from "../graphQl/queries";
import { DELETE_CATEGORY } from "../graphQl/mutations";
import { useMutation } from "@apollo/client";
import Toast from "../components/Toast";
import Spinner from "../components/Spinner";

const ProjectCategories = () => {
  const { data, loading, error } = useSubscription(CATEGORIES_SUBSCRIPTION);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [tableType, setTableType] = useState("CATEGORIES");
  const [viewedCategoryId, setViewedCategoryId] = useState(null);
  const [toDeleteCategoryId, setToDeleteCategoryId] = useState(null);
  const {
    data: viewedCategory,
    loading: categoryLoading,
    error: categoryError,
  } = useQuery(CATEGORY_QUERY, {
    skip: !viewedCategoryId,
    variables: { id: viewedCategoryId },
  });

  const [toast, setToast] = useState(null);

  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    variables: { id: toDeleteCategoryId },
    onCompleted(res) {
      setToast({
        title: "Category Details Deleted",
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
    if (!categoryLoading && !categoryError && viewedCategory) {
    }
  }, [viewedCategory, categoryLoading, categoryError]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const columns = [
    "No",
    "Project Category ID",
    "Project Category Title",
    "Actions",
  ];

  const tableData = data.categories.map((category, index) => [
    `${index + 1}`,
    category.project_category_id,
    category.project_category_title,
  ]);

  const createViewAction = (categoryId) => () => {
    setModalType("VIEW");
    setShowModal(true);
    setViewedCategoryId(categoryId);
  };

  const createEditAction = (categoryId) => () => {
    setModalType("EDIT");
    setShowModal(true);
    setViewedCategoryId(categoryId);
  };

  const createDeleteAction = (categoryId) => () => {
    setModalType("DELETE");
    setShowModal(true);
    setToDeleteCategoryId(categoryId);
  };

  const actions = data.categories.map((category) => [
    createViewAction(category.id),
    createEditAction(category.id),
    createDeleteAction(category.id),
  ]);

  const addNewCategory = () => {
    setModalType("ADD");
    setShowModal(true);
  };

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
            viewedCategoryId={viewedCategoryId}
            viewedCategory={viewedCategory?.categories_by_pk}
            deleteCategory={deleteCategory}
            setToast={setToast}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;
