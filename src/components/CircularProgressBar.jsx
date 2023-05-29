import React from "react";

const CircularProgressBar = ({ percentage, size }) => {
  const circleConfig = {
    viewBox: "0 0 38 38",
    x: "19",
    y: "19",
    radius: "16",
  };
  const strokeWidth = "2";
  const circumference = 2 * Math.PI * circleConfig.radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size || "50%"}
      height={size || "50%"}
      style={{ transform: "rotate(-90deg)" }}
      viewBox={circleConfig.viewBox}
    >
      <circle
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radius}
        stroke="#ffff"
        strokeOpacity="0.1"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radius}
        stroke="#ffff"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="white"
        fontSize="8px"
        fontFamily="sans-serif"
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;

// import React from "react";

// const CircularProgressBar = ({ percentage, size }) => {
//   const strokeDasharray = "4.4 4.4";
//   const strokeColor = "#FFFFFF";
//   const strokeWidth = 15.1707;
//   const viewBox = "0 0 103 103";
//   const pathDefinition =
//     "M94.9569 54.1712C96.6056 30.1706 78.4857 9.37768 54.485 7.72901C30.4844 6.08033 9.69149 24.2002 8.04281 48.2008C6.39413 72.2015 24.514 92.9944 48.5147 94.6431C72.5153 96.2918 93.3082 78.1719 94.9569 54.1712Z";

//   const radius = 48;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (percentage / 100) * circumference;

//   return (
//     <svg
//       width={size || "50%"}
//       height={size || "50%"}
//       style={{ transform: "rotate(-90deg)" }}
//       viewBox={viewBox}
//     >
//       <path
//         d={pathDefinition}
//         stroke={strokeColor}
//         strokeOpacity="0.1"
//         strokeWidth={strokeWidth}
//         fill="none"
//         strokeDasharray={strokeDasharray}
//       />
//       <path
//         d={pathDefinition}
//         stroke={strokeColor}
//         strokeWidth={strokeWidth}
//         fill="none"
//         strokeDasharray={strokeDasharray}
//         strokeDashoffset={offset}
//       />
//       <text
//         x="50%"
//         y="50%"
//         textAnchor="middle"
//         stroke="#51c5cf"
//         strokeWidth="0.5px"
//         dy=".3em"
//         fill="white"
//         style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
//       >
//         {`${percentage}%`}
//       </text>
//     </svg>
//   );
// };

// export default CircularProgressBar;
