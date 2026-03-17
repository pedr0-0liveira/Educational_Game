let questaoAtual = 0;
let acertos = 0;
let questoesFiltradas = [];

// 1. Carregar as questões ao abrir a página
window.onload = () => {
    const materiaDesejada = localStorage.getItem('materiaFiltro');
    const subtopicoDesejado = localStorage.getItem('subtopicoFiltro');

    // Filtra do banco que você me enviou
    questoesFiltradas = bancoQuestoes.filter(q => 
        q.materia === materiaDesejada && q.subtopico === subtopicoDesejado
    );

    // Embaralha as questões para não ser sempre igual
    questoesFiltradas.sort(() => Math.random() - 0.5);

    if (questoesFiltradas.length > 0) {
        exibirQuestao();
    } else {
        alert("Ops! Nenhuma questão encontrada para este tópico.");
        window.location.href = 'selecao-materia.html';
    }
};

function exibirQuestao() {
    const q = questoesFiltradas[questaoAtual];
    
    // Atualiza o contador no topo
    document.getElementById('contador-questoes').innerText = `Questão: ${questaoAtual + 1}/${questoesFiltradas.length}`;
    
    // Insere a pergunta
    document.getElementById('texto-pergunta').innerText = q.pergunta;
    
    // Gera os botões de opções
    const containerOpcoes = document.getElementById('caixa-opcoes');
    containerOpcoes.innerHTML = "";

    q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcao';
        btn.innerText = opcao;
        btn.onclick = () => checarResposta(index);
        containerOpcoes.appendChild(btn);
    });
}

function checarResposta(escolha) {
    const correta = questoesFiltradas[questaoAtual].correta;

    if (escolha === correta) {
        acertos++;
        // Mostra XP parcial apenas visualmente
        document.getElementById('xp-ganho').innerText = `XP: ${acertos * 10}`;
    }

    questaoAtual++;

    if (questaoAtual < questoesFiltradas.length) {
        exibirQuestao();
    } else {
        salvarResultados();
    }
}

// 2. A PARTE QUE CORRIGE O SEU DASHBOARD
function salvarResultados() {
    const materia = localStorage.getItem('materiaFiltro'); // "Matematica" ou "Portugues"
    const xpGanhado = acertos * 10;

    // --- ATUALIZAR XP TOTAL ---
    let xpAntigo = parseInt(localStorage.getItem('xpUsuario') || "0");
    localStorage.setItem('xpUsuario', (xpAntigo + xpGanhado).toString());

    // --- ATUALIZAR ESTATÍSTICAS (ACERTOS E TOTAL) ---
    let stats = JSON.parse(localStorage.getItem('statsUsuario')) || {
        Matematica: { acertos: 0, total: 0 },
        Portugues: { acertos: 0, total: 0 }
    };

    // Incrementa os dados na matéria correta
    if (stats[materia]) {
        stats[materia].acertos += acertos;
        stats[materia].total += questoesFiltradas.length;
    }

    // Salva de volta no LocalStorage como texto JSON
    localStorage.setItem('statsUsuario', JSON.stringify(stats));

    alert(`Simulado Finalizado!\nAcertos: ${acertos}\nXP Ganho: ${xpGanhado}`);
    
    // Volta para o Dashboard para ver o progresso atualizado
    window.location.href = 'dashboard.html';
}