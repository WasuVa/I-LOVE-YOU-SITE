const butterflyColors = ['butterfly-red', 'butterfly-blue', 'butterfly-yellow', 'butterfly-purple', 'butterfly-pink', 'butterfly-green'];

function createButterfly() {
    const container = document.getElementById('hearts-container');
    const butterfly = document.createElement('div');
    const randomColor = butterflyColors[Math.floor(Math.random() * butterflyColors.length)];
    
    butterfly.classList.add('butterfly', randomColor);
    butterfly.innerHTML = '🦋';
    
    const randomX = Math.random() * window.innerWidth;
    butterfly.style.left = randomX + 'px';
    butterfly.style.top = window.innerHeight + 'px';
    
    container.appendChild(butterfly);
    
    setTimeout(() => {
        butterfly.remove();
    }, 8000);
}

// Create butterflies every 800ms
setInterval(createButterfly, 800);