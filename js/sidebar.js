// Função para alterar o conteúdo do iframe e marcar o botão ativo
function changeFrame(url) {
    const iframe = document.getElementById('mainFrame');
    iframe.src = url;

    // Remover a classe 'active' de todos os links do menu
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.classList.remove('active');
        
        // Verificar se o link corresponde ao URL atual do iframe
        if (link.getAttribute('onclick').includes(`'${url}'`)) {
            link.classList.add('active');
        }
    });
}

// Adicionar eventos de clique aos links do menu
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = link.getAttribute('onclick').match(/'([^']+)'/)[1];
            changeFrame(url);
        });
    });
});