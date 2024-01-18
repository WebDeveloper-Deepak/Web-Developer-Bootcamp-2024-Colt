const btn = document.querySelector('#btn');
const doubleBtn = document.querySelector('#btnDouble');

btn.onclick = function () {
    console.log('I am clicked! ');
}

doubleBtn.ondblclick = () => {
    alert('I am clicked on arrow func')
};

btn.onmouseenter = () => {
    alert('Go away');
}

//! addEventListener
const eventBtn = document.getElementById('btnEvent');
eventBtn.addEventListener('click', () => {
    alert('clicked')
});

const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

hello.addEventListener('click', function () {
    console.log('hello');
});

goodbye.addEventListener('click', function () {
    console.log('goodbye');
});

const evenObj = document.getElementById('eventObj');

const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.code);
});

input.addEventListener('keyup', () => {
    console.log('keyup');
});


// !Form

// const form = document.querySelector('form');
// const inputCat = document.querySelector('#catNames');
// const list = document.querySelector('#cats');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const catsName = inputCat.value;

//     const newLi = document.createElement('li');
//     newLi.innerHTML = catsName;

//     list.append(newLi);

//     inputCat.value = '';
// });

//! Practice
const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const button = document.querySelector('button');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const productValue = product.value;
    const qtyValue = qty.value;

    const li = document.createElement('li');
    li.innerHTML = `${productValue} ${qtyValue}`;

    list.appendChild(li);

    product.value = '';
    qty.value = '';
    
})

const inputChanges = document.querySelector('input');
console.log(inputChanges);

inputChanges.addEventListener('input', () => {
    console.log('change');
});