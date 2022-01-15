import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { graphGenerator}from "./GraphGenerator";
import { Options } from "./Options";
import createData2, {createData} from './CreateDataSets'
import { chartCreator } from "../../Test2";
import Test from "../../Test";
Chart.register(...registerables);

const JSON5 = require("json5");

export default function ChartInterface(props) {
  
 

  function isJson(data) {
    try {
      let dataJson = "[" + data + "]";
      dataJson = JSON5.parse(dataJson);
      dataJson=createData(dataJson)
      console.log('dataJson')
      console.log(dataJson)
      return dataJson;
    } catch (error) {
      props.setChartData("{type: 'data', timestamp: '0.1', os: 'linux', browser: 'firefox', min_response_time: 0.7, max_response_time: 1.3}"+","+"{type: 'data', timestamp: '0.4', os: 'linux', browser: 'firefox', min_response_time: 0.9, max_response_time: 1.3}")
      alert("SyntaxError: Check your data interface for mistakes");
      alert(error)

      return [
        {
          type: "data",
          timestamp: "0.1",
          os: "linux",
          browser: "chrome",
          min_response_time: 0.1,
          max_response_time: 1.3,
        },
        {
          type: "data",
          timestamp: "0.2",
          os: "linux",
          browser: "chrome",
          min_response_time: 0.2,
          max_response_time: 0.9,
        },
      ];
    }
  }

  return (
    <div className="chart-interface">
      {
       /*   <Line
          data={graphGenerator(isJson(props.chartData), props.colors)}
          options={Options(props.xLimits)}
        />  */
      }
      {
         <Line
          data={chartCreator(createData2(props.chartData))}
          options={Options(props.xLimits)}
        /> 
      }
      {/* {<Test/>} */}
    </div>
  );
}
