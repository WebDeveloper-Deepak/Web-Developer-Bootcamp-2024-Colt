// const res = axios.get('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const ul = document.querySelector('ul');

const getAllHeights = async () => {
    try {
        const res = await axios.get('https://swapi.dev/api/people/');
        const allPersons = res.data.results;

        for (const e of allPersons) {
            const li = document.createElement('li');
            let info = `${e.name} - ${e.height} tall`;
            li.textContent = info;
            ul.appendChild(li)

        };
    } catch (err) {
        console.log(err);
    }

};

const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');

const getDadJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        },
    });
    const joke = res.data.joke;
    const newLi = document.createElement('li');

    newLi.append(joke);
    jokes.append(newLi)
};


button.addEventListener('click', getDadJokes);


getDadJokes()