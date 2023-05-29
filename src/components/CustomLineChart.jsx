import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Project A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Project B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Project C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Project D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Project E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Project F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Project G", uv: 3490, pv: 4300, amt: 2100 },
];

const CustomLineChart = () => (
  <ResponsiveContainer width="89%" height={200}>
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#ffff" strokeOpacity="0.1" />
      <XAxis dataKey="name" stroke="#ffff" />
      <YAxis stroke="#ffff" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#ffff"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default CustomLineChart;
