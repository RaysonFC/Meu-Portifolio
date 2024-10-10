// Atualiza o círculo de progresso conforme o valor em data-level
document.querySelectorAll('.progress-circle').forEach(circle => {
    const level = circle.getAttribute('data-level');
    const radius = circle.querySelector('circle:nth-child(2)').r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;

    circle.querySelector('circle:nth-child(2)').style.strokeDasharray = `${circumference} ${circumference}`;
    circle.querySelector('circle:nth-child(2)').style.strokeDashoffset = offset;
});

// Função para alternar a barra lateral
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Carrossel da seção "Sobre Mim"
const carrosselItems = document.querySelectorAll('.carrossel-item');
const btnAnterior = document.querySelector('.btn-anterior');
const btnProximo = document.querySelector('.btn-proximo');
let currentItem = 0;

function showCarrosselItem(index) {
    carrosselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

btnAnterior.addEventListener('click', () => {
    currentItem = (currentItem === 0) ? carrosselItems.length - 1 : currentItem - 1;
    showCarrosselItem(currentItem);
});

btnProximo.addEventListener('click', () => {
    currentItem = (currentItem === carrosselItems.length - 1) ? 0 : currentItem + 1;
    showCarrosselItem(currentItem);
});

// Função para adicionar a classe 'visible' conforme o elemento entra e sai da visualização
function observeSections() {
    const options = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', observeSections);

// Esconder o loader após 4 segundos
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading');
        loadingScreen.classList.add('hidden');
    }, 4000);
});
