/* Questão: 1. Implemente um algoritmo que leia as notas de 10 alunos
 *      armazenando as em um vetor de 10 posições Ao final escreva na
 *      tela somente as notas maiores que 5.0.
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const notas = [];
  let i = 0;
  while (i < 10) {
    let nota = parseFloat(prompt('Digite uma nota: '));
    if (!isNaN(nota)) {
      notas.push(nota);
      i++;
    } else {
      console.log('Você não digitou um número');
    }
  }

  console.log('--- Notas maiores que 5 ---');
  notas.forEach((nota) => {
    if (nota > 5.0) console.log(`${nota}`);
  });
}

start();
