import React from "react";
import { xLimitsCreator } from "../Functions";
import createData2, { createSpan, createStart } from "./chart/CreateDataSets";
const JSON5 = require("json5");

/* check if the data is possible to convert to JSON.
if no: retrieve the lastState data.
if yes: get the actual data events */

function validate(data, lastState) {
  try {
    let dt = "[" + data + "]";
    dt = dt.replaceAll("}", "},");
    JSON5.parse(dt);
    return data;
  } catch (error) {
    alert(error);
    return lastState;
  }
}

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="chart-gntr">
        <button
          onClick={() => {
            const fData = validate(props.events, props.chartData);
            props.setXLimits(xLimitsCreator(fData));
            props.setChartData(fData);
          }}
        >
          GENERATE CHART
        </button>
      </div>
    </div>
  );
}
