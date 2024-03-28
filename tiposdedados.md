## Tipos de Dados
*Tipos que podemos atribuir aos dados das variáveis. Podemos identificar cada dado, utilizando o operador **typeof***

## Tipos Primitivos
 *São tipos de dados básicos que não são objetos*

 - Number
 - String
 - Boolean
 - Undefined
 - Null

## - Number
- *Possui tres valores simbólicos: +Infinity, -Infinity e NaN*

- *Não existe um tipo definido para inteiros, todo número é Number*

*Exemplo:* 
``````javascript
      // Number
      var numberInteiro = 42;
      var numberDecimal = 3.14;
      console.log(numberInteiro); // Saída: 42
      console.log(numberDecimal); // Saída: 3.14

``````

## - String
- *Sequência de caracteres.
*Exemplo:* 
``````javascript
// String
var minhaString = "Olá, mundo!";
console.log(minhaString); // Saída: Olá, mundo!
``````

## - Boolean
- *Representa um valor verdadeiro (true) ou falso (false).
*Exemplo:* **true, false***

`````` javascript
      var meuBooleanTrue = true;
      var meuBooleanFalse = false;
      console.log(meuBooleanTrue); // Saída: true
      console.log(meuBooleanFalse); // Saída: false
``````

## - Undefined
- *Representa um valor indefinido.* Exemplo:

``````javascript

      var minhaVariavelIndefinida;
      console.log(minhaVariavelIndefinida); // Saída: undefined
``````
## - Null
-  *Representa um valor nulo ou vazio.*
*Exemplo:*
``````javascript
       var meuNull = null;
       console.log(meuNull); // Saída: null
``````

## - Object
- *O tipo de dado object em JavaScript é um tipo complexo que pode armazenar coleções de dados e funcionalidades. Comparando-a com um objeto do mundo real, uma caneta é um objeto com diversas propriedades como cor, design, material de que é feita, etc. Da mesma forma, objetos JavaScript podem ter propriedades que definem suas características.*
*Exemplo:*
``````javascript
      // Object
      var meuObjeto = {
         nome: "João",
         idade: 30,
         cidade: "São Paulo"
      };
      console.log(meuObjeto); // Saída: { nome: "João", idade: 30, cidade: "São Paulo" }
``````
## - Array
 - Usados para armazenar vários valores em uma única variável.

 - São consideradas como objetos, mas sevem como listas

- Podemos ter itens com qualquer tipo de dado

- Porém não por chave e valor, e sim índice

*Exemplo:*

```````javascript
      var arr = [9, "Lara", true, {teste: 1, teste: 2}];
      console.log(arr);

      var arr2 = [2, 3, 4, 5, 6];
      console.log(arr2);

      // acessa o segundo elemento 
      console.log(arr2[1]);
      console.log(arr2[0]);

      //inserir em um índice que não existe 
      arr[4] = 10;

      //acessando a chave e mudando o valor 
      arr[0] = "Teste";

      console.log(arr)

      //

      var x = carros.length;   // A propriedade length retorna o número de elementos
      var y = carros.sort();   // O método sort() classifica os arrays
      //
      var frutas = ["Banana", "Laranja", "Maça", "Manga"];
      frutas.length;   // o length de frutas é 4
```````

- A diferença entre Arrays e Objetos
em JavaScript, os arrays usam índices numerados e os objetos usam índices nomeados.

