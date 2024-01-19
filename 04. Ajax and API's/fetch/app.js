// fetch('https://swapi.dev/api/people/1/')
//     .then(res => {
//         res.json()
//             .then(data => {
//                 console.log(data);
//             });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const container = document.querySelector('div');
const ul = document.querySelector('ul');

const loadPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json()
    const results = data.results;

    for (const name of results) {
        const li = document.createElement('li');
        li.textContent = name.name;
        ul.appendChild(li);
    };

    container.appendChild(ul)


}

loadPeople()