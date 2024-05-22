// let dias = prompt("¿Cuantos dias quiere ingresar?");
// let listDias = [];
// let sumMm = 0;

// for (let i = 1; i <= dias; i++) {
//     let dia = prompt("Ingresar el día: ");
//     let mm = parseInt(prompt("Ingrese la cantidad de lluvia de ese día en mm/hora: "));
//     listDias.push(dia);
//     sumMm =+ mm;
// }
let cont = 1;
let dias = 0;
let sumMm = 0;

while (cont > 0) {
    let mm = parseInt(prompt("PARA SALIR INGRESE UN VALOR NEGATIVO\nIngrese la cantidad de lluvia de ese día en mm/hora: "));
    if (mm > 0) {
            sumMm += mm;
            dias += 1;
        } else if (mm < 0) {
            cont = -1;
        } else {
            alert("Ingrese un valor válido")
        }
}

let promedio = sumMm / dias;

document.write("Promedio de precipitaciones: " + promedio + " mm/hora");
