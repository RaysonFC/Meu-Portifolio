// Seleciona o botão de toggle e a sidebar
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar');
const skillCardContainer = document.getElementById('skillCardContainer');

// Dados das habilidades
const skillsData = {
    JavaScript: {
        image: 'https://i.ibb.co/SfMRkKM/java.png',
        description: 'JavaScript é uma linguagem de programação versátil usada para o desenvolvimento web.',
    },
    'SQL Server': {
        image: 'https://i.ibb.co/4JNQH6v/sql.png',
        description: 'SQL Server é um sistema de gerenciamento de banco de dados relacional.',
    },
    CSS: {
        image: 'https://i.ibb.co/4mLJmN9/css.png',
        description: 'CSS é utilizado para estilizar e organizar o layout de páginas web.',
    },
    HTML: {
        image: 'https://i.ibb.co/LYdvy1K/html.png',
        description: 'HTML é a linguagem de marcação base para criar estruturas de páginas web.',
    },
    Python: {
        image: 'https://i.ibb.co/NmBNm7s/python.png',
        description: 'Python é uma linguagem de programação poderosa e fácil de aprender, usada em diversas áreas.',
    },
    'Power BI': {
        image: 'https://i.ibb.co/8x7dC2X/powerbi.png',
        description: 'Power BI é uma ferramenta de visualização de dados que ajuda a criar relatórios dinâmicos.',
    }
};

// Adiciona funcionalidade de recolhimento/expansão ao botão de toggle
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Evento de clique nas habilidades
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
        const skillName = skill.getAttribute('data-skill');
        const skillData = skillsData[skillName];

        // Atualiza o conteúdo do card da habilidade
        skillCardContainer.innerHTML = `
            <div class="skill-card active">
                <img src="${skillData.image}" alt="${skillName}" class="skill-card-image">
                <h3>${skillName}</h3>
                <p>${skillData.description}</p>
            </div>
        `;
    });
});

// Carrossel da seção "Sobre Mim"
const carrosselItems = document.querySelectorAll('.carrossel-item');
const btnAnterior = document.querySelector('.btn-anterior');
const btnProximo = document.querySelector('.btn-proximo');
let currentItem = 0;

// Função para mostrar o item do carrossel com base no índice atual
function showCarrosselItem(index) {
    carrosselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

// Eventos de clique nos botões de navegação do carrossel
btnAnterior.addEventListener('click', () => {
    currentItem = (currentItem === 0) ? carrosselItems.length - 1 : currentItem - 1;
    showCarrosselItem(currentItem);
});

btnProximo.addEventListener('click', () => {
    currentItem = (currentItem === carrosselItems.length - 1) ? 0 : currentItem + 1;
    showCarrosselItem(currentItem);
});

// Função para adicionar ou remover a classe 'visible' conforme o elemento entra e sai da visualização
function observeSections() {
    const options = {
        threshold: 0.1 // Quando 10% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove a classe para que o efeito aconteça novamente
            }
        });
    }, options);

    // Seleciona todas as seções e elementos internos que terão o efeito de surgimento
    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
}

// Executa a função ao carregar o conteúdo
document.addEventListener('DOMContentLoaded', observeSections);

// Esconde o loader após 4 segundos quando o conteúdo estiver carregado
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading');
        loadingScreen.classList.add('hidden');
    }, 4000); // Atraso de 4 segundos
});
