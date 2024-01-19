const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('.p1-display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('.p2-display'),
}

const resetButton = document.querySelector('#reset');
const selectOptions = document.querySelector('#playto');

let p1Count = 0;
let p2Count = 0;

let totalPoints = 5;

let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === totalPoints) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        };

        player.display.textContent = player.score;
    }
};

p1.button.addEventListener('click', (e) => {
    updateScore(p1, p2)
});

p2.button.addEventListener('click', (e) => {
    updateScore(p2, p1)
});


selectOptions.addEventListener('change', (e) => {
    totalPoints = parseInt(e.target.value);
    reset()
});

resetButton.addEventListener('click', reset);

function reset() {

    isGameOver = false;

    for (const p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
