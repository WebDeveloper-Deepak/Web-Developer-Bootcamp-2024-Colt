const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random < 0.7) {
                resolve('Fake data here');
            }
            reject('Request Error!')
        }, 1000)
    });
};

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('Done with req');
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
};

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('blue', 1000)) 
    .then(() => delayedColorChange('purple', 1000))