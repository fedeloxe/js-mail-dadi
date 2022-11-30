//Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1 genera un numero casuale per l'utente
let player = Math.floor( Math.random() * 6) +1;
//2 genera un numero per il computer 
let computer = Math.floor( Math.random() * 6) +1;

//3  stampo i risultati della rollata dei dati

console.log(`Al gioctore è uscito il numero ${player}`);
console.log(`Al computer è uscito il numero ${computer}`);

//4 stampo il confronto tra i dati 

if ( player==computer){
    console.log(`Pareggio!!!!`)
}

else if( player>computer){
    console.log(`Il gioctore ha vinto!!!`)
}

else{
    console.log(`il gioctore ha perso!!!`)
}