//! Traversing Parent/Child/Sibling
const firstBold = document.querySelector('b');

const parentElement = firstBold.parentElement;
const parentElementSecond = firstBold.parentElement.parentElement;

const firstParagraph = firstBold.parentElement;
const firstParagraphChildren = firstParagraph.children;

const secondImage = document.querySelector('.square');
const nextSibling = secondImage.nextSibling;
const previousSibling = secondImage.previousSibling;

const nextElementSibling = secondImage.nextElementSibling;
const prevElementSibling = secondImage.previousElementSibling;

const prevElementFirstBold = prevElementSibling.children[0];

//! Append & AppendChild
const newImage = document.createElement('img');
newImage.src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww';

document.body.appendChild(newImage);
newImage.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerHTML = 'This a new h3 created for testing purposes only';
document.body.appendChild(newH3);

const firstP = document.querySelector('p');
firstP.append('Testing append on the first p tag')
firstP.append(newH3)

const newBoldText = document.createElement('b');
newBoldText.innerText = 'This is a new bold tag which will be placed at the beginning of the first p tag ';
firstP.prepend(newBoldText);

const h2 = document.createElement('h2');
h2.append('Adding new text between the heading and the image');
const heading = document.querySelector('h1');
heading.insertAdjacentElement('afterend', h2);

//! removeChild and remove
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi)

const removeSecondImage = document.querySelector('.square');
removeSecondImage.remove();