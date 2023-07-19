/* Questão: 4. Elabore um algoritmo que leia a nota de 80 alunos e que
 *      imprima ao final a nota de cada aluno e a média da turma
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const notas = [];
  let total = 0;
  let i = 0;
  while (i < 80) {
    let nota = parseFloat(prompt(`Digite a nota do ${i + 1}º aluno: `));
    if (!isNaN(nota)) {
      notas.push(nota);
      total += nota;
      i++;
    } else {
      console.log('Você não digitou um número');
    }
  }

  console.log('--- Nota da turma ---');
  notas.forEach((nota, index) => {
    console.log(`${index + 1}º aluno: ${nota}`);
  });
  console.log(`Media da turma: ${total / i}`);
}

start();
