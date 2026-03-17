// Função para alternar entre as telas de Login e Cadastro
function trocarTela() {
    const login = document.getElementById('area-login');
    const cadastro = document.getElementById('area-cadastro');
    
    if (login.style.display === 'none') {
        login.style.display = 'block';
        cadastro.style.display = 'none';
    } else {
        login.style.display = 'none';
        cadastro.style.display = 'block';
    }
}

// Função de CADASTRO - CORRIGIDA
function cadastrar() {
    const user = document.getElementById('cad-user').value;
    const pass = document.getElementById('cad-pass').value;

    if (user === "" || pass === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Salva as credenciais
    localStorage.setItem('usuarioSalvo', user);
    localStorage.setItem('senhaSalva', pass);
    
    // --- CORREÇÃO: INICIALIZAÇÃO DE DADOS PARA O DASHBOARD ---
    
    // 1. Inicializa o XP com 0
    localStorage.setItem('xpUsuario', '0');

    // 2. Inicializa o Objeto de Estatísticas (Essencial para não travar o Dashboard)
    const statsIniciais = {
        Matematica: { acertos: 0, total: 0 },
        Portugues: { acertos: 0, total: 0 }
    };
    localStorage.setItem('statsUsuario', JSON.stringify(statsIniciais));

    alert("Cadastro realizado! Agora faça o login.");
    trocarTela();
}

// Função de LOGIN
function fazerLogin() {
    const userDigitado = document.getElementById('login-user').value;
    const passDigitado = document.getElementById('login-pass').value;

    const userNoBanco = localStorage.getItem('usuarioSalvo');
    const passNoBanco = localStorage.getItem('senhaSalva');

    if (userDigitado === userNoBanco && passDigitado === passNoBanco && userNoBanco !== null) {
        window.location.href = "dashboard.html"; 
    } else {
        alert("Usuário ou senha incorretos.");
    }
}