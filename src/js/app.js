const messageElement = document.getElementById('message');
const confettiContainer = document.getElementById('confetti-container');
const audio = new Audio('assets/sounds/romantic-loop.mp3');

function showMessage() {
    messageElement.classList.add('animate');
    audio.loop = true;
    audio.play();
    createConfetti();
}

function createConfetti() {
    // Logic to generate confetti effect
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showMessage();
});