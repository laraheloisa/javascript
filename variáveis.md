## Variáveis
O nome cada variável é chamada de identificador, não pode conter espaços, palavras reservadas, etc.

 
## Declaração de variáveis
 - *As variáveis podem ser declaradas por palavras-chaves como:* ***var, let ou const***

*Exemplo:* 

         // var
            var idade = 30;
            console.log(idade); // Saída: 30

         // let
            let altura = 180;
            .log(altura); // Saída: 180

         // Exemplo de const
            const pi = 3.14;
            console.log(pi); // Saída: 3.14

## Escopo
|  *Visibilidade e acessibilidade de variáveis ​​e funções dentro do código.*

| *O escopo determina onde essas 
variáveis e funções são definidas e
onde elas podem ser acessadas.*

| *O escopo de uma variável depende do local onde foi declarado e da palavra-chave usada (let, var, const).*

***Os três tipos de escopo são:***

- escopo global
- escopo de função
- escopo do bloco 


## - Global
- ***Escopo Global*** --> Variáveis e funções declaradas **fora** de qualquer função ou bloco de código têm escopo global. Isso significa que eles podem ser acessados de qualquer lugar no código, incluindo dentro de funções ou blocos de código.


*Exemplo:* 
      
    // Escopo global
    var globalVar = 'Isso é global';
     

## - Função

- *Escopo Função:* Variáveis e funções declaradas **dentro** de uma função ou bloco de código têm escopo local. Isso significa que eles só podem ser acessados dentro dessa função ou bloco de código específico e não são visíveis fora dele.


*Exemplo:* 

         
    // Variável global
    var globalVar = "Isso é global";

    function exemploEscopo() {
    // Variável local dentro da função
    var localVar = "Isso é local";
    console.log(globalVar); // Saída: Isso é global
    console.log(localVar); // Saída: Isso é local
    }

    // Chamando a função
    exemploEscopo();

            // Tentando acessar localVar fora da função resultará em um erro
            // console.log(localVar); // Isso resultaria em um erro, pois localVar não está definido neste escopo

## - Bloco
-  Variáveis declaradas com **let e const** têm escopo de bloco, o que significa que elas só são acessíveis dentro do bloco de código em que são declaradas, incluindo blocos de instruções condicionais (if, else, switch, etc.) e loops (for, while, do-while, etc.).


*Exemplo:* 
  
   // Escopo de bloco
      
      
        if (true) {
            let blockVar = 'Isso é um bloco';
            const constBlockVar = 'Isso é uma constante de bloco';
            console.log(blockVar);  // Saída: Isso é um bloco
            console.log(constBlockVar);  // Saída: Isso é uma constante de bloco
        }

        // console.log(blockVar);  // Isso resultaria em um erro, pois blockVar não está definido neste escopo
        // console.log(constBlockVar);  // Isso resultaria em um erro, pois constBlockVar não está definido neste escopo

## Tipos de Dados
*Tipos que podemos atribuir aos dados das variáveis. Podemos identificar cada dado, utilizando o operador **typeof***

## Tipos Primitivos
 *São tipos de dados básicos que não são objetos*

## - Number
- *Possui tres valores simbólicos: +Infinity, -Infinity e NaN*

- *Não existe um tipo definido para inteiros, todo número é Number*

*Exemplo:* 42, 3.14

## - String
- *Sequência de caracteres.
Exemplo: "Olá, mundo!"*

## - Boolean
- *Representa um valor verdadeiro (true) ou falso (false).
Exemplo: **true, false***

      var meuBooleanTrue = true;
      var meuBooleanFalse = false;
      console.log(meuBooleanTrue); // Saída: true
      console.log(meuBooleanFalse); // Saída: false

## - Undefined
- *Representa um valor indefinido.* Exemplo:

      var minhaVariavelIndefinida;
      console.log(minhaVariavelIndefinida); // Saída: undefined

## - Null
-  *Representa um valor nulo ou vazio.*
Exemplo:

       var meuNull = null;
       console.log(meuNull); // Saída: null

## - Object
- *O tipo de dado object em JavaScript é um tipo complexo que pode armazenar coleções de dados e funcionalidades. Comparando-a com um objeto do mundo real, uma caneta é um objeto com diversas propriedades como cor, design, material de que é feita, etc. Da mesma forma, objetos JavaScript podem ter propriedades que definem suas características.*
Exemplo:

      // Object
      var meuObjeto = {
         nome: "João",
         idade: 30,
         cidade: "São Paulo"
      };
      console.log(meuObjeto); // Saída: { nome: "João", idade: 30, cidade: "São Paulo" }




