const perguntas = document.querySelectorAll('.pergunta')
const respostas = document.querySelectorAll('.resposta')

function mostrarResposta (pergunta, resposta) {
   pergunta.classList.toggle('pergunta-activo');
   resposta.classList.toggle('resposta-oculta');
}

for (let contador = 0; contador < perguntas.length; contador++) {
    const pergunta = perguntas[contador]
    const resposta = respostas[contador] 

    pergunta.onclick = function () {
        mostrarResposta(pergunta,resposta);
    }
}