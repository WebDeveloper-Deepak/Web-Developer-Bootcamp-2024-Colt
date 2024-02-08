const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelpCamp')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log(err);
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('DB Connected');
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];


const seedDb = async () => {
    await Campground.deleteMany({});

    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '65bb5230b6ea413cbea7dc69',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/dueyjpksa/image/upload/v1707381280/YelpCamp/gd4hcpt6o1gpb9kkv8x4.png',
                    filename: 'YelpCamp/gd4hcpt6o1gpb9kkv8x4',
                },
                {
                    url: 'https://res.cloudinary.com/dueyjpksa/image/upload/v1707381281/YelpCamp/phusenhokqasf1bdpjbw.png',
                    filename: 'YelpCamp/phusenhokqasf1bdpjbw',
                }
            ], description: 'This is going to be a random description for now.',
            price: price,
        });

        await camp.save();
    };
};

seedDb()
    .then(() => {
        mongoose.connection.close();
    })