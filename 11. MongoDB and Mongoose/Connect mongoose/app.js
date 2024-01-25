const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// Movie.updateOne({title: 'Amelie'}, {year: 1999})
// .then(res => console.log(res));

// Movie.updateMany({title: {$in: ['Lord of the rings', 'SpiderMan']}}, {score: 10})
// .then(res => console.log(res));

// Movie.findOneAndUpdate({ title: 'SpiderMan' }, { score: 7.2 })
//     .then(m => console.log(m));

// Movie.findOneAndDelete({ title: 'Amelie' })
//     .then(r => console.log(r));

// Movie.deleteMany({ year: { $gte: 2005 } })
//     .then(msg => console.log(msg))

// Movie.insertMany([
//     {
//         title: 'Baby Driver',
//         year: 2017,
//         score: 6,
//         rating: 'L'
//     },
//     {
//         title: 'Fast and Furiuos X',
//         year: 2023,
//         score: 5.5,
//         rating: 'L'
//     },
//     {
//         title: 'Memento',
//         year: 2008,
//         score: 8.8,
//         rating: 'W'
//     },
//     {
//         title: 'Vina',
//         year: 2023,
//         score: 7,
//         rating: 'w'
//     },
// ])