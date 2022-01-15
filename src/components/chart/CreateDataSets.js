const JSON5 = require("json5");
var _ = require("lodash");

export function createData(data) {
  let groupTypes = [];
  let groupTypesBrowser = [];
  let finalData = [];
  let dataTypes = [];
  let group = [];
  let select = [];

  //chosing groups and select
  data.forEach((events) => {
    if (events.type === "start") {
      events.select.forEach((s) => select.push(s));
      events.group.forEach((s) => group.push(s));
    }
  });
  console.log("gourps");
  console.log(group);
  console.log(select);

  data.forEach((event) => {
    console.log("event");
    if (event.type === "data") {
      console.log("datatypes");
      console.log(event);
      dataTypes.push(event);
    }
  });

  console.log("datatypearray");
  console.log(dataTypes);

  dataTypes.forEach((event) => {
    console.log("event");
    console.log([event.os, event.browser]);
    groupTypes.push([event.os, event.browser]);
  });
  console.log("datanor,a");
  console.log(data);
  for (let l = 0; l < groupTypes.length; l++) {
    let supportArray = [];
    for (let k = 0; k < dataTypes.length; k++) {
      console.log("dataK");
      console.log([dataTypes[k].os, dataTypes[k].browser]);
      console.log("groupTypes");
      console.log([groupTypes[l]]);
      if (
        dataTypes[k].os === groupTypes[l][0] &&
        dataTypes[k].browser === groupTypes[l][1]
      ) {
        console.log("é igual");
        supportArray.push(dataTypes[k]);
      }
    }
    finalData.push(supportArray);
  }
  finalData = Array.from(new Set(finalData.map(JSON.stringify)), JSON.parse);
  console.log(groupTypes);
  console.log("finaldata");
  console.log(finalData);
  return finalData;
}

export function createSpan(data) {
  let dataJson = "[" + data + "]";
  dataJson = JSON5.parse(dataJson);
  let finalSpan = [];
  dataJson.forEach((spanEvent) => {
    if (spanEvent.type === "span") {
      finalSpan.push(spanEvent);
    }
  });

  return [finalSpan[0].begin, finalSpan[0].end];
}

export default function createData2(data) {
  let groups = [];
  let selectors = [];
  let newDataArray = [];
  let newDataArray2 = [];
  let suppArrayData=[]
  let suppArrayData2=[]
  let newDataArray3 = [];
  let newDataArray4 = [];
  let dataJson = "[" + data + "]";
  dataJson = dataJson.replaceAll("}", "},");
  console.log("datajson com virgula");
  console.log(dataJson);

  //checking mutation data to JSON
  try {
    dataJson = JSON5.parse(dataJson);
    console.log("dataJson");
    console.log(dataJson);
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
  console.log("groups");
  console.log(groups);
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
  console.log("newDataArray");
  console.log(newDataArray);
  //create a new data array with selectors selected
  dataJson.forEach((e) => {
    if (e.type === "start") {
      e.select.forEach((g) => {
        selectors.push(g);
      });
    }
  });
  console.log("selectors");
  console.log(selectors);
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
  console.log("newDataArray2");
  console.log(newDataArray2);
  //remove all elements that doesn't contain type:data  
  newDataArray2.forEach((e)=>{
    if(e.type==='data'){
      suppArrayData.push(e)
    }
  })  
  console.log('supppArrayData')
  console.log(suppArrayData)

  //remove all elements that doesn't contain timestamp or if timestamp isNaN
  suppArrayData.forEach((e)=>{
    if(e.hasOwnProperty('timestamp')&&typeof e.timestamp==='number'){
      suppArrayData2.push(e)
    }
  })  
  console.log('supppArrayData2')
  console.log(suppArrayData2)
  
  suppArrayData2.forEach((e)=>{
    let groupArray=[]
    for(let i=0;i<groups.length;i++){
      if(e.hasOwnProperty(groups[i])){
        groupArray.push(e[groups[i]])
      }
    }
    e['groups'] = groupArray
    console.log(e)
    newDataArray3.push(e)
  })
  console.log('newDataArray3')
  console.log(newDataArray3)

  newDataArray3.forEach((e)=>{
    let supArray=[]
    newDataArray3.forEach((f)=>{
      if(e.groups.sort().toString()===f.groups.sort().toString()){
        supArray.push(f)
      }
    })
    newDataArray4.push(supArray)
  })
  newDataArray4 = Array.from(
    new Set(newDataArray4.map(JSON.stringify)),
    JSON.parse
  );
  newDataArray4 = newDataArray4.filter(e=>e.length)
  console.log('newDataArray4')
  console.log(newDataArray4)
  return [newDataArray4,selectors,groups]
}
