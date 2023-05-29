// import React from "react";
// import Sidebar from "../components/Sidebar";
// import CircularProgressBar from "../components/CircularProgressBar";

// const Dashboard = () => {
//   const stats = [
//     { progress: 45, text: "Number of Active Projects" },
//     { progress: 70, text: "Number of Backers" },
//     { progress: 80, text: "Number of Financial Money Raised" },
//     { progress: 60, text: "Average Backer Transaction Value" },
//   ];
//   const bgColors = [
//     "bg-blue-700",
//     "bg-purple-700",
//     "bg-yellow-700",
//     "bg-green-700",
//   ];
//   return (
//     <div className="screen-background min-h-screen flex">
//       <Sidebar />
//       <div className="flex flex-col w-full ml-70">
//         <div className="flex justify-between items-center px-4 py-2">
//           <h1 className="text-black text-lg font-roboto tracking-wide">
//             <b>DASHBOARD</b> / HOME
//           </h1>
//           <button className="text-white text-xs font-semibold bg-blue-700 py-2 px-4 mx-2 rounded">
//             Add New Project
//           </button>
//         </div>
//         <div className="flex justify-between items-center">
//           {stats.map((stat, i) => (
//             <div
//               className={`flex flex-col items-center justify-center p-5 w-1/4 text-white ${bgColors[i]}`}
//               key={i}
//             >
//               <CircularProgressBar progress={stat.progress} />
//               <p className="mt-2">{stat.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Sidebar from "../components/Sidebar";
import CircularProgressBar from "../components/CircularProgressBar";
import CustomLineChart from "../components/CustomLineChart";

const Dashboard = () => {
  const stats1 = [
    { progress: 45, text: "Number of Active Projects" },
    { progress: 70, text: "Number of Backers" },
    { progress: 80, text: "Number of Financial Money Raised" },
    { progress: 60, text: "Average Backer Transaction Value" },
  ];
  const bgColors1 = [
    "bg-custom-blue",
    "bg-custom-pink",
    "bg-custom-olive",
    "bg-custom-green",
  ];

  const stats3 = [
    { progress: 37, text: "Number of Financial Money Raised" },
    { progress: 41, text: "Average Backer Transaction Value" },
  ];

  const bgColors3 = ["bg-custom-olive", "bg-custom-green"];
  return (
    <div className="screen-background min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full ml-70">
        <div className="flex justify-between items-center px-4 py-2 mt-3">
          <h1 className="text-black text-lg font-roboto tracking-wide">
            <b>DASHBOARD</b> / HOME
          </h1>
          <button className="text-white text-xs font-semibold bg-blue-700 py-2 px-4 mx-2 rounded">
            Add New Project
          </button>
        </div>
        <div className="flex justify-between items-center px-4 space-x-4 mt-6">
          {stats1.map((stat, i) => (
            <div
              className={`flex flex-col items-center justify-center rounded p-2 w-1/4 text-white ${bgColors1[i]}`}
              key={i}
            >
              <CircularProgressBar percentage={stat.progress} size="30%" />
              <p className="mt-2 mb-5">{stat.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center px-4 space-x-4 mt-6">
          <div
            className={`flex flex-col items-center justify-center rounded p-2 w-1/2 text-white ${"bg-custom-blue"}`}
          >
            <p className="mb-5">
              {"Total Number of Active Project Progress Chart"}
            </p>
            <CustomLineChart />
          </div>
          <div
            className={`flex flex-col items-center justify-center rounded p-2 w-1/2 text-white ${"bg-custom-pink"}`}
          >
            <p className="mb-5">{"Total Numbers of Backers"}</p>
            <CircularProgressBar percentage={32} size="30%" />
          </div>
        </div>
        <div className="flex justify-between items-center px-4 space-x-4 mt-6">
          {stats3.map((stat, i) => (
            <div
              className={`flex flex-col items-center justify-center rounded p-2 w-1/2 text-white ${bgColors3[i]}`}
              key={i}
            >
              <p className="mb-4">{stat.text}</p>
              <CircularProgressBar percentage={stat.progress} size="30%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
