import Split from "react-split";

function Test() {
  return (
    <div className="App">
      <Split
        sizes={[20, 26]}
        direction="vertical"
        cursor="row-resize"
        className="split-flex"
      >
        <div className="gustavo">Gustavo</div>
        <div className="layla">Layla</div>
      </Split>
    </div>
  );
}

export default Test;
