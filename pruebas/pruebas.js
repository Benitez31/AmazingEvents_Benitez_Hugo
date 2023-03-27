async function getData() {
    await fetch("./../data/amazing.json").then(response => response.json()).then((data) => {
        console.log(data);
      
       /* console.log(data.events);
       console.log(tabla1(data.events));
       console.log(tabla2(data.events));
       console.log(tabla3(data.events));
       let nuevoArray1 = [];
       console.log(getPercents(data.events, nuevoArray1));
       let porcen = data.events.reduce( (a, b) =>(((a.assistance? a.assistance: a.estimate)/a.capacity)*100 > ((b.assistance? b.assistance: b.estimate)/b.capacity)*100)? a : b).name
       console.log(porcen); */
       let categories = getCategory(data.events);
       console.log(categories);
       /* getPercentXCategory(data.events, categories); */
       let categoria = data.events.filter(item => categories.values().includes(item.category))
       console.log(categoria);
       
       
       

    })
}
getData();
/* function nombreYPorcentaje(array, nuevoArray){    
    array.forEach(item => {
        let porcentaje =  Math.round((item.assistance? item.assistance: item.estimate) / item.capacity * 100);
        nuevoArray.push(item.name, porcentaje);
        return nuevoArray;
    })
} */

function getCategory(array){
    return new Set(array.map(item => item.category).flat());
}
/* function getPercentXCategory(array, nuevoArray){
    if(array)
    
    
} */

/* function tabla1(array){
    let masAsistencia = array.sort((a, b) =>((b.assistance? b.assistance: b.estimate)/b.capacity)*100 - ((a.assistance? a.assistance: a.estimate)/a.capacity)*100)[0].name
    return masAsistencia;
}
function tabla2(array){
    let menosAsistencia = array.sort((a, b) =>((a.assistance? a.assistance: a.estimate)/a.capacity)*100 - ((b.assistance? b.assistance: b.estimate)/b.capacity)*100)[0].name
    return menosAsistencia;
}
function tabla3(array){
    let ordenAsistencia = array.sort((a, b) =>((a.assistance? a.assistance: a.estimate)/a.capacity)*100 - ((b.assistance? b.assistance: b.estimate)/b.capacity)*100)
    return ordenAsistencia;
}


function getPercents(array, arrayResult){
    array.forEach(item => {
        let percent = Math.round((item.assistance? item.assistance: item.estimate) / item.capacity * 100);
        arrayResult.push(item.name, percent);
        return arrayResult;
    })
} */

/* Math.round(((item.assistance? item.assistance: item.estimate)/item.capacity)*100) */