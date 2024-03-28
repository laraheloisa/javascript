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






