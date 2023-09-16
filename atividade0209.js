import PromptSync from "prompt-sync"
const prompt = PromptSync()

//ex01

console.log("Exercício01");
function encontrarMaior(num1, num2, num3) {


    let maior = num1;
 
    if (num2 > maior) {
      maior = num2;
    }
    if (num3 > maior) {
      maior = num3;
    }
    return maior;
  }
 
 const numeroMaior = encontrarMaior(2, 9, 16);
 console.log("O maior número é:", numeroMaior);
 console.log('\n');

//ex02

console.log("Exercício02");
 function criarTabuada(num, lim) {
    for (let i = 1; i <= lim; i++) {
      const resultado = num * i;
      console.log(`${num}x${i} = ${resultado}`);
    }
  }
  
  criarTabuada(7, 5);
  console.log('\n');

//ex03

console.log("Exercício03");
function maiorMenor(lista) {

    if (lista.length === 0) {
      console.log("A lista está vazia.");
      return;
    }
  
  
    let max = lista[0];
    let min = lista[0];
  
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > max) {
        max = lista[i];
      } else if (lista[i] < min) {
        min = lista[i];
      }
    }
  
  
    console.log("Maior valor encontrado:", max);
    console.log("Menor valor encontrado:", min);
  }
  
  
  const listaNum = [15, 53, 78, 3, 12, 8];
  maiorMenor(listaNum);
  console.log('\n');

//ex04

console.log("Exercício04");
function hobbiesPessoais() {
    const hobbies = [];
    while (true) {
      const hobby = prompt("Adicione um hobby (ou 'lh' para encerrar o programa):");
      if (hobby.toLowerCase() === "lh") {
        break; 
      }
      hobbies.push(hobby);
    }
    return hobbies.join(", "); 
  }
  
  function main() {
    let nome = "";
    while (true) {
      nome = prompt("Nome do cliente (ou 'nc' para encerrar o programa):");
      if (nome.toLowerCase() === "nc") {
        break; 
      }
  
  
      const hobbies = hobbiesPessoais();
      console.log(`${nome} | ${hobbies}`);
    }
  }
  
  main();