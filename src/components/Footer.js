import React from "react";
import { xLimitsCreator } from "../Functions";
import { chartCreator } from "../Test2";

import createData2, { createSpan, createStart } from "./chart/CreateDataSets";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="chart-gntr">
        <button
          onClick={() => {
            props.setXLimits(xLimitsCreator(props.events));
            props.setChartData(props.events);
          }}
        >
          GENERATE CHART
        </button>
      </div>
    </div>
  );
}
