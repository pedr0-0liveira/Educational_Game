const trilhas = {
    "Matematica": [
        { id: 1, nome: "Números", subtopico: "Sistema Decimal e Romano", desc: "Ordens, classes e numeração romana", xpNecessario: 0 },
        { id: 2, nome: "Operações", subtopico: "Naturais e Decimais", desc: "Adição, subtração, multiplicação e divisão", xpNecessario: 50 },
        { id: 3, nome: "Frações", subtopico: "Frações", desc: "Operações com frações e decimais", xpNecessario: 120 },
        { id: 4, nome: "Aritmética", subtopico: "Múltiplos e Divisores", desc: "MMC e MDC", xpNecessario: 200 },
        { id: 5, nome: "Medidas", subtopico: "Grandezas e Medidas", desc: "Tempo, comprimento e transformações", xpNecessario: 300 },
        { id: 6, nome: "Proporção", subtopico: "Razão e Proporção", desc: "Regra de três e Porcentagem", xpNecessario: 420 },
        { id: 7, nome: "Geometria I", subtopico: "Geometria Plana", desc: "Polígonos, Perímetro e Área", xpNecessario: 550 },
        { id: 8, nome: "Geometria II", subtopico: "Sólidos", desc: "Volumes e vistas de sólidos", xpNecessario: 700 },
        { id: 9, nome: "Gráficos", subtopico: "Tratamento da Informação", desc: "Leitura de tabelas e gráficos", xpNecessario: 850 },
        { id: 10, nome: "Lógica", subtopico: "Raciocínio Lógico", desc: "Desafios e situações-problema", xpNecessario: 1000 }
    ],
    "Portugues": [
        { id: 1, nome: "Acentuação", subtopico: "Acentuação Gráfica", desc: "Oxítonas, paroxítonas e hiatos", xpNecessario: 0 },
        { id: 2, nome: "Ortografia", subtopico: "Ortografia", desc: "Emprego de letras e hífen", xpNecessario: 50 },
        { id: 3, nome: "Pontuação", subtopico: "Pontuação", desc: "Vírgula e sinais de pontuação", xpNecessario: 120 },
        { id: 4, nome: "Morfologia I", subtopico: "Classes de Palavras", desc: "Substantivos, adjetivos e pronomes", xpNecessario: 200 },
        { id: 5, nome: "Morfologia II", subtopico: "Verbos", desc: "Tempos e modos verbais", xpNecessario: 300 },
        { id: 6, nome: "Sintaxe I", subtopico: "Termos da Oração", desc: "Sujeito, predicado e objetos", xpNecessario: 420 },
        { id: 7, nome: "Sintaxe II", subtopico: "Adjuntos e Vocativo", desc: "Adjuntos, aposto e vocativo", xpNecessario: 550 },
        { id: 8, nome: "Concordância", subtopico: "Concordância e Regência", desc: "Concordância e uso da Crase", xpNecessario: 700 },
        { id: 9, nome: "Semântica", subtopico: "Semântica", desc: "Sinônimos, antônimos e homônimos", xpNecessario: 850 },
        { id: 10, nome: "Estilística", subtopico: "Figuras de Linguagem", desc: "Metáforas e Conotação", xpNecessario: 1000 }
    ]
};

// Certifique-se que o banco de questões use os mesmos nomes de 'subtopico' acima!
const bancoQuestoes = [
    // --- MATEMÁTICA ---
    
    // Nível 1: Sistema Decimal e Romano
    {
        pergunta: "No número 57.432, qual é o algarismo que ocupa a ordem das dezenas de milhar?",
        opcoes: ["4", "7", "5", "3"],
        correta: 2, materia: "Matematica", subtopico: "Sistema Decimal e Romano"
    },
    {
        pergunta: "Como se representa o número 94 em algarismos romanos?",
        opcoes: ["LXXXXIV", "XCIV", "XCXIV", "CIV"],
        correta: 1, materia: "Matematica", subtopico: "Sistema Decimal e Romano"
    },
    {
        pergunta: "Qual é o valor posicional do algarismo 8 no número 1.845?",
        opcoes: ["8", "80", "800", "8.000"],
        correta: 2, materia: "Matematica", subtopico: "Sistema Decimal e Romano"
    },

    // Nível 2: Naturais e Decimais
    {
        pergunta: "Qual é o resultado de 15,4 + 3,85?",
        opcoes: ["19,25", "18,25", "19,45", "18,9"],
        correta: 0, materia: "Matematica", subtopico: "Naturais e Decimais"
    },
    {
        pergunta: "Em uma multiplicação de 124 por 5, o resultado é:",
        opcoes: ["520", "600", "620", "720"],
        correta: 2, materia: "Matematica", subtopico: "Naturais e Decimais"
    },
    {
        pergunta: "Se eu dividir 4,5 por 0,5, qual será o quociente?",
        opcoes: ["0,9", "9", "45", "5"],
        correta: 1, materia: "Matematica", subtopico: "Naturais e Decimais"
    },

    // Nível 3: Frações
    {
        pergunta: "Qual é o resultado da soma 1/4 + 2/4?",
        // Renderizado como texto simples: 3/4
        opcoes: ["3/4", "3/8", "1/2", "4/4"],
        correta: 0, materia: "Matematica", subtopico: "Frações"
    },
    {
        pergunta: "O que representa uma fração imprópria?",
        opcoes: ["O numerador é menor que o denominador", "O numerador é igual ao denominador", "O numerador é maior que o denominador", "O denominador é zero"],
        correta: 2, materia: "Matematica", subtopico: "Frações"
    },
    {
        pergunta: "Quanto é 2/5 de 100?",
        opcoes: ["20", "40", "50", "60"],
        correta: 1, materia: "Matematica", subtopico: "Frações"
    },

    // --- PORTUGUÊS ---

    // Nível 1: Acentuação Gráfica
    {
        pergunta: "Qual das palavras abaixo é uma proparoxítona?",
        opcoes: ["Café", "Lâmpada", "Caju", "Mesa"],
        correta: 1, materia: "Portugues", subtopico: "Acentuação Gráfica"
    },
    {
        pergunta: "Assinale a alternativa onde todas as palavras são acentuadas por serem oxítonas:",
        opcoes: ["Parabéns, cipó, marajá", "Régua, táxi, fênix", "Pássaro, tônico, música", "Você, álbum, revólver"],
        correta: 0, materia: "Portugues", subtopico: "Acentuação Gráfica"
    },
    {
        pergunta: "A palavra 'saída' é acentuada por qual regra?",
        opcoes: ["Oxítona terminada em A", "Monossílabo tônico", "Regra do hiato (I tônico sozinho na sílaba)", "Paroxítona terminada em A"],
        correta: 2, materia: "Portugues", subtopico: "Acentuação Gráfica"
    },

    // Nível 2: Ortografia
    {
        pergunta: "Assinale a alternativa em que a palavra está escrita corretamente:",
        opcoes: ["Analizar", "Pesquizar", "Analisar", "Civilizar (com S)"],
        correta: 2, materia: "Portugues", subtopico: "Ortografia"
    },
    {
        pergunta: "Qual o uso correto do hífen após a nova reforma ortográfica?",
        opcoes: ["Auto-escola", "Micro-ondas", "Anti-social", "Mão-de-obra"],
        correta: 1, materia: "Portugues", subtopico: "Ortografia"
    },
    {
        pergunta: "Complete corretamente: 'Ele agiu com muita ____ ao resolver o problema'.",
        opcoes: ["Eficácia", "Eficázia", "Efiçácia", "Eficássia"],
        correta: 0, materia: "Portugues", subtopico: "Ortografia"
    },

    // Nível 3: Pontuação
    {
        pergunta: "Em qual frase a vírgula é usada para separar um vocativo?",
        opcoes: ["Comi arroz, feijão e carne.", "Maria, venha jantar agora!", "Ele chegou, viu e venceu.", "Ontem, eu fui ao cinema."],
        correta: 1, materia: "Portugues", subtopico: "Pontuação"
    },
    {
        pergunta: "Qual sinal de pontuação deve ser usado para introduzir uma fala ou uma explicação?",
        opcoes: ["Ponto e vírgula", "Reticências", "Dois-pontos", "Ponto final"],
        correta: 2, materia: "Portugues", subtopico: "Pontuação"
    },
    {
        pergunta: "As reticências (...) são geralmente usadas para:",
        opcoes: ["Encerrar uma pergunta", "Indicar interrupção ou hesitação de pensamento", "Separar itens de uma lista", "Finalizar uma afirmação"],
        correta: 1, materia: "Portugues", subtopico: "Pontuação"
    }
];