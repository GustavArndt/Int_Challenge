import InputInterface from "./components/input/InputInterface";
import ChartInterface from "./components/chart/ChartInterface";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="data-screen">
        <InputInterface />
        <ChartInterface />
      </div>
      <Footer />
    </div>
  );
}

export default App;
