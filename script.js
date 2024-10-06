// Espera que o DOM esteja totalmente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll(".nav-links a");

    // Seleciona o botão de menu e o menu de navegação
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    // Função para adicionar a classe 'active' ao link correspondente
    function setActiveLink() {
        let current = "";

        // Percorre todas as seções da página
        document.querySelectorAll("section").forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Verifica se o scroll atual está dentro da seção
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        // Remove a classe 'active' de todos os links e adiciona ao link correspondente
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    }

    // Executa a função ao carregar a página e ao rolar a página
    window.addEventListener("scroll", setActiveLink);
    setActiveLink(); // Chama a função para definir o link ativo ao carregar a página

    // Adiciona scroll suave ao clicar nos links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Alterna a exibição do menu ao clicar no ícone de menu
    menuToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
    });
});
