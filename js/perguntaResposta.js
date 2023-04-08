export function perguntaRespostaHide () {
    const questoes = document.querySelectorAll('.js-questoes dt')
    questoes.forEach(   (questao) =>{
        questao.addEventListener('click', (event) =>{
            const pergunta = event.target
            pergunta.classList.toggle('ativo_pergunta')
            const resposta = event.target.nextElementSibling;
            resposta.classList.toggle('ativo_resposta')
            
        })
    })
    
    }