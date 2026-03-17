// 1. Filtros e Preparação
const materiaFiltro = localStorage.getItem('materiaFiltro');
const subtopicoFiltro = localStorage.getItem('subtopicoFiltro');

const questoesParaExibir = bancoQuestoes.filter(q => 
    q.materia === materiaFiltro && q.subtopico === subtopicoFiltro
);

let questaoAtual = 0;
let xpTotal = 0;

// PROTEÇÃO: Se não houver questões, volta para a seleção
if (questoesParaExibir.length === 0) {
    alert("Nenhuma questão encontrada para este subtópico.");
    window.location.href = "selecao-subtopico.html";
} else {
    carregarQuestao(); // Só inicia se houver questões
}

// 2. Função para carregar a pergunta na tela
function carregarQuestao() {
    const q = questoesParaExibir[questaoAtual];
    
    document.getElementById('texto-pergunta').innerText = q.pergunta;
    document.getElementById('contador-questoes').innerText = `Questão: ${questaoAtual + 1}/${questoesParaExibir.length}`;
    
    const caixaOpcoes = document.getElementById('caixa-opcoes');
    caixaOpcoes.innerHTML = ""; 

    q.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.innerText = opcao;
        botao.classList.add('btn-opcao');
        botao.onclick = () => verificarResposta(index);
        caixaOpcoes.appendChild(botao);
    });
}

// 3. Função para processar a resposta
function verificarResposta(escolhida) {
    const q = questoesParaExibir[questaoAtual];
    
    let stats = JSON.parse(localStorage.getItem('statsUsuario')) || {
        Matematica: { acertos: 0, total: 0 },
        Portugues: { acertos: 0, total: 0 }
    };

    if (escolhida === q.correta) {
        alert("Acertou! +10 XP");
        xpTotal += 10;
        stats[q.materia].acertos++; 
    } else {
        alert("Errou! A resposta correta era: " + q.opcoes[q.correta]);
    }

    stats[q.materia].total++; 
    localStorage.setItem('statsUsuario', JSON.stringify(stats)); 
    
    document.getElementById('xp-ganho').innerText = `XP: ${xpTotal}`;
    
    questaoAtual++;

    if (questaoAtual < questoesParaExibir.length) {
        carregarQuestao();
    } else {
        finalizarSimulado();
    }
}

// 4. Finalização
function finalizarSimulado() {
    alert(`Simulado concluído! Você ganhou ${xpTotal} XP.`);
    let xpAntigo = parseInt(localStorage.getItem('xpUsuario') || "0");
    localStorage.setItem('xpUsuario', xpAntigo + xpTotal);
    window.location.href = "dashboard.html";
}