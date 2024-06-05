const btnCriar = document.getElementById("btn-Criar")
const inputTarefa = document.getElementById("input")
const divAviso = document.getElementById("aviso")
const criarDiv = document.getElementById("cria-tarefa")

input.addEventListener("click", function(){
    const tarefa = input.value;   
    if(tarefa.trim() !== " "){
        criarDiv.innerText = tarefa
    }
    else{
        let aviso = "Digite algo para criar uma tarefa";
        divAviso.textContent = aviso;
    }
    
})


