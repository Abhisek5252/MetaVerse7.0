// Coin Rain Game
document.getElementById("coin-rain-btn").addEventListener("click", function() {
    let coinCount = 10; // Number of coins to rain
    for (let i = 0; i < coinCount; i++) {
        let coin = document.createElement("div");
        coin.classList.add("coin");
        coin.textContent = "🪙";
        coin.style.left = Math.random() * 100 + "%";
        document.body.appendChild(coin);

        // Remove coin after animation
        coin.addEventListener('animationend', () => {
            document.body.removeChild(coin);
        });
    }
});