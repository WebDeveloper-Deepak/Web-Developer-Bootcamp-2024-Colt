// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png;

const container = document.getElementById('container');

const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 100; i++) {
    const eachPokemon = document.createElement('div');
    eachPokemon.classList.add('pokemon')
    const image = document.createElement('img');
    const number = document.createElement('span');

    image.src=`${baseUrl}${i}.png`;
    number.innerHTML = `#${i}`;

    eachPokemon.appendChild(image);
    eachPokemon.appendChild(number);

    container.appendChild(eachPokemon)
    
}