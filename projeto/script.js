const btnCriar = document.getElementById("btn-Criar")
const inputTarefa = document.getElementById("input")
const divAviso = document.getElementById("aviso")
const texto1 = document.getElementById("texto1")
const texto2 = document.getElementById("texto2")

btnCriar.addEventListener("click", function(){
    const tarefa = inputTarefa.value.trim();   
   
    if(tarefa !== " "){
        criarDiv.innerText = tarefa;
        

        texto1.textContent = " "
        texto2.textContent = " "

    }
    else{
        let aviso = "Digite algo para criar uma tarefa";
        divAviso.textContent = aviso;
    }
    
})


