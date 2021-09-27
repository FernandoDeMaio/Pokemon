
function Filter(arr, tipo) {

       let arrFiltrado=arr.map(el=> el.types.include(tipo))
console.log(arrFiltrado)
       return arrFiltrado;
}

export default Filter

