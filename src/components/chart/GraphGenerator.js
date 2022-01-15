import randomColor from "randomcolor";

export function graphGenerator(datapack, colors) {
  console.log("aqui data");
  console.log(datapack);
  try {
    const generate = typeAndTimeValidator(datapack);
    const color = colors;
    console.log(color);
    if (generate) {
      return chart(datapack, color);
    } else {
      return chartDefault();
    }
  } catch (error) {
    return alert(error);
  }
}

function chart(datapack, color) {
  let numberOfColor=0
  return {
    datasets: datapack.map((element) => {
      numberOfColor++
      let title = `${element[0].os} ${element[0].browser} ${Object.keys(
        element[0]
      )[4].replaceAll("_", " ")}`;
      return {
        label: title,
        backgroundColor: color[numberOfColor],
        borderColor: color[numberOfColor],
        data:element.map((dt) => {
        return { x: dt.timestamp, y: dt.min_response_time };
      })
         ,
      }
      ;
    }),
  };
} 

function chartDefault() {
  return {
    datasets: [
      {
        label: "Nothing",
        backgroundColor: "red",
        borderColor: "red",
        data: [],
      },
    ],
  };
}

//time and timestamp validator
//checking type and time existance
/* function typeAndTimeValidator(datapack) {
  let types = [];
  let times = [];
  try {
    for (let i = 0; i < datapack.length; i++) {
      console.log("tamo aqui");
      console.log(datapack[i]);
      datapack[i].forEach((element) => {
        console.log(element.type); 
        types.push(element.type ? true : false);
        times.push(element.timestamp ? true : false);
      });
    }
    if (types.includes(false) || times.includes(false)) {
      alert("syntax error");
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return alert(error);
  }
} */

function typeAndTimeValidator(datapack) {
  let types = [];
  let times = [];
  try {
    console.log("datapack");
    console.log(datapack);
    datapack[0].forEach((element) => {
      console.log('elemnt')
      console.log(element);
      for (let k = 0; k < element.length; k++) {
        console.log(element[k].type);
        types.push(element[k].type ? true : false);
        times.push(element[k].timestamp ? true : false);
      }
    });
    console.log("types");
    console.log(types);
    if (types.includes(false) || times.includes(false)) {
      alert("syntax error");
      return false;
    } else {
      
      return true;
    }
  } catch (error) {
    return alert(error);
  }
}

/* function chart(datapack, color) {
  return {
    datasets: datapack[0].map((element) => {
      let title = `${element[0].os} ${element[0].browser} ${Object.keys(
        element[0]
      )[4].replaceAll("_", " ")}`;
      return {
        label: title,
        backgroundColor: color[1],
        borderColor: color[1],
        data: element.map((dt) => {
          return { x: dt.timestamp, y: dt.min_response_time };
        }),
      };
    }),
  };
}  */

//chart options first
/* export const options = {
  scales: {
    y: {
      min: 0,
      max: 1,
    },
    
  },
  tension: 1,
  plugins: {
    legend: {
      align: "start",
      display: true,
      position: "right",
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
  },
}; */



//create legend colors
export function colorGenerator() {
  let colors = [];
  for (let i = 0; i < 100; i++) {
    colors.push(randomColor());
  }
  console.log(colors);
  return colors;
}

//create dataset
