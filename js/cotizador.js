
let campoTasaCambio = document.getElementById("tasaIngresada");
let campoPesos = document.getElementById("ingresarPesos");
let botonCalculoUsd = document.getElementById("calculoUsd");
let campoDolares = document.getElementById("ingresarDolares") ; 
let botonCalculoArs = document.getElementById("calculoArs");

ultimaTc = localStorage.getItem("valortc");

if(ultimaTC =! null) {    
    campoTasaCambio.value = ultimaTc;
}
campoTasaCambio.onchange = () => {
    tasaDeCambio = campoTasaCambio.value;
    localStorage.setItem("valortc", tasaDeCambio);
}

campoPesos.onchange = () => {
    pesosArgentinos = campoPesos.value;
    console.log(pesosArgentinos);
}

botonCalculoUsd.onclick = () => {
    resultadoUsd = document.getElementById("resultadoUsd");
    resultadoUsd.value = (pesosArgentinos/campoTasaCambio.value).toFixed(2);
}

campoDolares.onchange = () => {
    dolares = campoDolares.value;
    console.log(dolares); 
}

botonCalculoArs.onclick = () => {
    resultadoArs = document.getElementById("resultadoArs");
    resultadoArs.value = (dolares*campoTasaCambio.value).toFixed(2);
}


