let nAlumnos = parseInt(prompt("Ingrese el numero total de alumnos"));
let asisMas = 0;
let asisFem = 0;

for (let i = 1; i <= nAlumnos; i++) {
    let asistencia = prompt("Ingresar la asistencia \nP-presente\nA-ausente");
    let sexo = parseInt(prompt("Ingresar el sexo \n0-masculino \n1-femenino"));
        if (asistencia == "p" || asistencia == "P") {
            if (sexo == 0) {
                asisMas += 1;
            } else if (sexo == 1) {
                asisFem += 1;
            } else {
                alert ("Ingrese un valor valido")
            }
        } else if (asistencia == "a" || asistencia == "A") {
            if (sexo == 0) {
                asistencia -= 1;
            } else if (sexo == 1) {
                asistencia -= 1;
            } else {
                alert ("Ingrese un valor valido")
            }
        } else {
            alert("Ingrese un valor válido");
        }
        
}
let totalAsistencia = (asisFem + asisMas);


let porcentaje = (totalAsistencia / nAlumnos ) * 100;

document.write ("Porcentaje de presentes total: " + porcentaje)
document.write ("Porcentaje de presentes femeninos sobre el total de presentes: " + porcentaje)
