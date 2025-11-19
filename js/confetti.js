function createConfetti() {
    const colors = ['#FFC700', '#FF3D00', '#FF6F00', '#D50000', '#00C853', '#00B0FF', '#6200EA'];
    const confettiCount = 100;
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.pointerEvents = 'none';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.width = '10px';
        confettiPiece.style.height = '10px';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.opacity = Math.random();
        confettiPiece.style.transform = `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) rotate(${Math.random() * 360}deg)`;
        confettiPiece.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        confettiContainer.appendChild(confettiPiece);

        setTimeout(() => {
            confettiPiece.style.transform = `translate(${Math.random() * 100}vw, 100vh) rotate(${Math.random() * 360}deg)`;
            confettiPiece.style.opacity = 0;
        }, 100);
    }

    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('love-message');
    messageElement.addEventListener('click', createConfetti);
});