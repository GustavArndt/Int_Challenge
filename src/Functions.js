import randomColor from "randomcolor";
const JSON5 = require("json5");
var _ = require("lodash");

//create random colors to color state
export function colorGenerator() {
  let colors = [];
  for (let i = 0; i < 100; i++) {
    colors.push(randomColor());
  }

  return colors;
}

export function dataTreatment(data) {
  let groups = [];
  let selectors = [];
  let newDataArray = [];
  let newDataArray2 = [];
  let suppArrayData = [];
  let suppArrayData2 = [];
  let newDataArray3 = [];
  let newDataArray4 = [];
  let startStop = [];
  let dataJson = "[" + data + "]";
  dataJson = dataJson.replaceAll("}", "},");

  //checking mutation data to JSON
  try {
    dataJson = JSON5.parse(dataJson);
  } catch (error) {
    return alert(error);
  }
  //create an new data array with groups selected
  dataJson.forEach((e) => {
    if (e.type === "start") {
      e.group.forEach((g) => {
        groups.push(g);
      });
    }
  });
  //create Xlimits
  dataJson.forEach((e) => {
    if (e.type === "span") {
      startStop.push(e.begin);
      startStop.push(e.end);
    } else {
      //create Xinitial limit
      dataJson.forEach((e) => {
        if (e.type === "start") {
          startStop.push(e.timestamp);
        }
      });
      //create Xfinal limit
      dataJson.forEach((e) => {
        if (e.type === "stop") {
          startStop.push(e.timestamp);
        }
      });
    }
  });

  //create a new data array with groups selected
  dataJson.forEach((e) => {
    groups.forEach((a) => {
      if (e.hasOwnProperty(a)) {
        newDataArray.push(e);
      }
    });
  });
  newDataArray = Array.from(
    new Set(newDataArray.map(JSON.stringify)),
    JSON.parse
  );

  //create a new data array with selectors selected
  dataJson.forEach((e) => {
    if (e.type === "start") {
      e.select.forEach((g) => {
        selectors.push(g);
      });
    }
  });

  newDataArray.forEach((e) => {
    selectors.forEach((a) => {
      if (e.hasOwnProperty(a)) {
        newDataArray2.push(e);
      }
    });
  });
  newDataArray2 = Array.from(
    new Set(newDataArray2.map(JSON.stringify)),
    JSON.parse
  );

  //remove all elements that doesn't contain type:data
  newDataArray2.forEach((e) => {
    if (e.type === "data") {
      suppArrayData.push(e);
    }
  });

  //remove all elements that doesn't contain timestamp or if timestamp isNaN
  suppArrayData.forEach((e) => {
    if (e.hasOwnProperty("timestamp") && typeof e.timestamp === "number") {
      suppArrayData2.push(e);
    }
  });

  suppArrayData2.forEach((e) => {
    let groupArray = [];
    for (let i = 0; i < groups.length; i++) {
      if (e.hasOwnProperty(groups[i])) {
        groupArray.push(e[groups[i]]);
      }
    }
    e["groups"] = groupArray;

    newDataArray3.push(e);
  });

  newDataArray3.forEach((e) => {
    let supArray = [];
    newDataArray3.forEach((f) => {
      if (e.groups.sort().toString() === f.groups.sort().toString()) {
        supArray.push(f);
      }
    });
    newDataArray4.push(supArray);
  });
  newDataArray4 = Array.from(
    new Set(newDataArray4.map(JSON.stringify)),
    JSON.parse
  );
  newDataArray4 = newDataArray4.filter((e) => e.length);

  return [newDataArray4, selectors, groups, startStop];
}
//create limits in x(timescale)
export function xLimitsCreator(data) {
  let startStop = [];
  let dJson = "[" + data + "]";
  dJson = dJson.replaceAll("}", "},");

  //checking mutation data to JSON
  try {
    dJson = JSON5.parse(dJson);
  } catch (error) {
    return alert(error);
  }

  //if we have start and stop
  dJson.forEach((e) => {
    if (e.type === "start") {
      startStop.push(e.timestamp);
    }
    if (e.type === "stop") {
      startStop.push(e.timestamp);
    }
  });

  // but if we have a span
  dJson.forEach((e) => {
    if (e.type === "span") {
      if (e.hasOwnProperty("begin")) {
        startStop[0] = e.begin;
      }
      if (e.hasOwnProperty("end")) {
        startStop[1] = e.end;
      }
    }
  });

  return startStop;
}
