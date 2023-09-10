document.addEventListener("DOMContentLoaded", function () {
    const webDevHeading = document.getElementById("web-development");
    const appsHeading = document.getElementById("apps");
    const webDevProjects = document.getElementById("web-dev-projects");
    const appsProjects = document.getElementById("apps-projects");

    webDevHeading.addEventListener("click", function () {
        webDevProjects.classList.toggle("show");
        appsProjects.classList.remove("show"); // Hide Apps projects
    });

    appsHeading.addEventListener("click", function () {
        appsProjects.classList.toggle("show");
        webDevProjects.classList.remove("show"); // Hide Web Development projects
    });

    let clickCount = 0; // Initialize click count

    // Function to toggle game visibility
    function toggleGameVisibility() {
        const gameContainer = document.getElementById('game-container');
        if (gameContainer.style.display === 'block') {
            gameContainer.style.display = 'none';
        } else {
            gameContainer.style.display = 'block';
            generateBlocks();
            renderGame();
        }
    }

    // Event listener for "Jean Arraki" clicks
    document.getElementById('jean-arraki').addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 6) {
            toggleGameVisibility();
            clickCount = 0; // Reset click count
        }
    });

    // ASCII Platformer Game Logic
    const gameContainer = document.getElementById('game-container');
    const player = document.createElement('div');
    const blocks = [];

    player.className = 'player';
    player.style.bottom = '0';
    player.style.left = '0';

    gameContainer.appendChild(player);

    function generateBlocks() {
        for (let i = 0; i < 10; i++) {
            const block = document.createElement('div');
            block.className = 'block';
            block.style.bottom = '20px';
            block.style.left = `${Math.random() * 90 + 5}%`;
            blocks.push(block);
            gameContainer.appendChild(block);
        }
    }

    function renderGame() {
        let playerPosition = 0;

        setInterval(() => {
            player.style.left = `${playerPosition}%`;
            playerPosition += 1;
            if (playerPosition > 100) {
                playerPosition = 0;
            }

            blocks.forEach((block) => {
                const blockPosition = parseFloat(block.style.left);
                if (
                    playerPosition < blockPosition + 10 &&
                    playerPosition + 10 > blockPosition &&
                    parseFloat(player.style.bottom) < parseFloat(block.style.bottom) + 10
                ) {
                    toggleGameVisibility();
                }
            });
        }, 100);
    }

    // Other JavaScript code for your website
    // ...
});
