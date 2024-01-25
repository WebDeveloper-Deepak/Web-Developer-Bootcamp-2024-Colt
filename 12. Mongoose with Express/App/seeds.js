const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmApp')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log(err);
    });

    const seedProducts = [
        {
            name: 'Eggplant',
            price: 1.00,
            category: 'vegetable'
        },
        {
            name: 'Melon',
            price: 4.99,
            category: 'fruit'
        },
        {
            name: 'Watermelon',
            price: 6.99,
            category: 'fruit'
        },
        {
            name: 'Celery',
            price: 1.50,
            category: 'vegetable'
        },
        {
            name: 'Cheese',
            price: 15.00,
            category: 'dairy'
        },
    ]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });