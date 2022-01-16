import randomColor from "randomcolor";

//create the datatsets to use in the chartCreator function
function createDataSetes(data, selectors, colors) {
  let dataSets = [];
  let nada = selectors;

  selectors.forEach((selector, ind4) => {
    data.forEach((e, index) => {
      //create title
      let title = "";
      e[0].groups.forEach((x) => {
        title = `${x} ` + title;
      });
      title = title + selector;
      //create label colors
      let color = colors[index + ind4 + index];
      //create data
      let datas = [];
      e.forEach((s) => {
        datas.push({ x: s["timestamp"], y: s[selector] });
      });
      dataSets.push({
        label: title,
        data: datas,
        borderColor: color,
        backgroundColor: color,
      });
    });
  });
  return dataSets;
}

export function chartCreator(func, colors) {
  const data = func[0];
  const selectors = func[1];
  const groups = func[2];
  let dataSets = createDataSetes(data, selectors, colors);
  createDataSetes(data, selectors, colors);
  return {
    datasets: dataSets,
  };
}
