let arr=[{nombre:"Al", apellido:"Ol",edad:21}];

const agregar= persona =>{
    arr.push(persona);
}

agregar({nombre:"Ma",apellido:"Cla", edad:20});
agregar({nombre:"Dan",apellido:"Mi", edad:20});
agregar({nombre:"Dan",apellido:"Men", edad:19});
agregar({nombre:"Be",apellido:"Men", edad:30});
arr.pop();

let arrFormateado= arr.map((element)=>{
    return   `${element.nombre} ${element.apellido}`;
})


const obtenerPromedio = array =>{
    let edadTot = array.reduce((acum, element)=>{
        return acum+ element.edad;
    },0)
    return edadTot/array.length;
}

console.log(obtenerPromedio(arr));

