// import React from "react";
// import CrossIcon from "./icons/CrossIcon";

// const Modal = ({ showModal, setShowModal, modalType, children }) => {
//   const handleClose = () => {
//     setShowModal(false);
//   };

//   const headerText =
//     modalType === "VIEW" ? "VIEW" : modalType === "ADD" ? "ADD NEW" : "EDIT";

//   return (
//     <>
//       {showModal ? (
//         <>
//           <div
//             className="fixed inset-0 bg-black opacity-75 z-10"
//             onClick={handleClose}
//           />
//           <div
//             className="fixed inset-x-0 mx-auto top-16 bg-screen-bg rounded-md shadow-lg p-10 w-11/12 max-w-4xl z-20 overflow-y-auto"
//             style={{
//               maxHeight: "80vh",
//               scrollbarWidth: "thin",
//               scrollbarColor: "#5A5A5A transparent",
//             }}
//           >
//             {modalType !== "DELETE" && (
//               <div className="flex justify-between items-center">
//                 <h2 className=" text-lg font-thin font-roboto">
//                   <span className="font-bold">PROJECTS</span> / {headerText}
//                 </h2>
//                 <div className="cursor-pointer mx-4" onClick={handleClose}>
//                   <CrossIcon />
//                 </div>
//               </div>
//             )}

//             {modalType === "DELETE" ? (
//               <>
//                 <p className="text-center font-semibold mb-8">
//                   Are you Sure do you want to Delete this Project?
//                 </p>
//                 <div className="flex justify-end gap-4">
//                   <button
//                     className="flex justify-center items-center w-40 h-12 bg-no-btn-bg rounded text-sidebar-bg font-semibold"
//                     onClick={handleClose}
//                   >
//                     No
//                   </button>
//                   <button
//                     className="flex justify-center items-center w-40 h-12 bg-sidebar-bg rounded text-white font-semibold"
//                     onClick={handleClose}
//                   >
//                     Yes
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="flex flex-wrap mt-4 mx-1">{children}</div>
//             )}

//             {modalType !== "VIEW" && modalType !== "DELETE" && (
//               <div className="flex justify-end mt-5">
//                 <button
//                   className="flex flex-row items-center justify-center gap-2 w-14 h-8 bg-black rounded text-white text-sm font-semibold mx-1 px-8 py-4"
//                   onClick={handleClose}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="flex flex-row items-center justify-center gap-2 w-11 h-8 bg-blue-700 rounded text-white text-sm font-semibold px-8 py-4 mr-4"
//                   onClick={handleClose}
//                 >
//                   Save
//                 </button>
//               </div>
//             )}
//             <style jsx>{`
//               ::-webkit-scrollbar {
//                 width: 8px;
//               }

//               ::-webkit-scrollbar-track {
//                 background: transparent;
//               }

//               ::-webkit-scrollbar-thumb {
//                 background-color: #5a5a5a;
//                 border-radius: 20px;
//               }
//             `}</style>
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// };

// export default Modal;

import React from "react";
import CrossIcon from "./icons/CrossIcon";

const Modal = ({ showModal, setShowModal, modalType, tableType, children }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  const headerText =
    modalType === "VIEW" ? "VIEW" : modalType === "ADD" ? "ADD NEW" : "EDIT";

  return (
    <>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 bg-black opacity-75 z-10"
            onClick={handleClose}
          />
          <div
            className={`fixed inset-x-0 mx-auto ${
              modalType === "DELETE"
                ? "top-1/2 transform -translate-y-1/2"
                : "top-16"
            } bg-screen-bg rounded-md shadow-lg p-10 w-11/12 ${
              modalType === "DELETE" || tableType === "PROJECT CATEGORIES"
                ? "max-w-lg"
                : "max-w-4xl"
            } z-20 overflow-y-auto`}
            style={{
              maxHeight: "80vh",
              scrollbarWidth: "thin",
              scrollbarColor: "#5A5A5A transparent",
            }}
          >
            {modalType !== "DELETE" && (
              <div className="flex justify-between items-center">
                <h2 className=" text-lg font-thin font-roboto">
                  <span className="font-bold">{tableType}</span> / {headerText}
                </h2>
                <div className="cursor-pointer mx-4" onClick={handleClose}>
                  <CrossIcon />
                </div>
              </div>
            )}

            {modalType === "DELETE" ? (
              <>
                <p className="text-left font-semibold mb-12">
                  Are you Sure do you want to Delete this Project
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    className="flex justify-center items-center w-40 h-12 bg-no-btn-bg rounded text-sidebar-bg font-semibold"
                    onClick={handleClose}
                  >
                    No
                  </button>
                  <button
                    className="flex justify-center items-center w-40 h-12 bg-sidebar-bg rounded text-white font-semibold"
                    onClick={handleClose}
                  >
                    Yes
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-wrap mt-4 mx-1">{children}</div>
            )}

            {modalType !== "VIEW" && modalType !== "DELETE" && (
              <div className="flex justify-end mt-5">
                <button
                  className="flex flex-row items-center justify-center gap-2 w-14 h-8 bg-black rounded text-white text-sm font-semibold mx-1 px-8 py-5 mr-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="flex flex-row items-center justify-center gap-2 w-11 h-8 bg-blue-700 rounded text-white text-sm font-semibold px-8 py-5 mr-6"
                  onClick={handleClose}
                >
                  Save
                </button>
              </div>
            )}
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
        </>
      ) : null}
    </>
  );
};

export default Modal;
