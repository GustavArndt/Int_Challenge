import Split from "react-split";
import InputInterface from "./components/input/InputInterface";
import ChartInterface from "./components/chart/ChartInterface";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";

import { colorGenerator } from "./components/chart/GraphGenerator";

//test
import {data_test} from './Test'
import {createData} from './Test'
import { createSpan } from "./components/chart/CreateDataSets";
 
function App() {
  const [colors, setColors] = useState(colorGenerator);
  const [events, setEvents] = useState(
    "{type: 'start', timestamp: 1519862400000, select:['min_response_time'], group:['os','browser']}\n{type: 'span', timestamp: 1519862400000, begin:1519862400000, end:1519862460000}\n{type:'data', timestamp:1519862400000, os:'linux', browser:'chrome', min_response_time: 0.5, max_response_time:1.3}\n{type:'data', timestamp:1519862460000, os:'linux', browser:'chrome', min_response_time: 0.7, max_response_time:1.3}\n{type:'data', timestamp:1519862465000, os:'linux', browser:'IE', min_response_time: 0.9, max_response_time:1.3}\n{type:'data', timestamp:1519862400000, os:'mac', browser:'chrome', min_response_time: 0.5, max_response_time:1.3}\n{type:'data', timestamp:1519862460000, os:'mac', browser:'chrome', min_response_time: 0.7, max_response_time:1.3}\n{type:'data', timestamp:1519862465000, os:'mac', browser:'IE', min_response_time: 0.9, max_response_time:1.3}\n{type: 'stop', timestamp: 1519862460000}"
  );
  const [xLimits,setXLimits]=useState([1519780251293,1519780260201])

  const [chartData, setChartData] = useState(
    "{type: 'start', timestamp: 1519862400000, select:['min_response_time'], group:['os','browser']}{type: 'span', timestamp: 1519862400000, begin:1519862400000, end:1519862460000}{type:'data', timestamp:1519862400000, os:'linux', browser:'chrome', min_response_time: 0.5, max_response_time:1.3}{type:'data', timestamp:1519862460000, os:'linux', browser:'chrome', min_response_time: 0.7, max_response_time:1.3} {type:'data', timestamp:1519862465000, os:'linux', browser:'IE', min_response_time: 0.9, max_response_time:1.3}  {type:'data', timestamp:1519862400000, os:'mac', browser:'chrome', min_response_time: 0.5, max_response_time:1.3}   {type:'data', timestamp:1519862460000, os:'mac', browser:'chrome', min_response_time: 0.7, max_response_time:1.3}  {type:'data', timestamp:1519862465000, os:'mac', browser:'IE', min_response_time: 0.9, max_response_time:1.3} {type: 'stop', timestamp: 1519862460000}"
  );
  
  //test
  
  return (
    <div className="App">
      <Header />
      <div className="data-screen">
        <Split
          sizes={[20, 80]}
          direction="vertical"
          cursor="row-resize"
          gutterSize={20}
          className="split-flex"
        >
          <InputInterface setEvents={setEvents} events={events} />
          <ChartInterface xLimits={xLimits} chartData={chartData} colors={colors} setChartData={setChartData}/>
        </Split>
      </div>
      <Footer setChartData={setChartData} events={events} setXLimits={setXLimits}/>
    </div>
  );
}

export default App;
