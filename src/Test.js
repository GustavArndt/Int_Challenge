import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";

Chart.register(...registerables);

export const options = {
  scales: {
    y: {
        
      grid: {
        tickLength: 8,
      },
      max: 2,
      min: 0,
      ticks: {
          display:false,
        stepSize: 0.4,
      },
    },
    x: {
      type: "time",
      grid:{
        display:false
      },
      ticks: {
        maxRotation: 100,
        minRotation: 80,
      },
      time: {
        format: "ss",
        tooltipFormat: "ss",
        unit: "second",
        stepSize: 60,
        displayFormats: {
          minute: "ss",
          hour: "ss",
          second:"hh:mm"
        },
      },
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
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

export const data = {
  datasets: [
    {
      label: "Dataset 1",
      data: [
        {x:1519862400000,y:0.5},{x:1519862460000,y:0.7},{x:1519862465000,y:0.9}
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function Test() {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
