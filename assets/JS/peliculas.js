let nPeliculas = parseInt(prompt("Ingrese la cantidad de peliculas que quiere ingresar en numeros"));
let listPeliculas = []

for (let i = 1; i <= nPeliculas; i++) {
    let nombresPeliculas = prompt("Ingrese el nombre de la película");
    listPeliculas.push(nombresPeliculas);
}

document.write ("LISTA DE PELICULAS:" + "<br>");
document.write (listPeliculas.join("<br>"));