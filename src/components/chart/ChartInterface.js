import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { data_one, data_two } from "./Data";
import randomColor from 'randomcolor'

Chart.register(...registerables);

let dataPack = [data_one, data_two];

const generateGraph = (dt) => {
  let dataObject = {};
  let i=0
  let color =''
  let datasets = dt.map((con) => {
      i++
      color=randomColor()
    return {
      label: `set${i}`,
      backgroundColor: color,
      borderColor: color,
      data: con,
    };
  });
  dataObject = { datasets: datasets };
  return dataObject;
};

const options = {
  tension: 1,
  plugins: {
    legend: {
      align: "start",
      display: true,
      position: "right",
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
  },
};

export default function ChartInterface() {
  return (
    <div className="chart-interface">
      <Line data={generateGraph(dataPack)} options={options} />
    </div>
  );
}
