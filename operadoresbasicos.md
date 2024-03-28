## - Operadores Básicos
- OPERADORES ARITMÉTICOS:

    ***Adição (+):*** Soma dois valores.

    ***Subtração (-):*** Subtrai um valor do outro.

    ***Multiplicação (*):*** Multiplica dois valores.

    ***Divisão (/):*** Divide um   valor pelo outro.

    ***Módulo (%):*** Retorna o resto da divisão de um número pelo outro.

    ***Incremento (++x ou x++):***
    Adiciona 1 ao valor de uma variável.

    ***Decremento (--x ou x--):*** Subtrai 1 do valor de uma variável.

- OPERADORES

*Exemplo:*

``````javascript
    let a = 10;
    let b = 5;
    console.log(a + b); // 15
    console.log(a - b); // 5
    console.log(a * b); // 50
    console.log(a / b); // 2
    console.log(a % b); // 0
    a++; // Agora "a" é 11
    b--; // Agora "b" é 4
``````
- OPERADORES DE COMPARAÇÃO

    ***Igual (==):*** Compara se dois valores são iguais.

    ***Estritamente igual (===):*** Compara se dois valores são iguais e do mesmo tipo.

    ***Diferente (!=):*** Compara se dois valores são diferentes.

    ***Estritamente diferente (!==):*** Compara se dois valores são diferentes ou do mesmo tipo.

    ***Maior que (>):*** Compara se um valor é maior que outro.

    ***Menor que (<):*** Compara se um valor é menor que outro.

    ***Maior ou igual (>=):*** Compara se um valor é maior ou igual a outro.

    ***Menor ou igual (<=):*** Compara se um valor é menor ou igual a outro.

*Exemplo:*

``````javascript
    let x = 10;
    let y = 5;
    console.log(x == y); // false
    console.log(x === '10'); // false
    console.log(x != y); // true
    console.log(x !== '10'); // true
    console.log(x > y); // true
    console.log(x <= y); // false

``````
- OPERADORES LÓGICOS

    ***E lógico (&&):*** Retorna true se ambas as expressões forem verdadeiras.

    ***OU lógico (||):*** Retorna true se pelo menos uma das expressões for verdadeira.

    ***NÃO lógico (!):*** Inverte o valor da expressão.

*Exemplo:*

``````javascript
    let p = true;
    let q = false;
    console.log(p && q); // false
    console.log(p || q); // true
    console.log(!p); // false

``````
- TYPEOF: Retorna o tipo de dado de uma variável.

*Exemplo:*
``````javascript
    let x = 10;
    let y = 'Olá';
    console.log(typeof x); // number
    console.log(typeof y); // string
``````
