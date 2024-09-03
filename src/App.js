import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Commute", 2],
  ["Learn frontend", 2],
  ["Sleep", 7.5],
  ["Play with a cat", 1.5],
];

export const options = {
  title: "My Happy Daily Activities",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
