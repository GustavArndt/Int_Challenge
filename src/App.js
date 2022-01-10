import Split from "react-split";
import InputInterface from "./components/input/InputInterface";
import ChartInterface from "./components/chart/ChartInterface";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
          <InputInterface />
          <ChartInterface />
        </Split>
      </div>
      <Footer />
    </div>
  );
}

export default App;
