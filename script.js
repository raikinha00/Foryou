document.addEventListener('DOMContentLoaded', () => {
    const specialBtn = document.getElementById('special-btn');
    const messages = [
        "Tu é a pessoa mais especial da minha vida ❤️",
        "Cada momento contigo é um tesouro que guardo no coração 💖",
        "O teu sorriso é a luz que ilumina meus dias 🌟",
        "Nosso amor é mais forte a cada dia que passa 💑",
        "Tu me fazes querer ser uma pessoa melhor 💝",
        "Obrigado por fazeres parte da minha vida 🥰",
        "Tu es o meu presente mais precioso 🎁",
        "Te amo mais que tudo nesse mundo! 💘",
        "Te amo muito meu amor, minha macaquinha, minha mulher, minha tudoooo ❤️💕"
    ];
    let currentMessageIndex = 0;

    // Adiciona efeito de hover nos cartões de mensagem
    const messageCards = document.querySelectorAll('.message-card');
    messageCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Botão especial que mostra mensagens românticas
    specialBtn.addEventListener('click', () => {
        const heart = document.getElementById('heart');
        heart.style.animation = 'none';
        heart.offsetHeight; // Trigger reflow
        heart.style.animation = 'heartbeat 1.2s infinite';

        // Cria um novo elemento para a mensagem
        const messageElement = document.createElement('div');
        messageElement.classList.add('special-message');
        messageElement.textContent = messages[currentMessageIndex];
        messageElement.style.opacity = '0';
        
        // Encontra e remove mensagem anterior se existir
        const oldMessage = document.querySelector('.special-message');
        if (oldMessage) {
            oldMessage.remove();
        }

        // Adiciona nova mensagem
        document.querySelector('.special-moment').appendChild(messageElement);

        // Anima a entrada da mensagem
        setTimeout(() => {
            messageElement.style.transition = 'opacity 0.5s ease-in';
            messageElement.style.opacity = '1';
        }, 10);

        // Atualiza índice para próxima mensagem
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    });

    // Adiciona efeito de neve de corações
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);

        // Remove o coração depois da animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Cria corações caindo a cada 300ms
    setInterval(createHeart, 300);

    // Adiciona estilos CSS dinamicamente para os corações caindo
    const style = document.createElement('style');
    style.textContent = `
        .falling-heart {
            position: fixed;
            top: -20px;
            font-size: 20px;
            animation: fall linear forwards;
            z-index: 1;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }

        .special-message {
            margin-top: 20px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            color: #ff6b6b;
            font-size: 1.2em;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
}); 
