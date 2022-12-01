let tablero = [];
let filas = 8;
let columnas = 8;

let contadorDeMinas = 5;
let ubicacionDeMinas = [];

let clickEnTablero = 0;
let banderaHabilitada = false;

let finDelJuego = false;

window.onload = function() {
    inicioDelJuego();
}

function inicioDelJuego() {
    document.getElementById("contadorDeMinas").innerText = contadorDeMinas;

    for (let f=0; f< filas; f++) {
        let fila = [];
        for (let c=0; c<columnas; c++) {
            let celda = document.createElement("div");
            celda.id = f.toString() + "-" + c.toString();
            document.getElementById("tablero").append(celda);
            fila.push(celda);
        }
        tablero.push(fila);
    }
    console.log(tablero);
}