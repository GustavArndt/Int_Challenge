import react, { useState, useEffect } from "react";

export default function InputCreator() {
  const [data, setData] = useState([{ id: 0, query: "ola" }]);

  function handleInputChange(index, e) {
    let newArr = [...data];
    newArr[index].query = e.target.value;
    setData(newArr);
    console.log(data);
    console.log(data.length, index);
    if (index === data.length - 1) {
      const newMessage = { id: index + 1, query: "" };
      const addData = [...data, newMessage];
      setData(addData);
      console.log(data);
    }
  }

  function newLine(line, e) {}

  return (
    <form>
      {data.map((dt) => {
        return (
          <div className="line">
            <div className="index">
              <span>{dt.id}</span>
            </div>
            <div className="input">
              <input
                key={dt.id}
                value={dt.query}
                onChange={(e) => handleInputChange(dt.id, e)}
                name={dt.id}
                label={dt.id}
                onKeyPress={(e) => newLine(dt.id, e)}
              />

              <div className="footer">
                <div className="chart-gntr">
                  <input
                    className="generate-chart"
                    type="submit"
                    value="GENERATE CHART"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </form>
  );
}
