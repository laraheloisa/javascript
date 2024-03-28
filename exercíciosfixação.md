## Exercícios Fixação Variáveis
- DECLARAÇÃO DE VARIÁVEIS 

*Exercício 1)*
``````javascript
   //Declare uma variável nome e atribua a ela seu nome.
   //Declare uma variável idade e atribua a ela sua idade.
   //Declare uma variável cidade e atribua a ela o nome da sua cidade.
   //Imprima todas as variáveis.

   var nome = 'Lara'
   console.log("Nome: ", nome)
   var idade = 17
   console.log("Idade: ", idade)
   var cidade = 'Campo Mourão'
   console.log("Cidade: ", cidade)

``````
*Exercício 2)*
``````javascript

   //Contador que itera de 0 a 4.

   let contador = 0
      
   for ( let i = 0; i < 5; i++){  //i = i + 1
          contador += 1;
   }

   console.log(contador)

``````
*Exercício 3)*
``````javascript
      //Declare uma constante PI e atribua a ela o valor de π (3.14159).
      //Calcule a área de um círculo com raio igual a 5 utilizando a fórmula: área = π * raio * raio.
      //Imprima o resultado.
      
      const PI = 3.14;
      const raio = 5;
      const area = PI * raio * raio;

      console.log("Área do círculo:", area); 

``````
- ESCOPO

*Exercício 1)*
``````javascript
   //Escopo Global e Escopo Função

   // Declare uma variável x fora de qualquer função e atribua a ela um valor.
   //Declare uma função minhaFuncao() que imprime o valor de x.
   //Declare uma variável y dentro da função minhaFuncao() e atribua a ela um valor diferente de x.
   //Tente imprimir o valor de y fora da função minhaFuncao() e observe o resultado.

   var x = 10

   function minhaFuncao(){
      var y = 10
      console.log(x);
      console.log(y);
   }
   
   minhaFuncao(); // erro, pois y é uma variável da função e não é acessível fora dela.
``````
*Exercício 2)*

``````javascript
   //Escopo bloco 
   //soma
      function soma(a, b) {
      return a + b;
   }

   let resultado = 0;

   if (true) {
      resultado = soma(5, 10);
   }

   console.log("Resultado: " + resultado);
   console.log(a)// erro
   //

   //if (true) {
   //let x = 10; // x só é acessível dentro deste bloco
   //console.log(x); // 10
   //}
   //console.log(x); // Erro
``````
- TIPOS DE DADOS

*Exercício 1)*
``````javascript
 //Dado o seguinte conjunto de valores, determine o tipo de dado de cada um deles:

   let a = 5; //number
   let b = "Olá"; //string
   let c = true; //boleano
   let d = { nome: "João", idade: 25 }; //objeto
   let e = [1, 2, 3]; //array

 ``````
 
- ARRAY

*Exercício 1)*
``````javascript

   let arr = [];

   let numeros = [1, 2, 3, 4, 5];
   let frutas = ["Maçã", "Banana", "Laranja"];


   console.log(numeros[0]); // Saída: 1
   console.log(frutas[1]); // Saída: Banana


   frutas[0] = "Pêra"; // Alterando "Maçã" para "Pêra"
   console.log(frutas); // Saída: ["Pêra", "Banana", "Laranja"]

``````
- OPERADORES BÁSICOS

*Exercício 1)*
``````javascript
// Exercício de Fixação: Operadores Básicos

   let num1 = 10;
   let num2 = 5;

   let soma = num1 + num2;
   console.log("Soma:", soma); //15

   let subtracao = num1 - num2;
   console.log("Subtração:", subtracao); //5

   let multiplicacao = num1 * num2;
   console.log("Multiplicação:", multiplicacao); //50

   let divisao = num1 / num2;
   console.log("Divisão:", divisao); // 2

   let modulo = num1 % num2;
   console.log("Módulo:", modulo);// 0

``````
*Exercício 2)*
``````javascript
// Verifique se um número é par ou ímpar utilizando operadores aritméticos e lógicos

   let numero = 12;
   if (numero % 2 === 0) {
      console.log(numero + " é um número par.");
   } else {
      console.log(numero + " é um número ímpar.");
   }

   //par

``````