const jugarBtn = document.getElementById("Jugar_btn");
const resultado = document.getElementById("resultado");
const imagenEuro = document.getElementById("imagenEuro");
const imagenCruz = document.getElementById("imagenCruz");
const imagenCarga = document.getElementById("imagenCarga");
const caraRadio = document.getElementById("cara");
const cruzRadio = document.getElementById("cruz");
const eleccion = document.getElementById("eleccion")

function elegirOpcion() {
    if (eleccion !== "") {
        resultado.innerHTML = <b>Elige o cara o cruz</b>
    }
}