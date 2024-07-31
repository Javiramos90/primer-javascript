function calcularEdad() {
    //    obtener nombre de la mascota del input
    let nombre = document.getElementById("nombreMascota").value;
    console.log(nombre);
    console.log(typeof (nombre));

    // obtener la edad 
    let edad = document.getElementById("edadMascota").value;
    // edad = parseFloat(edad);
    // console.log(edad);
    // console.log(typeof(edad));
    edad = Number(edad);
    // datos incorrectos
    // if(edad < 0){
    //     alert("La edad debe ser un número positivo")
    // }else{
    //     alert("has introducido la edad correctamente")
    // }
    // datos correctos
    let mensaje = "";
    if (edad > 0 && edad < 50) {
        // Calcular la edad humana de la mascota
        let edadHumana = edad * 7;

        // Crear mensaje para mostrar
        mensaje = `${nombre} tiene ${edad} años, 
        que equivalen a ${edadHumana} años humanos.`;
    } else {
        mensaje = "Los datos introducidos no son correctos";
    }

    //     // Calcular la edad humana de la mascota
    //     let edadHumana = edad * 7;

    //     // Crear mensaje para mostrar
    //    mensaje = `${nombre} tiene ${edadMaxima} años, 
    //     que equivalen a ${edadHumana} años humanos.`;

    document.getElementById("resultado").textContent = mensaje;
}
function precioTotal() {
    // leyendo datos de pantalla
    let nombre2 = document.getElementById("nombreProducto").value;
    let precio = document.getElementById("precioProducto").value;
    precio = Number(precio);
    let cbIva = document.getElementById("cbIva").checked;
   
    // calculo el tipo de iva
    let iva = 21;
    if (cbIva) {
        iva = 10;
    }
    let ivaAplicado = precio + (precio * iva / 100);
    let mensaje = `El precio del producto ${nombre2} es ${precio}€ y con iva es ${ivaAplicado}€`;
    console.log(mensaje);
    document.getElementById("resultado2").textContent = mensaje;
}