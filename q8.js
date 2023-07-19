/* Questão: 8. Dada uma coleção de N números, imprimir o índice do
 *      primeiro número negativo, se houver.
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const numeros = [];
  let i = 0;
  while (i < 5) {
    let num = parseFloat(prompt(`Digite o ${i + 1}º número: `));
    if (!isNaN(num)) {
      numeros.push(num);
      i++;
    } else {
      console.log('Você não digitou um número');
    }
  }

  for (let n = 0; n < i; n++) {
    if (numeros[n] < 0) {
      console.log(`O indice do primeiro numero negativo e: ${n}`);
      return;
    }
  }

  console.log('Não tem numero negativo.');
}

start();
