JSON
//forma de escrever objeto em javascript;
//formato de chava e valor;
//fácil eleve de ler
//muito utilizado para API  e também arquivos de configuração;
// strings, números, arrays, objetos{"nome": }, dados nulos...

Exemplos:
``````javascript
{
    "nome": "Matheus",
    "idade": 30,
    "trabalho": true,
    "detalhes-trabalho": {
        "profissão": "Programador",
        "empresa": "X"
    }
    "hobbies": ["Ler", "correr", "programar"]
}

//Convertendo para JSON

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

const jsonString = JSON.stringify(pessoa);
console.log(jsonString);
// Saída: {"nome":"João","idade":30,"cidade":"São Paulo"}

//////
const jsonString = '{"nome":"João","idade":30,"cidade":"São Paulo"}';

const pessoa = JSON.parse(jsonString);
console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30
console.log(pessoa.cidade); // Saída: São Paulo
/////
function objetoParaJson(obj) {
    return JSON.stringify(obj);
}

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021
};

console.log(objetoParaJson(carro));
// Saída: {"marca":"Toyota","modelo":"Corolla","ano":2021}
/////
//Função que converte json para objeto 
function jsonParaObjeto(jsonString) {
    return JSON.parse(jsonString);
}

const jsonCarro = '{"marca":"Toyota","modelo":"Corolla","ano":2021}';
const carroObjeto = jsonParaObjeto(jsonCarro);

console.log(carroObjeto.marca); // Saída: Toyota
console.log(carroObjeto.modelo); // Saída: Corolla
console.log(carroObjeto.ano); // Saída: 2021


``````
