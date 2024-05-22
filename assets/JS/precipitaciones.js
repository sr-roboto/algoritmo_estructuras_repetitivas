let dias = prompt("¿Cuantos dias quiere ingresar?");
let listDias = [];
let sumMm = 0;

for (let i = 1; i <= dias; i++) {
    let dia = prompt("Ingresar el día: ");
    let mm = parseInt(prompt("Ingrese la cantidad de lluvia de ese día en mm/hora: "));
    listDias.push(dia);
    sumMm =+ mm;
}

let promedio = (sumMm / dias);

document.write("Promedio de precipitaciones: " + promedio + " mm/hora");
