import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";

Chart.register(...registerables);

export function Options(xLimits) {
  return {
    
    scales: {
      y: {
        grid: {
          drawBorder: false,
          tickLength: 8,
        },
        max: 2,
        min: 0,
        ticks: {
          display: false,
          stepSize: 0.4,
        },
      },
      x: {
        min: xLimits[0],
        max: xLimits[1],
        type: "time",
        grid: {
          display: false,
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
            second: "hh:mm",
          },
        },
      },
    },
    responsive: true,
    elements: {
      line: {
        tension: 0, // disables bezier curves
      },
    },
    tension: 1,
    plugins: {
      legend: {
        align: "start",
        position:'right',
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          paddingTop: 47,
        },
        
        grid: {
          display: false,
        },
        display: true,
        
      },
    },
  };
}
