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

//create a treated data tha is used to plot the chart
export function dataTreatment(data) {
  let groups = [];
  let selectors = [];
  let supportArray = [];
  let supportArray2 = [];
  let supportArray3 = [];
  let supportArray4 = [];
  let supportArray5 = [];
  let supportArray6 = [];
  let startStop = [];
  let dataJson = "[" + data + "]";
  dataJson = dataJson.replaceAll("}", "},");
  dataJson = JSON5.parse(dataJson);
  //checking mutation data to JSON
  /* try {
    dataJson = JSON5.parse(dataJson);
  } catch (error) {
    return alert(error);
  } */
  //create an new data array with 'groups' selected
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

  //create a new data array with 'groups' selected
  dataJson.forEach((e) => {
    groups.forEach((a) => {
      if (e.hasOwnProperty(a)) {
        supportArray.push(e);
      }
    });
  });
  supportArray = Array.from(
    new Set(supportArray.map(JSON.stringify)),
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

  supportArray.forEach((e) => {
    selectors.forEach((a) => {
      if (e.hasOwnProperty(a)) {
        supportArray2.push(e);
      }
    });
  });
  supportArray2 = Array.from(
    new Set(supportArray2.map(JSON.stringify)),
    JSON.parse
  );

  //remove all elements that doesn't contain type:data
  supportArray2.forEach((e) => {
    if (e.type === "data") {
      supportArray3.push(e);
    }
  });

  //remove all elements that doesn't contain timestamp or if timestamp isNaN
  supportArray3.forEach((e) => {
    if (e.hasOwnProperty("timestamp") && typeof e.timestamp === "number") {
      supportArray4.push(e);
    }
  });

  supportArray4.forEach((e) => {
    let groupArray = [];
    for (let i = 0; i < groups.length; i++) {
      if (e.hasOwnProperty(groups[i])) {
        groupArray.push(e[groups[i]]);
      }
    }
    e["groups"] = groupArray;

    supportArray5.push(e);
  });
  //group events in arrays separetd by their especific groups
  supportArray5.forEach((e) => {
    let supArray = [];
    supportArray5.forEach((f) => {
      if (e.groups.sort().toString() === f.groups.sort().toString()) {
        supArray.push(f);
      }
    });
    supportArray6.push(supArray);
  });
  supportArray6 = Array.from(
    new Set(supportArray6.map(JSON.stringify)),
    JSON.parse
  );
  supportArray6 = supportArray6.filter((e) => e.length);
  
  return [supportArray6, selectors, groups, startStop];
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
