let nPeliculas = parseInt(prompt("Ingrese la cantidad de peliculas que quiere ingresar en numeros"));
let listPeliculas = []

for (let i = 1; i <= nPeliculas; i++) {
    let nombresPeliculas = prompt("Ingrese el nombre de la película");
    let duracionPeliculas = prompt("Ingrese la duración de la pelicula en minutos")
    if (duracionPeliculas > 60) {
        document.write (nombresPeliculas + ": " + duracionPeliculas + "mn" + "<br>" )
    }
}
