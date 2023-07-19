/* Questão: 6. Refaça o script anterior, mas agora pergunte ao usuário
 *      quantos números ele deseja inserir no array. Depois, o usuário
 *      vai preenchendo elemento por elemento do vetor. Ao final, exiba o
 *      array e o array ao contrário (generalização do script anterior).
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const numeros = [];

  let limit = parseFloat(
    prompt(`Digite a quantidade de número que serão inseridos: `)
  );

  if (!isNaN(limit)) {
    let i = 0;
    while (i < limit) {
      let num = parseFloat(prompt(`Digite o ${i + 1}º número: `));
      if (!isNaN(num)) {
        numeros.push(num);
        i++;
      } else {
        console.log('Você não digitou um número');
      }
    }

    console.log('--- Array ---');
    numeros.forEach((num) => {
      console.log(`${num}`);
    });

    console.log('--- Array Reverso ---');
    numeros.reverse().forEach((num) => {
      console.log(`${num}`);
    });
  } else {
    console.log('Você não digitou um número');
  }
}

start();
