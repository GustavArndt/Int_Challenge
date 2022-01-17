import React from "react";
import { xLimitsCreator } from "../Functions";

const JSON5 = require("json5");

/* This function check if the data is possible to convert to JSON.
In case of negative: retrieve the lastState data.
In case of positive: get the actual data events */
function validate(data, lastState) {
  try {
    let dt = "[" + data + "]";
    dt = dt.replaceAll("}", "},");
    JSON5.parse(dt);
    return data;
  } catch (error) {
    alert(error);
    alert('Fix the errors and try it again')
    return lastState;
  }
}

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="chart-gntr">
        <button
          onClick={() => {
            const validatedData = validate(props.events, props.chartData);
            props.setXLimits(xLimitsCreator(validatedData));
            props.setChartData(validatedData);
          }}
        >
          GENERATE CHART
        </button>
      </div>
    </div>
  );
}
