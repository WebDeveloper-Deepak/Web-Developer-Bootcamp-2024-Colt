const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

for (const button of buttons) {
    button.addEventListener('click', colorize);
};

for (const h1 of h1s) {
    h1.addEventListener('click', colorize);
}

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}