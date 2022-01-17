import Split from "react-split";
import InputInterface from "./components/input/InputInterface";
import ChartInterface from "./components/chart/ChartInterface";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { colorGenerator } from "./Functions";
import { defaultEvent } from "./Constants";
//test

function App() {
  const [colors, setColors] = useState(colorGenerator);//set random colors used in the chart
  const [events, setEvents] = useState(defaultEvent); //input data
  const [chartData, setChartData] = useState(defaultEvent); //chart data
  const [lastState, setLastState] = useState([]);//last state is used if we get some error
  const [xLimits, setXLimits] = useState([1519862400000, 1519862460000]);

  return (
    <div className="App">
      <Header />
      <div className="data-screen">
        <Split
          sizes={[20, 80]}
          minSize={[100, 100]}
          direction="vertical"
          cursor="row-resize"
          gutterSize={20}
          className="split-flex"
        >
          <InputInterface setEvents={setEvents} events={events} />
          <ChartInterface
            xLimits={xLimits}
            chartData={chartData}
            colors={colors}
            setChartData={setChartData}
            setLastState={setLastState}
            lastState={lastState}
          />
        </Split>
      </div>
      <Footer
        chartData={chartData}
        setChartData={setChartData}
        events={events}
        setXLimits={setXLimits}
        setLastState={setLastState}
        lastState={lastState}
      />
    </div>
  );
}

export default App;
