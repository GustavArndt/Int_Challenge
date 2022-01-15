import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Options } from "./Options";
import {dataTreatment} from "../../Functions";
import { chartCreator } from "../chart/GraphGenerator";
Chart.register(...registerables);

const JSON5 = require("json5");

export default function ChartInterface(props) {
  return (
    <div className="chart-interface">
      {
        <Line
          data={chartCreator(dataTreatment(props.chartData), props.colors)}
          options={Options(props.xLimits)}
        />
      }
    </div>
  );
}
