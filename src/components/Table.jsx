// import React, { useRef } from "react";
// import ViewIcon from "./icons/ViewIcon";
// import EditIcon from "./icons/EditIcon";
// import DateIcon from "./icons/DateIcon";
// import DeleteIcon from "./icons/DeleteIcon";
// import ImageIcon from "./icons/ImageIcon";
// import DropdownIcon from "./icons/DropdownIcon";

// import Modal from "./Modal";

// const Table = ({
//   columns,
//   data,
//   actions,
//   showModal,
//   setShowModal,
//   modalType,
// }) => {
//   function handleClick(e) {
//     e.preventDefault();
//     document.getElementById("project-category-file").click();
//   }

//   function handleVideoClick(e) {
//     e.preventDefault();
//     document.getElementById("project-video-file").click();
//   }

//   return (
//     <>
//       <table className="table-auto divide-y divide-gray-200 w-max m-4">
//         <thead>
//           <tr>
//             {columns.map((column, i) => (
//               <th
//                 key={i}
//                 scope="col"
//                 className="pr-6 pl-3 py-5 text-left text-xs font-bold text-white uppercase tracking-wider border border-screen-bg bg-sidebar-bg overflow-hidden overflow-ellipsis whitespace-nowrap"
//               >
//                 {column}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((row, i) => (
//             <tr key={i}>
//               {row.map((item, j) => (
//                 <td
//                   key={j}
//                   className="pr-6 pl-3 py-2 text-sm font-bold text-gray-900 border border-screen-bg overflow-hidden overflow-ellipsis whitespace-nowrap"
//                 >
//                   {item}
//                 </td>
//               ))}
//               <td className="px-8 py-2 text-sm text-gray-900 flex gap-2 border-screen-bg">
//                 {actions.map((action, index) => (
//                   <div key={index} className="cursor-pointer" onClick={action}>
//                     {index === 0 ? (
//                       <ViewIcon />
//                     ) : index === 1 ? (
//                       <EditIcon />
//                     ) : (
//                       <DeleteIcon />
//                     )}
//                   </div>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Modal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         modalType={modalType}
//       >
//         {/* Modal Content */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2">NAME</label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-2">
//             EMAIL
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         {/* Second */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             TITLE
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             DESCRIPTION
//           </label>
//           <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         {/* Third */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             FAQS
//           </label>
//           <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             UPDATES
//           </label>
//           <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         {/* Forth */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             PROJECT SUB TITLES
//           </label>
//           <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label
//             className="block text-xs font-sailec font-semibold mb-2 pt-3"
//             htmlFor="aime-ventures-backing"
//           >
//             AIME VENTURES BACKING
//           </label>
//           <div className="relative">
//             <select
//               id="aime-ventures-backing"
//               className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
//             >
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <DropdownIcon />
//             </div>
//           </div>
//         </div>
//         {/* Fifth */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label
//             className="block text-xs font-sailec font-semibold mb-2 pt-3"
//             htmlFor="aime-ventures-backing"
//           >
//             PROJECT CATEGORY
//           </label>
//           <div className="relative">
//             <select
//               id="aime-ventures-backing"
//               className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
//             >
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <DropdownIcon />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label
//             className="block text-xs font-sailec font-semibold mb-2 pt-3"
//             htmlFor="aime-ventures-backing"
//           >
//             LAUNCH DATE
//           </label>
//           <div className="relative">
//             <select
//               id="aime-ventures-backing"
//               className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
//             >
//               <option value="">SELECT</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <DropdownIcon />
//             </div>
//           </div>
//         </div>
//         {/* Sixth */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label
//             className="block text-xs font-sailec font-semibold mb-2 pt-3"
//             htmlFor="project-category"
//           >
//             PROJECT START DATE
//           </label>
//           <input
//             type="date"
//             id="project-category"
//             className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
//           />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label
//             className="block text-xs font-sailec font-semibold mb-2 pt-3"
//             htmlFor="launch-date"
//           >
//             PROJECT END DATE
//           </label>
//           <input
//             type="date"
//             id="launch-date"
//             className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
//           />
//         </div>
//         {/* Seventh */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label
//             htmlFor="project-category-file"
//             className="block text-xs font-sailec font-semibold mb-2 pt-3"
//           >
//             PROJECT CATEGORY
//           </label>
//           <label
//             htmlFor="project-category-file"
//             className="relative border-[1px] border-[#202124] rounded-md bg-white appearance-none p-4 cursor-pointer"
//           >
//             <input type="file" id="project-category-file" className="hidden" />
//             <div className="flex flex-col items-center justify-center h-full">
//               <ImageIcon />
//               <p className="input-description mt-2">
//                 Drop an image here, or select file
//               </p>
//               <p className="input-hint mt-1">
//                 It must be a JPG, PNG, GIF, or BMP, no larger than 20 MB.
//               </p>
//             </div>
//           </label>
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
//           <label
//             htmlFor="project-video-file"
//             className="block text-xs font-sailec font-semibold mb-2 pt-3"
//           >
//             PROJECT VIDEO
//           </label>
//           <label
//             htmlFor="project-video-file"
//             className="relative border-[1px] border-[#202124] rounded-md bg-white appearance-none p-4 cursor-pointer"
//           >
//             <input type="file" id="project-video-file" className="hidden" />
//             <div className="flex flex-col items-center justify-center h-full">
//               <ImageIcon />
//               <p className="input-description mt-2">
//                 Drop an image here, or select file
//               </p>
//               <p className="input-hint mt-1">
//                 It must be a JPG, PNG, GIF, or BMP, no larger than 20 MB.
//               </p>
//             </div>
//           </label>
//         </div>
//         {/* EIGHT */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             NO OF SUBSCRIPTIONS AVAILABLE
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             NO OF SUBSCRIPTIONS SECURED
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         {/* NINTH */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             NO OF SUBSCRIPTIONS REMAINING £
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             TOTAL RAISED £
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         {/* TENTH */}
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             TOTAL REMAINING £
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//         <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
//           <label className="text-xs font-sailec font-semibold mb-2 pt-3">
//             AIME INVESTED TOTAL £
//           </label>
//           <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Table;

import React, { useRef } from "react";
import ViewIcon from "./icons/ViewIcon";
import EditIcon from "./icons/EditIcon";
import DateIcon from "./icons/DateIcon";
import DeleteIcon from "./icons/DeleteIcon";
import ImageIcon from "./icons/ImageIcon";
import DropdownIcon from "./icons/DropdownIcon";

import Modal from "./Modal";

const Table = ({
  columns,
  data,
  actions,
  showModal,
  setShowModal,
  modalType,
  tableType,
}) => {
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
                {actions.map((action, index) => (
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
      >
        {/* Modal Content */}
        {tableType === "PROJECTS" && (
          <>
            {/* Modal Content */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                NAME
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                EMAIL
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            {/* Second */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                TITLE
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                DESCRIPTION
              </label>
              <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            {/* Third */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                FAQS
              </label>
              <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                UPDATES
              </label>
              <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            {/* Forth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                PROJECT SUB TITLES
              </label>
              <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
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
            {/* Fifth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="aime-ventures-backing"
              >
                PROJECT CATEGORY
              </label>
              <div className="relative">
                <select
                  id="aime-ventures-backing"
                  className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
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
                htmlFor="aime-ventures-backing"
              >
                LAUNCH DATE
              </label>
              <div className="relative">
                <select
                  id="aime-ventures-backing"
                  className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
                >
                  <option value="">SELECT</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <DropdownIcon />
                </div>
              </div>
            </div>
            {/* Sixth */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="project-category"
              >
                PROJECT START DATE
              </label>
              <input
                type="date"
                id="project-category"
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
              />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 pt-2">
              <label
                className="block text-xs font-sailec font-semibold mb-2 pt-3"
                htmlFor="launch-date"
              >
                PROJECT END DATE
              </label>
              <input
                type="date"
                id="launch-date"
                className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white appearance-none pr-8"
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
                <input type="file" id="project-video-file" className="hidden" />
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
            {/* EIGHT */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                NO OF SUBSCRIPTIONS AVAILABLE
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                NO OF SUBSCRIPTIONS SECURED
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            {/* NINTH */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                NO OF SUBSCRIPTIONS REMAINING £
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                TOTAL RAISED £
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            {/* TENTH */}
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                TOTAL REMAINING £
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                AIME INVESTED TOTAL £
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
          </>
        )}
        {tableType === "BACKERS" && (
          <>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                ORDER NUMBER
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                PROJECT NAME
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                MEMBER NAME
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                STATUS
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2">
                PLEDGE MONEY
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                STATUS
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4 -ml-2 pt-2">
              <label className="text-xs font-sailec font-semibold mb-2 pt-3">
                DESCRIPTION
              </label>
              <textarea className="w-full h-[137px] px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
            <div className="flex flex-col mx-auto md:w-1/2 px-2 mb-4">
              <label className="text-xs font-sailec font-semibold mb-2 pt-2">
                DESCRIPTION
              </label>
              <input className="w-full px-3 py-2 border-[1px] border-[#202124] rounded-md bg-white" />
            </div>
          </>
        )}
        {tableType === "PROJECT CATEGORIES" && (
          <>
            <div className="flex flex-col">
              <div className="flex flex-col mx-auto md:w-1/2 px-6 mb-4 -ml-2 pt-2">
                <label className="text-xs font-sailec font-semibold leading-4 tracking-wide uppercase text-black mb-2 pt-3">
                  PROJECT CATEGORY TITLE
                </label>
                <input className="w-[365px] h-[56px] bg-white border border-[#202124] rounded-md px-3" />
              </div>
              <div className="flex flex-col mx-auto md:w-1/2 px-6 mb-4 -ml-2 pt-2">
                <label className="text-xs font-sailec font-semibold leading-4 tracking-wide uppercase text-black mb-2 pt-3">
                  PROJECT CATEGORY ID
                </label>
                <input className="w-[365px] h-[56px] bg-white border border-[#202124] rounded-md px-3" />
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Table;
