// // // declaración de arrays
// let frutas = [
//     `manzana`
//     ,`pera`
//     ,`naranja`,];

//     // console.log(frutas);
//     console.table(frutas);

//     console.log(frutas^[0]);
// // sustituye un elemento
//     frutas[0] = "sandia";
//     console.table(frutas);
// //añade un elemento
//     frutas[3] = "melocoton";
//     console.table(frutas);

//     // frutas[10] = "melon";
//     // console.table(frutas);

//     frutas.push("fresa");
//     console.table(frutas);

//     frutas.unshift("mango");
//     console.table(frutas);

//     // bucles
//     // for(indice de inicio, condicion, incremento){
//     //     codigo a ejecutar
//     // }

//     for (let i = 0; i <= 20; i+=2) {
//         console.log(i);

//     }
//     array.forEach(fruta => {
//         console.log(fruta);
//     });

//     frutas.forEach((fruta, indice, array) => {
//         console.log(`${indice}: ${fruta}`);
//         console.loog(array);
//     });

// random
    let frases = [
        "Hoy es un día perfecto para lograr tus sueños.",
        "Despierta con determinación, ve a dormir con satisfacción.",
        "a mejor manera de predecir el futuro es crearlo. ¡Buenos días!",
        "El secreto de llegar lejos es empezar. ¡Comienza hoy!",
        "No cuentes los días, haz que los días cuenten.",
        "¡Despierta con una sonrisa, hoy es un nuevo día!",
        "Empieza el día con gratitud y todo se verá más hermoso.",
        "¡Despierta, sonríe y enfrenta el día con energía positiva!",
        "Va a ser un gran día. Solo tienes que creerlo.",
        "Hoy es un regalo, por eso se llama presente. ¡Disfrútalo!"
    ];

function fraseDia() {
    let frasealeatorio = Math.random() * frases.length;
    let aleatorio = Math.floor(frasealeatorio);


    document.getElementById("frase").textContent = "La Frase del dia es: " + frases[aleatorio];

}