/* Questão: 7. Crie uma função que recebe um vetor e um número. Ela deve
 *      mostrar todos os índices onde esse número aparece no vetor, e não
 *      só apenas o primeiro e/ou último índice em que o número aparece.
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const numeros = [];

  let num = parseFloat(
    prompt(`Digite o número que sera pesquisado no vetor: `)
  );

  if (!isNaN(num)) {
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

    let aparece = false;
    for (let n = 0; n < i; n++) {
      if (numeros[n] == num) {
        console.log(`O número ${num} aparece no indice: ${n}`);
        aparece = true;
      }
    }

    if (!aparece) {
      console.log('Não tem este número no vetor');
    }
  } else {
    console.log('Você não digitou um número');
  }
}

start();
