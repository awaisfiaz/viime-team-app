import React from "react";

const ProgressChart = ({ percentage, size }) => {
  const strokeWidth = "2";
  const width = 100;
  const filledWidth = (percentage / 100) * width;

  return (
    <svg
      width={size || "100%"}
      height={size ? size / 2 : "20%"}
      viewBox={`0 0 ${width} 10`}
    >
      <rect
        x="0"
        y="0"
        width={width}
        height="10"
        fill="transparent"
        stroke="#ffff"
        strokeOpacity="0.1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="0"
        y="0"
        width={filledWidth}
        height="10"
        fill="none"
        stroke="#ffff"
        strokeWidth={strokeWidth}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="white"
        fontSize="8px"
        fontFamily="sans-serif"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default ProgressChart;
