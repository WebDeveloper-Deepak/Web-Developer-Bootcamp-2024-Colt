//!Callbacks colors changer demo  

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000);
//     }, 1000);
// }, 1000);

// const delayedColor = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     }, delay)
// };

// delayedColor('red', 1000, () => {
//     delayedColor('orange', 1000, () => {
//         delayedColor('blue', 1000, () => {
//             delayedColor('green', 1000, () => {
//                 console.log('Done after 4s');
//             }) 
//         })
//     })
// })

//! fakeRequest demo
// const fakeRequest = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout')
//         } else {
//             success(`Here is the data from ${url}`)
//         }
//     }, delay);
// };

// fakeRequest('books.com', function () {
//     console.log('It worked');
// }, function () {
//     console.log('error');
// });

//! fakeRequest promises demo

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 resolve('Connection Timeout')
//             } else {
//                 reject(`Here is the data from ${url}`)
//             }
//         }, delay);
//     });
// };

// const req = fakeRequestPromise('amazon.com/api/jeff');
// req.then(() => {
//     console.log('Worked')
// }).catch((err) => {
//     console.log(err);
// })
