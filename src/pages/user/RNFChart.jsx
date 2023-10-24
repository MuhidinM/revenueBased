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

export default function RNFChart() {
  const getPreviousMonths = (dateString) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date(dateString);
    const currentMonthIndex = currentDate.getMonth();
    const previousMonths = [];

    for (let i = 0; i <= 5; i++) {
      const previousMonthIndex = currentMonthIndex - i;

      if (previousMonthIndex >= 0) {
        previousMonths.unshift(months[previousMonthIndex]);
      } else {
        previousMonths.unshift(months[12 + previousMonthIndex]);
      }
    }

    return previousMonths;
  };
  const currentDate = new Date().toISOString().split("T")[0];

  console.log(getPreviousMonths(currentDate));

  const data = [
    {
      name: "Sales",
      sales: 2400,
      amt: 2400,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#37CDBE"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
