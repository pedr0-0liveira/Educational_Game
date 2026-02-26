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

// Função de CADASTRO
function cadastrar() {
    const user = document.getElementById('cad-user').value;
    const pass = document.getElementById('cad-pass').value;

    if (user === "" || pass === "") {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem('usuarioSalvo', user);
    localStorage.setItem('senhaSalva', pass);
    
    // Inicializa o XP com 0 caso não exista
    if (!localStorage.getItem('xpUsuario')) {
        localStorage.setItem('xpUsuario', '0');
    }

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