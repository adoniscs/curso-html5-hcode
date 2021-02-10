/*

let lista = ["maça", "pêra", "Laranja"];

lista.push("Uva"); // adicionar um elemento ao final do array
// console.log(lista.reverse()); // inverte a ordem do array

console.log(lista.toString()); // transforma o array em string
console.log(lista.join(" ")) // coloca o que quiser e transforma o array em string
lista.pop(); // remove o ultimo elemento do array


console.log(lista.length); //saber a quantidade de itens do array

// console.log(lista);

let fruta = {
  nome: 'maça',
  cor: 'vermelha'
}

console.log(fruta.cor)

let frutas = [
  {
    nome: 'maça',
    cor: 'vermelha',
  },
  {
    nome: 'uva',
    cor: 'roxa'
  }
];

console.log(frutas[1].cor);
*/

var idade = 12

function validaIdade(idade) {
  let validar;
  if (idade >= 18) {
    validar = true
  } else {
    validar = false;
  }
  return validar;
}

console.log(validaIdade(idade))

