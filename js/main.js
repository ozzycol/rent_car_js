// guadar estado de columna activa
let columnaActica = 1


// seleccionar las columnas

const columnas= document.querySelectorAll(".columna")

//Escuchar los click en las columnas

columnas.forEach((columna,indice) =>{ 
    columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })
})
// cambiar estado de las columnas
function cambiarColumna(indice){
    columnas[columnaActica].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActica=indice
}