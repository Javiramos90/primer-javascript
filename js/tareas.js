function addTarea() {
    // leer el texto del input
    let tarea = document.getElementById("inputTarea").value;
    // trim extension para eliminar espacios de antes y despues de una frase o palabra
    tarea = tarea.trim();
    if (tarea != "") {
        // crea un nuevo elemento de <li><\li>
        let itemLista = document.createElement("li");
        // añade texto al li <li>compar pan<\li>
        itemLista.innerHTML = `${tarea}<button class="btnEliminar">Eliminar</button>`;
        // console.log(itemLista);
        document.getElementById("listaTarea").appendChild(itemLista);
        // seleccionar el botón eliminar para añadirle un evento
        itemLista.querySelector(`.btnEliminar`).addEventListener(`click`, function () {
            itemLista.remove()
        });
    }
}