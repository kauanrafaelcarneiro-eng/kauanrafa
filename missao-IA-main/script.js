const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um artefato antigo escondido nas ruínas de um castelo. O que você faz?",
        alternativas: [
            {
                texto: "Levo o artefato para os magos estudarem seus perigos.",
                afirmacao: "Você age com a sabedoria e a cautela de um grande conselheiro de reinos."
            },
            {
                texto: "Fico com ele para usar seus poderes místicos na batalha.",
                afirmacao: "Você possui a ambição e a coragem de um guerreiro destemido que molda o próprio destino."
            }
        ]
    }
];

let atual = 0;

function mostraPergunta() {
    let perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach((alternativa) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => {
            caixaPerguntas.textContent = "Sua jornada terminou!";
            caixaAlternativas.textContent = "";
            caixaResultado.style.display = "block";
            textoResultado.textContent = alternativa.afirmacao;
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

mostraPergunta();
