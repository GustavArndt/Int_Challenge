import randomColor from "randomcolor";






export function chartCreator(func) {
  const data = func[0];
  const selectors = func[1];
  const groups = func[2];
  console.log("antesselectors")  
  console.log(selectors)
  console.log("chartCreator");
  console.log(data);
  let dataSets = createDataSetes(data,selectors);
  createDataSetes(data,selectors);
  console.log("some");
  console.log(dataSets);
  return {
    datasets: dataSets,
  };
}









function createDataSetes(data,selectors) {
    let push = [];
    let datas = [];
    let nada=selectors
    console.log("nada")  
    console.log(nada)
  
    selectors.forEach((selector,ind4)=>{
        
        console.log(selector,ind4)
        data.forEach((e, index) => {
            //creating the title
            let title = "";
            e[0].groups.forEach((x) => {
              title = `${x} ` + title;
            });
            title = title + selector
            //creating colors
            let color = randomColor();
            //creating data
            let datas=[]
            console.log(index)
            e.forEach((s)=>{
                console.log('s')
                console.log(s[selector])
                datas.push({x:s['timestamp'],y:s[selector]})
            })   
        
            push.push({
              label: title,
              data: datas,
              borderColor: color,
              backgroundColor: color,
            });
          });
    })
  
  
    
    console.log("push");
    console.log(push);
    return push;
  }
  