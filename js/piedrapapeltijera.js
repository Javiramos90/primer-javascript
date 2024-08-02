let puntosJugador = 0;
let puntosMaquina = 0;

function jugar(eleccionJugador){
    const opcionesMaquina = [`piedra`,`papel`,`tijera`];
    
    // let aleatorio = math.random()*3;
    // aleatorio = math.floor(aleatorio);
    // let eleccionM = opcionesMaquina[aleatorio];

    const eleccionMaquina = opcionesMaquina[Math.floor(Math.random()*3)];
    let resultado;
    // empate
    if(eleccionJugador === eleccionMaquina){
        resultado ="Empate";
    // gana jugador
    }else if((eleccionJugador === `piedra` && eleccionMaquina === `tijera`) || (eleccionJugador === `papel` && eleccionMaquina === `piedra`)||(eleccionJugador === `tijera` && eleccionMaquina === `papel`)){
        resultado = "Ganaste";
        puntosJugador++;
    }
// gana maquina
    else{
        resultado = "Perdiste"
        puntosMaquina++;
    }

    const emojis = [
        piedra:`👊`,
        papel: `🖐`,
        tijera: `✌`];

    document.getElementById(`result`).innerHTML = `Tu elección: ${emojis[eleccionJugador]} vs Computadora: ${emojis[eleccionMaquina]} ${resultado}`

    document.getElementById(`score`).textContent
}