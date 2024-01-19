const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputSearch = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, {
        params: {
            q: inputSearch
        },
    });

    extractInfo(res.data);

    form.elements.query.value = ''
});

function extractInfo(shows) {
    for (const res of shows) {

        if (res.show.image) {
            const img = document.createElement('img');
            const text = document.createElement('p');

            const currText = res.show.name;
            const currImg = res.show.image.medium;

            img.src = currImg;
            text.textContent = currText;

            document.body.append(img);
            document.body.append(text);
        };
    };
};
