const inputTelefone = document.getElementById('input');
const btngeraLink = document.getElementById('btn-icones');
const geraLink = document.getElementById('link');
const copiarLink = document.getElementById('copiar');

btngeraLink.addEventListener('click', function() {
    const telefone = inputTelefone.value;

    if (telefone.trim() !== '') {
        const linkWhatsApp = `https://wa.me//55${telefone}`;
        let copiar = 'Clique no link para copiar'

        geraLink.innerHTML = linkWhatsApp; 
        copiarLink.textContent = copiar;
   
    } else {
        geraLink.textContent = 'Por favor, insira um número de telefone.';
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
})


//A função writeText() retorna uma promise, que é resolvida quando o texto foi copiado com sucesso, ou rejeitada quando ocorre um erro de permissão de escrita.

//Clipboard.writeText()
//writeText()