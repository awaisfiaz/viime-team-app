import React, { useState, useEffect, useRef } from "react";
import ViewIcon from "./icons/ViewIcon";
import EditIcon from "./icons/EditIcon";
import DateIcon from "./icons/DateIcon";
import DeleteIcon from "./icons/DeleteIcon";
import ImageIcon from "./icons/ImageIcon";
import DropdownIcon from "./icons/DropdownIcon";

import Modal from "./Modal";
import { useMutation } from "@apollo/client";
import {
  INSERT_PROJECT,
  UPDATE_PROJECT,
  INSERT_BACKER,
  UPDATE_BACKER,
  INSERT_CATEGORY,
  UPDATE_CATEGORY,
} from "../graphQl/mutations";

const Table = ({
  columns,
  data,
  actions,
  showModal,
  setShowModal,
  modalType,
  tableType,
  viewedProjectId,
  viewedProject,
  deleteProject,
  viewedBackerId,
  viewedBacker,
  deleteBacker,
  viewedCategoryId,
  viewedCategory,
  deleteCategory,
  setToast,
}) => {
  // Projects UseSates
  const [name, setName] = useState(viewedProject ? viewedProject.name : "");
  const [email, setEmail] = useState(viewedProject ? viewedProject.email : "");
  const [title, setTitle] = useState(viewedProject ? viewedProject.title : "");
  const [description, setDescription] = useState(
    viewedProject ? viewedProject.description : ""
  );
  const [faqs, setFaqs] = useState(viewedProject ? viewedProject.faqs : "");
  const [updates, setUpdates] = useState(
    viewedProject ? viewedProject.updates : ""
  );
  const [subtitles, setSubtitles] = useState(
    viewedProject ? viewedProject.subtitles : ""
  );
  const [aimeVenturesBacking, setAimeVenturesBacking] = useState(
    viewedProject ? viewedProject.aime_ventures_backing : true
  );
  const [projectCategory, setProjectCategory] = useState(
    viewedProject ? viewedProject.project_category : ""
  );
  const [launchDate, setLaunchDate] = useState(
    viewedProject ? viewedProject.launch_date : null
  );
  const [projectStartDate, setProjectStartDate] = useState(
    viewedProject ? viewedProject.project_start_date : null
  );
  const [projectEndDate, setProjectEndDate] = useState(
    viewedProject ? viewedProject.project_end_date : null
  );
  const [projectCategoryFile, setProjectCategoryFile] = useState(
    viewedProject ? viewedProject.project_image : null
  );
  const [projectVideoFile, setProjectVideoFile] = useState(
    viewedProject ? viewedProject.project_video : null
  );
  const [noOfSubscriptionsAvailable, setNoOfSubscriptionsAvailable] = useState(
    viewedProject ? viewedProject.subscriptions_available : ""
  );
  const [noOfSubscriptionsSecured, setNoOfSubscriptionsSecured] = useState(
    viewedProject ? viewedProject.subscriptions_secured : ""
  );
  const [noOfSubscriptionsRemaining, setNoOfSubscriptionsRemaining] = useState(
    viewedProject ? viewedProject.subscriptions_remaining : ""
  );
  const [totalRaised, setTotalRaised] = useState(
    viewedProject ? viewedProject.total_raised : ""
  );
  const [totalRemaining, setTotalRemaining] = useState(
    viewedProject ? viewedProject.total_remaining : ""
  );
  const [aimeInvestedTotal, setAimeInvestedTotal] = useState(
    viewedProject ? viewedProject.aime_invested_total : ""
  );

  // Backers UseSates
  const [orderNumber, setOrderNumber] = useState(
    viewedBacker ? viewedBacker.order_number : ""
  );
  const [memberName, setMemberName] = useState(
    viewedBacker ? viewedBacker.member_name : ""
  );
  const [projectName, setProjectName] = useState(
    viewedBacker ? viewedBacker.project_name : ""
  );
  const [status, setStatus] = useState(viewedBacker ? viewedBacker.status : "");
  const [status2, setStatus2] = useState(
    viewedBacker ? viewedBacker.status_2 : ""
  );
  const [pledgeMoney, setPledgeMoney] = useState(
    viewedBacker ? viewedBacker.pledge_money : ""
  );
  const [backerDescription, setBackerDescription] = useState(
    viewedBacker ? viewedBacker.backers_description : ""
  );
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState(
    viewedBacker ? viewedBacker.estimated_delivery_date : null
  );

  // Category UseStates

  const [categoryId, setCategoryId] = useState(
    viewedCategory ? viewedCategory.project_category_id : ""
  );
  const [categoryTitle, setCategoryTitle] = useState(
    viewedCategory ? viewedCategory.project_category_title : ""
  );

  // Category UseEffect

  useEffect(() => {
    if (viewedCategory && (modalType === "VIEW" || modalType === "EDIT")) {
      setCategoryId(viewedCategory.project_category_id);
      setCategoryTitle(viewedCategory.project_category_title);
    } else if (modalType === "ADD") {
      setCategoryId("");
      setCategoryTitle("");
    }
  }, [viewedCategory, modalType]);

  // Backers UseEffect
  useEffect(() => {
    if (viewedBacker && (modalType === "VIEW" || modalType === "EDIT")) {
      setOrderNumber(viewedBacker.order_number);
      setMemberName(viewedBacker.member_name);
      setProjectName(viewedBacker.project_name);
      setStatus(viewedBacker.status);
      setStatus2(viewedBacker.status_2);
      setPledgeMoney(viewedBacker.pledge_money);
      setBackerDescription(viewedBacker.backers_description);
      setEstimatedDeliveryDate(viewedBacker.estimated_delivery_date);
    } else if (modalType === "ADD") {
      setOrderNumber("");
      setMemberName("");
      setProjectName("");
      setStatus("");
      setStatus2("");
      setPledgeMoney("");
      setBackerDescription("");
      setEstimatedDeliveryDate(null);
    }
  }, [viewedBacker, modalType]);

  // Projects UseEffect
  useEffect(() => {
    if (viewedProject && (modalType === "VIEW" || modalType === "EDIT")) {
      setName(viewedProject.name);
      setEmail(viewedProject.email);
      setTitle(viewedProject.title);
      setDescription(viewedProject.description);
      setFaqs(viewedProject.faqs);
      setUpdates(viewedProject.updates);
      setSubtitles(viewedProject.subtitles);
      setAimeVenturesBacking(viewedProject.aime_ventures_backing);
      setProjectCategory(viewedProject.project_category);
      setLaunchDate(viewedProject.launch_date);
      setProjectStartDate(viewedProject.project_start_date);
      setProjectEndDate(viewedProject.project_end_date);
      setProjectCategoryFile(viewedProject.project_image);
      setProjectVideoFile(viewedProject.project_video);
      setNoOfSubscriptionsAvailable(viewedProject.subscriptions_available);
      setNoOfSubscriptionsSecured(viewedProject.subscriptions_secured);
      setNoOfSubscriptionsRemaining(viewedProject.subscriptions_remaining);
      setTotalRaised(viewedProject.total_raised);
      setTotalRemaining(viewedProject.total_remaining);
      setAimeInvestedTotal(viewedProject.aime_invested_total);
    } else if (modalType === "ADD") {
      setName("");
      setEmail("");
      setTitle("");
      setDescription("");
      setFaqs("");
      setUpdates("");
      setSubtitles("");
      setAimeVenturesBacking(true);
      setProjectCategory("");
      setLaunchDate(null);
      setProjectStartDate(null);
      setProjectEndDate(null);
      setProjectCategoryFile(null);
      setProjectVideoFile(null);
      setNoOfSubscriptionsAvailable("");
      setNoOfSubscriptionsSecured("");
      setNoOfSubscriptionsRemaining("");
      setTotalRaised("");
      setTotalRemaining("");
      setAimeInvestedTotal("");
    }
  }, [viewedProject, modalType]);

  const [createCategory] = useMutation(INSERT_CATEGORY, {
    variables: {
      object: {
        project_category_id: categoryId,
        project_category_title: categoryTitle,
      },
    },
    onCompleted(res) {
      setToast({
        title: "Category Details Uploaded",
        description: "Detail Upload",
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

  const [updateCategory] = useMutation(UPDATE_CATEGORY, {
    variables: {
      id: viewedCategoryId,
      object: {
        project_category_id: categoryId,
        project_category_title: categoryTitle,
      },
    },
    onCompleted(res) {
      setToast({
        title: "Category Details Updated",
        description: "Detail Updated",
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

  const [createBacker] = useMutation(INSERT_BACKER, {
    variables: {
      object: {
        order_number: orderNumber,
        member_name: memberName,
        project_name: projectName,
        status: status,
        status_2: status2,
        pledge_money: pledgeMoney,
        backers_description: backerDescription,
        estimated_delivery_date: estimatedDeliveryDate,
      },
    },
    onCompleted(res) {
      setToast({
        title: "Backer Details Uploaded",
        description: "Detail Upload",
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

  const [updateBacker] = useMutation(UPDATE_BACKER, {
    variables: {
      id: viewedBackerId,
      object: {
        order_number: orderNumber,
        member_name: memberName,
        project_name: projectName,
        status: status,
        status_2: status2,
        pledge_money: pledgeMoney,
        backers_description: backerDescription,
        estimated_delivery_date: estimatedDeliveryDate,
      },
    },
    onCompleted(res) {
      setToast({
        title: "Backer Details Updated",
        description: "Detail Updated",
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

  const [createProject] = useMutation(INSERT_PROJECT, {
    variables: {
      object: {
        name: name,
        email: email,
        title: title,
        description: description,
        faqs: faqs,
        updates: updates,
        subtitles: subtitles,
        aime_ventures_backing: aimeVenturesBacking,
        project_category: projectCategory,
        launch_date: launchDate,
        project_start_date: projectStartDate,
        project_end_date: projectEndDate,
        project_image: projectCategoryFile,
        project_video: projectVideoFile,
        subscriptions_available: noOfSubscriptionsAvailable,
        subscriptions_secured: noOfSubscriptionsSecured,
        subscriptions_remaining: noOfSubscriptionsRemaining,
        total_raised: totalRaised,
        total_remaining: totalRemaining,
        aime_invested_total: aimeInvestedTotal,
      },
    },
    onCompleted(res) {
      setToast({
        title: "Project Details Uploaded",
        description: "Detail Upload",
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

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: viewedProjectId,
      object: {
        name: name,
        email: email,
        title: title,
        description: description,
        faqs: faqs,
        updates: updates,
        subtitles: subtitles,
        aime_ventures_backing: aimeVenturesBacking,
        project_category: projectCategory,
        launch_date: launchDate,
        project_start_date: projectStartDate,
        project_end_date: projectEndDate,
        project_image: projectCategoryFile,
        project_video: projectVideoFile,
        subscriptions_available: noOfSubscriptionsAvailable,
        subscriptions_secured: noOfSubscriptionsSecured,
        subscriptions_remaining: noOfSubscriptionsRemaining,
        total_raised: totalRaised,
        total_remaining: totalRemaining,
        aime_invested_total: aimeInvestedTotal,
      },
    },
    onCompleted(res) {
      setToast({
        title: "Project Details Updated",
        description: "Detail Updated",
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

  function handleClick(e) {
    e.preventDefault();
    document.getElementById("project-category-file").click();
  }

  function handleVideoClick(e) {
    e.preventDefault();
    document.getElementById("project-video-file").click();
  }

  return (
    <>
      <table className="table-auto divide-y divide-gray-200 w-full sm:w-max m-4">
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                scope="col"
                className="pr-6 pl-3 py-5 text-left text-xs font-bold text-white uppercase tracking-wider border border-screen-bg bg-sidebar-bg overflow-hidden overflow-ellipsis whitespace-nowrap"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((item, j) => (
                <td
                  key={j}
                  className="pr-6 pl-3 py-2 text-sm font-bold text-gray-900 border border-screen-bg overflow-hidden overflow-ellipsis whitespace-nowrap"
                >
                  {item}
                </td>
              ))}
              <td className="px-8 py-2 text-sm text-gray-900 flex gap-2 border-screen-bg justify-center items-center">
                {actions[i].map((action, index) => (
                  <div key={index} className="cursor-pointer" onClick={action}>
                    {index === 0 ? (
                      <ViewIcon />
                    ) : index === 1 ? (
                      <EditIcon />
                    ) : (
                      <DeleteIcon />
                    )}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        tableType={tableType}
        createProject={createProject}
        updateProject={updateProject}
        deleteProject={deleteProject}
        createBacker={createBacker}
        updateBacker={updateBacker}
        deleteBacker={deleteBacker}
        createCategory={createCategory}
        updateCategory={updateCategory}
        deleteCategory={deleteCategory}
      >
        {/* Modal Content */}
        {tableType === "PROJECTS" && (
          <>
            {/* Modal Content */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                NAME
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                EMAIL
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Second */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                TITLE
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                DESCRIPTION
              </label>
              <textarea
                className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* Third */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                FAQS
              </label>
              <textarea
                className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={faqs}
                onChange={(e) => setFaqs(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                UPDATES
              </label>
              <textarea
                className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={updates}
                onChange={(e) => setUpdates(e.target.value)}
              />
            </div>
            {/* Forth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                PROJECT SUB TITLES
              </label>
              <textarea
                className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={subtitles}
                onChange={(e) => setSubtitles(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="aime-ventures-backing"
              >
                AIME VENTURES BACKING
              </label>
              <div className="relative">
                <select
                  id="aime-ventures-backing"
                  className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
                  value={aimeVenturesBacking}
                  onChange={(e) => setAimeVenturesBacking(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value={true}>YES</option>
                  <option value={false}>NO</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <DropdownIcon />
                </div>
              </div>
            </div>
            {/* Fifth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="project-category"
              >
                PROJECT CATEGORY
              </label>
              <div className="relative">
                <select
                  id="project-category"
                  className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
                  value={projectCategory}
                  onChange={(e) => setProjectCategory(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <DropdownIcon />
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="launch-date"
              >
                LAUNCH DATE
              </label>
              <input
                type="date"
                id="launch-date"
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
                value={launchDate}
                onChange={(e) => setLaunchDate(e.target.value)}
              />
            </div>
            {/* Sixth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="project-start-date"
              >
                PROJECT START DATE
              </label>
              <input
                type="date"
                id="project-start-date"
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
                value={projectStartDate}
                onChange={(e) => setProjectStartDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="project-end-date"
              >
                PROJECT END DATE
              </label>
              <input
                type="date"
                id="project-end-date"
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
                value={projectEndDate}
                onChange={(e) => setProjectEndDate(e.target.value)}
              />
            </div>
            {/* Seventh */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                htmlFor="project-category-file"
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
              >
                PROJECT CATEGORY
              </label>
              <label
                htmlFor="project-category-file"
                className="relative border-[1px] border-[#202124] rounded-md bg-white appearance-none p-4 cursor-pointer"
              >
                <input
                  type="file"
                  id="project-category-file"
                  className="hidden"
                  onChange={(e) => setProjectCategoryFile(e.target.files[0])}
                />
                <div className="flex flex-col items-center justify-center h-full">
                  <ImageIcon />
                  <p className="input-description mt-2">
                    Drop an image here, or select file
                  </p>
                  <p className="input-hint mt-1">
                    It must be a JPG, PNG, GIF, or BMP, no larger than 20 MB.
                  </p>
                </div>
              </label>
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                htmlFor="project-video-file"
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
              >
                PROJECT VIDEO
              </label>
              <label
                htmlFor="project-video-file"
                className="relative border-[1px] border-[#202124] rounded-md bg-white appearance-none p-4 cursor-pointer"
              >
                <input
                  type="file"
                  id="project-video-file"
                  className="hidden"
                  onChange={(e) => setProjectVideoFile(e.target.files[0])}
                />
                <div className="flex flex-col items-center justify-center h-full">
                  <ImageIcon />
                  <p className="input-description mt-2">
                    Drop an image here, or select file
                  </p>
                  <p className="input-hint mt-1">
                    It must be a JPG, PNG, GIF, or BMP, no larger than 20 MB.
                  </p>
                </div>
              </label>
            </div>
            {/* Eighth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                NO OF SUBSCRIPTIONS AVAILABLE
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={noOfSubscriptionsAvailable}
                onChange={(e) => setNoOfSubscriptionsAvailable(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                NO OF SUBSCRIPTIONS SECURED
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={noOfSubscriptionsSecured}
                onChange={(e) => setNoOfSubscriptionsSecured(e.target.value)}
              />
            </div>
            {/* Ninth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                NO OF SUBSCRIPTIONS REMAINING £
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={noOfSubscriptionsRemaining}
                onChange={(e) => setNoOfSubscriptionsRemaining(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                TOTAL RAISED £
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={totalRaised}
                onChange={(e) => setTotalRaised(e.target.value)}
              />
            </div>
            {/* Tenth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                TOTAL REMAINING £
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={totalRemaining}
                onChange={(e) => setTotalRemaining(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                AIME INVESTED TOTAL £
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
                value={aimeInvestedTotal}
                onChange={(e) => setAimeInvestedTotal(e.target.value)}
              />
            </div>
          </>
        )}
        {tableType === "BACKERS" && (
          <>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                ORDER NUMBER
              </label>
              <input
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                PROJECT NAME
              </label>
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                MEMBER NAME
              </label>
              <input
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                STATUS
              </label>
              <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                PLEDGE MONEY
              </label>
              <input
                value={pledgeMoney}
                onChange={(e) => setPledgeMoney(e.target.value)}
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                STATUS
              </label>
              <input
                value={status2}
                onChange={(e) => setStatus2(e.target.value)}
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                DESCRIPTION
              </label>
              <textarea
                value={backerDescription}
                onChange={(e) => setBackerDescription(e.target.value)}
                className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                Estimated Delivery Date
              </label>
              <input
                type="date"
                id="estimated-delivery-date"
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
                value={estimatedDeliveryDate}
                onChange={(e) => setEstimatedDeliveryDate(e.target.value)}
              />
            </div>
          </>
        )}
        {tableType === "CATEGORIES" && (
          <>
            <div className="flex flex-col">
              <div className="flex flex-col mx-auto md:w-1/2 px-6 mb-4 -ml-2 pt-2">
                <label className="text-xs font-sailec font-semibold leading-4 tracking-wide uppercase text-black mb-2 pt-3">
                  PROJECT CATEGORY ID
                </label>
                <input
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-[365px] h-[56px] bg-white border border-[#202124] rounded-md px-3"
                />
              </div>
              <div className="flex flex-col mx-auto md:w-1/2 px-6 mb-4 -ml-2 pt-2">
                <label className="text-xs font-sailec font-semibold leading-4 tracking-wide uppercase text-black mb-2 pt-3">
                  PROJECT CATEGORY TITLE
                </label>
                <input
                  value={categoryTitle}
                  onChange={(e) => setCategoryTitle(e.target.value)}
                  className="w-[365px] h-[56px] bg-white border border-[#202124] rounded-md px-3"
                />
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Table;
