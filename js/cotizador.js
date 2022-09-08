let campoTasaCambio = document.getElementById("tasaIngresada");
let campoPesos = document.getElementById("ingresarPesos");
let botonCalculoUsd = document.getElementById("calculoUsd");
let campoDolares = document.getElementById("ingresarDolares");
let botonCalculoArs = document.getElementById("calculoArs");

ultimaTc = localStorage.getItem("valortc");

if (ultimaTC = !null) {
    campoTasaCambio.value = ultimaTc;
}

campoTasaCambio.onchange = () => {
    tasaDeCambio = campoTasaCambio.value;
    localStorage.setItem("valortc", tasaDeCambio);
}

campoPesos.onchange = () => {
    pesosArgentinos = campoPesos.value;
}

botonCalculoUsd.onclick = () => {
    resultadoUsd = document.getElementById("resultadoUsd");
    resultadoUsd.value = (pesosArgentinos / campoTasaCambio.value).toFixed(2);
}

campoDolares.onchange = () => {
    dolares = campoDolares.value;
}

botonCalculoArs.onclick = () => {
    resultadoArs = document.getElementById("resultadoArs");
    resultadoArs.value = (dolares * campoTasaCambio.value).toFixed(2);
}

//una vez que se carga la pagina se ejecuta la función obtenerDolar()
window.onload = () => {
    obtenerDolar();
}

// obtenemos los distintos tipos de valor de USD y renderiza la tabla de referencia
async function obtenerDolar() {
    const DOLAROFICIAL = "https://api-dolar-argentina.herokuapp.com/api/dolaroficial";
    const respOficial = await fetch(DOLAROFICIAL)
    const dataOficial = await respOficial.json()
    const DOLARBLUE = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
    const respBlue = await fetch(DOLARBLUE)
    const dataBlue = await respBlue.json()
    const DOLARBOLSA = "https://api-dolar-argentina.herokuapp.com/api/dolarbolsa";
    const respBolsa = await fetch(DOLARBOLSA)
    const dataBolsa = await respBolsa.json()
    const DOLARBBVA = "https://api-dolar-argentina.herokuapp.com/api/bbva";
    const respBbva = await fetch(DOLARBBVA)
    const dataBbva = await respBbva.json()
    const DOLARGALICIA = "https://api-dolar-argentina.herokuapp.com/api/galicia";
    const respGalicia = await fetch(DOLARGALICIA)
    const dataGalicia = await respGalicia.json()

    document.getElementById("itemsDolar").innerHTML += (`
    <tr>
    <td> Dolar Oficial</td>
    <td>${dataOficial.compra}</td>
    <td>${dataOficial.venta}</td>
    </tr> 
    <tr>
    <td> Dolar Blue</td>
    <td>${dataBlue.compra}</td>
    <td>${dataBlue.venta}</td>
    </tr> 
    <td> Dolar Bolsa</td>
    <td>${dataBolsa.compra}</td>
    <td>${dataBolsa.venta}</td>
    </tr> 
    <tr>
    <td> Dolar Banco BBVA</td>
    <td>${dataBbva.compra}</td>
    <td>${dataBbva.venta}</td>
    </tr> 
    <tr>
    <td> Dolar Banco Galicia</td>
    <td>${dataGalicia.compra}</td>
    <td>${dataGalicia.venta}</td>
    </tr> 
    `);

    document.getElementById("fechaTasaCambio").innerHTML += (`
    Fecha: ${dataOficial.fecha}`);
}