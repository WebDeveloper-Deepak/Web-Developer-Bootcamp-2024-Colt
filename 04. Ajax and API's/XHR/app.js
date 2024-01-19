const req= new XMLHttpRequest();

req.onload = function () {
    console.log('loaded');
    const data = JSON.parse(this.responseText);
    console.log(data.hair_color);
};

req.onerror = function () {
    console.log('err');
    console.log(this);
};

req.open('GET', 'https://swapi.dev/api/people/1/');
req.send();