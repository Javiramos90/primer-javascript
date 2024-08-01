// Objetos en JaveScript

// array
// let animales = []

// objetos
let persona = {
    nombre: `Pepa`,
    edad: 28,
    ciudad: `Granada`
};
console.log(persona);

const alumnos = [
    { nombre: `Fran`, edad: 18, ciudad: `Granada` },
    { nombre: `Antonio`, edad: 20, ciudad: `Maracena` },
    { nombre: `Simon`, edad: 23, ciudad: `Jaen` },
    { nombre: `María`, edad: 26, ciudad: `Almeria` },
];
console.log(alumnos[0].nombre);

alumnos.forEach(alumnos => {
    console.log(alumnos.nombre + "  " + alumnos.edad)
});


let fraseMotivadora = [
    {
        frase: "Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento",
        autor: "Henry Ford."
    },
    {
        frase: "El objetivo no está siempre destinado a ser alcanzado, a menudo sirve simplemente como una meta a la cual que apuntar",
        autor: "Bruce Lee."
    },
    {
        frase: "No hay que ir para atrás ni para darse impulso",
        autor: "Lao Tsé"
    },

    {
        frase: "Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien",
        autor: "Mario Benedetti"
    },
    {
        frase: "La vida es un 10% lo que te sucede y un 90% de cómo reaccionas a ello",
        autor: "Charles R. Swindoll"
    },
    {
        frase: "Sé paciente contigo mismo. Nada en la naturaleza florece todo el año",
        autor: "Anónimo"
    },
    {
        frase: "La pregunta no es quién me va a dejar; es quién va a detenerme",
        autor: "Ayn Rand"
    },
    {   frase:"No podemos estar en modo de supervivencia. Tenemos que estar en modo de crecimiento",
        autor:"Jeff Bezos"
    }
]

function fraseDia(){
    let frasealeatorio = Math.random() * fraseMotivadora.length;
    
    let aleatorio = Math.floor(frasealeatorio);
    
    document.getElementById("frase").textContent = "La Frase del dia es: " + fraseMotivadora[aleatorio].frase;
    
    document.getElementById("autor").textContent = "Escrita por: " + fraseMotivadora[aleatorio].autor; 
}