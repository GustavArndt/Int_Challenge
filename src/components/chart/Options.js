import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";//Make the use of timestamp in 'milliseconds' format possible

Chart.register(...registerables);

//This Function set the configuration of the chart
export function Options(xLimits) {
  return {
    
    scales: {
      y: {
        grid: {
          drawBorder: false,
          tickLength: 8,
        },
        min: 0,
        ticks: {
          display: false,
          stepSize: 0.3,
        },
      },
      x: {
        min: xLimits[0],
        max: xLimits[1],
        type: "time",
        grid: {
          display: false,
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
