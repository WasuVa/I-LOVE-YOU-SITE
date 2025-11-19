function createFlyingHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('flying-heart');
    heart.innerHTML = '❤️';
    
    const randomX = Math.random() * window.innerWidth;
    heart.style.left = randomX + 'px';
    heart.style.top = window.innerHeight + 'px';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Create hearts every 300ms
setInterval(createFlyingHeart, 300);