let valor1 = document.getElementById("primerValor");
let valor2 = document.getElementById("segundoValor");
let operacion = document.getElementById("operacion");
let resultado = document.getElementById("resultado");

function calcularValor() {
    let val1 = Number(valor1.value);
    let val2 = Number(valor2.value);
    let estado = true;

    if (operacion.value == "+") {
        resultado = val1 + val2;
    } else if (operacion.value == "-") {
        resultado = val1 - val2;
    } else if (operacion.value == "*") {
        resultado = val1 * val2;
    } else {
        if (val2 > 0) {
            resultado = val1 / val2;
        } else {
            alert("No se puede dividir entre 0");
            estado = false;
            resetValor();
        }
    }


    if (estado == true){
        console.log(resultado);
    }

    document.getElementById("resultado").textContent = `El resultado es: ${resultado}`
}


function resetValor() {
    valor1.value = "";
    valor2.value = "";
    operacion.selectedIndex = 0;
    resultado.textContent = "";
}