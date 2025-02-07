// Game Logic
const game = {
    // Initialize game data
    init: function() {
        this.coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;
        this.tokens = localStorage.getItem("tokens") ? parseInt(localStorage.getItem("tokens")) : 0;
        this.streak = localStorage.getItem("streak") ? parseInt(localStorage.getItem("streak")) : 0;

        // Update UI elements
        this.updateBalance();
        this.updateStreak();
    },

    // Update balance display
    updateBalance: function() {
        document.getElementById("coin-balance").textContent = this.coins;
        document.getElementById("token-balance").textContent = this.tokens;
    },

    // Update streak display
    updateStreak: function() {
        document.getElementById("streak-count").textContent = this.streak;
    },

    // Claim daily bonus
    claimDaily: function() {
        // Check if user has already claimed today
        let lastClaimDate = localStorage.getItem("lastClaim");
        if (!lastClaimDate || new Date(lastClaimDate).getDate() !== new Date().getDate()) {
            // Calculate reward based on streak
            let reward = 100 + (this.streak * 50);
            this.coins += reward;

            // Update streak and last claim date
            this.streak++;
            localStorage.setItem("lastClaim", new Date().toISOString());
            localStorage.setItem("streak", this.streak);
            this.updateBalance();
            this.updateStreak();
            alert(`Claimed Daily Bonus! You received ${reward} coins!`);
        } else {
            alert("You have already claimed your daily bonus today!");
        }
    },

    // Show a specific section
    showSection: function(section) {
        // Hide all sections
        document.querySelectorAll(".section-card").forEach(card => card.classList.remove("active"));
        // Show the selected section
        document.getElementById(section).classList.add("active");
    }
};

// Initialize the game
game.init();

// Add event listener for coin rain button
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