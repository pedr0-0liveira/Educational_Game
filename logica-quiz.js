let questaoAtual = 0;
let xpTotal = 0;

function carregarQuestao() {
    const q = bancoQuestoes[questaoAtual];
    document.getElementById('texto-pergunta').innerText = q.pergunta;
    document.getElementById('contador-questoes').innerText = `Questão: ${questaoAtual + 1}/${bancoQuestoes.length}`;
    
    const caixaOpcoes = document.getElementById('caixa-opcoes');
    caixaOpcoes.innerHTML = ""; // Limpa as opções da questão anterior

    q.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.innerText = opcao;
        botao.classList.add('btn-opcao');
        botao.onclick = () => verificarResposta(index);
        caixaOpcoes.appendChild(botao);
    });
}

function verificarResposta(escolhida) {
    const q = bancoQuestoes[questaoAtual];
    
    if (escolhida === q.correta) {
        alert("Acertou! +10 XP");
        xpTotal += 10;
        document.getElementById('xp-ganho').innerText = `XP: ${xpTotal}`;
    } else {
        alert("Errou! A resposta correta era: " + q.opcoes[q.correta]);
    }

    questaoAtual++;

    if (questaoAtual < bancoQuestoes.length) {
        carregarQuestao();
    } else {
        finalizarSimulado();
    }
}

function finalizarSimulado() {
    alert(`Simulado concluído! Você ganhou ${xpTotal} XP.`);
    
    // Salva o XP no localStorage para o Dashboard ler depois
    let xpAntigo = parseInt(localStorage.getItem('xpUsuario') || "0");
    localStorage.setItem('xpUsuario', xpAntigo + xpTotal);
    
    window.location.href = "dashboard.html";
}

// Inicia o quiz pela primeira vez
carregarQuestao();