## Variáveis
O nome cada variável é chamada de identificador, não pode conter espaços, palavras reservadas, etc.

 
## Declaração de variáveis
 - *As variáveis podem ser declaradas por palavras-chaves como:* ***var --> escopo dele é uma função, ele 'vive' até o final dela, ou seja, não muda (FUNCTION SCOPED), let --> escopo de bloco, ela pode mudar (BLOCK SCOPED) ou const --> voce pode utilizar quando vc não quer que sua variável troque de conteúdo***

*Exemplo:*

```javascript
// var
var idade = 30;
console.log(idade); // Saída: 30

// let
let altura = 180;
console.log(altura); // Saída: 180

//  const
const pi = 3.14;
console.log(pi); // Saída: 3.14

```


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

```javascript  
    // Escopo global
    var globalVar = 'Isso é global';
    console.log(globalVar)
``````   

## - Função

- *Escopo Função:* Variáveis e funções declaradas **dentro** de uma função ou bloco de código têm escopo local. Isso significa que eles só podem ser acessados dentro dessa função ou bloco de código específico e não são visíveis fora dele.

*Exemplo:* 

``````javascript
         
    // Variável global
    var globalVar = "Isso é global";

    function exemploEscopo(){
    var localVar = "Isso é função";
    console.log(globalVar); // global
    console.log(localVar); // função local
    }
    // Chamando a função
    exemploEscopo();

   // Tentando acessar localVar fora da função resultará em um  erro
   // console.log(localVar); // Isso resultaria em um erro, pois localVar não está definido neste escopo

``````

## - Bloco
-  Variáveis declaradas com **let e const** têm escopo de bloco, o que significa que elas só são acessíveis dentro do bloco de código em que são declaradas, incluindo blocos de instruções condicionais (if, else, switch, etc.) e loops (for, while,  etc.).


*Exemplo:* 
  
 `````` javascript
 
         //  Escopo de bloco
         if (true) {
            let blockVar = 'Isso é um bloco';
            const constBlockVar = 'Isso é uma constante de bloco';
            console.log(blockVar);  // Saída: Isso é um bloco
            console.log(constBlockVar);  // Saída: Isso é uma constante de bloco
        }

        // console.log(blockVar);  // Isso resultaria em um erro, pois blockVar não está definido neste escopo
        
``````



