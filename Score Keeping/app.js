const playerOneButton = document.querySelector('#p1Button');
const playerTwoButton = document.querySelector('#p2Button');
const p1Display = document.querySelector('.p1-display');
const p2Display = document.querySelector('.p2-display');
const resetBtn = document.querySelector('#reset');
const playToSelect = document.querySelector('#playto');
console.log(playToSelect);

let p1Score = 0;
let p2Score = 0;

let finalScore = 5;

let isGameOver = false;

playerOneButton.addEventListener('click', (e) => {

    if (!isGameOver) {
        p1Score++;
        if (p1Score === finalScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        };

        p1Display.textContent = p1Score;

    };
});

playerTwoButton.addEventListener('click', (e) => {

    if (!isGameOver) {
        p2Score++;
        if (p2Score === finalScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        };

        p2Display.textContent = p2Score;

    };
});

resetBtn.addEventListener('click', reset);

playToSelect.addEventListener('change', (e) => {
    finalScore = parseInt(e.target.value);
})

function reset() {
    isGameOver = false;

    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');

}