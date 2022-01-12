let numeroAlunos = 5;

let listaAlunos = ["Eduardo", "Leandro", "Juliano", "Fábio", "Marc"];

for (let contador = 0; contador < listaAlunos.length; contador++) {

    if (contador == 0) {
        console.log(contador + ": ZERO: " + listaAlunos[contador]);
    } else if (contador % 2 == 1) {
        console.log(contador + ": ÍMPAR: " + listaAlunos[contador]);
    } else {
        console.log(contador + ": PAR: " + listaAlunos[contador]);
    }
}
