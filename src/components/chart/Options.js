


export function Options(xLimits){
    return{
        scales: {
          y: {
              
            grid: {
              tickLength: 8,
            },
            max: 2,
            min: 0,
            ticks: {
                display:false,
              stepSize: 0.4,
            },
          },
          x: {
              min:xLimits.begin,
              max:xLimits.end,
            type: "time",
            grid:{
              display:false
            },
            ticks: {
              maxRotation: 100,
              minRotation: 80,
            },
            time: {
              format: "ss",
              tooltipFormat: "ss",
              unit: "second",
              stepSize: 60,
              displayFormats: {
                minute: "ss",
                hour: "ss",
                second:"hh:mm"
              },
            },
          },
        },
        responsive: true,
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
      };
}