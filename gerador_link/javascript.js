const inputTelefone = document.getElementById('input');
const btngeraLink = document.getElementById('btnLink');
const btnClike = document.getElementById('btnClike');
const geraLink = document.getElementById('link');
const copiarLink = document.getElementById('copiar');


//btngeraLink.disabled = true; 
btnClike.disabled = true;

btngeraLink.addEventListener('click', function() {
    const telefone = inputTelefone.value;


    if (telefone.trim() !== '' &&  telefone.length === 15) {

        const linkWhatsApp = `https://wa.me//55${telefone}`;
        let copiar = 'Clique no link para copiar'

        geraLink.innerHTML = linkWhatsApp; 
        inputTelefone.style.color = 'green';
        geraLink.classList.add("link")
        btnClike.disabled = false;
        
        copiarLink.textContent = copiar;

   
    } else {
        geraLink.textContent = 'Por favor, insira um número de telefone válido com 11 dígitos.';
    }
})

function clicar() {
    navigator.clipboard.writeText(inputTelefone.value).then(() => {
        alert('Copiado para a área de transferência.')

        let copiar = 'Link copiado para área de transferência'
        copiarLink.textContent = copiar
    })
}

inputTelefone.addEventListener('click', function(){
    copiarLink.textContent = '';
    geraLink.textContent = '';
    geraLink.classList.remove("link")
    inputTelefone.style.color = '';
})



inputTelefone.addEventListener('input', function(){

    const valorTelefone = inputTelefone.value.replace(/\D/g, '');
    inputTelefone.value = valorTelefone;


    let mascara = valorTelefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    inputTelefone.value = mascara 

    
})

function novaAba(url){
    var win = window.open(url, '_blank');
    win.focus();
}

btnClike.addEventListener('click', function() {
    const telefone = inputTelefone.value;
    if (telefone.trim() !== '' &&  telefone.length === 15) {
        let url = geraLink.innerText
        novaAba(url);
    }
    
  });



  
