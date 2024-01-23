const redditData = require('./data.json');

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const PORT = 5000;

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('rand', { num: num })
});

app.get('/cats', (req, res) => {
    const cats = [
        'Ionko', 'Hristiyan', 'Svilen', 'Kuchko', 'Pamela', 'Krasi'
    ]
    res.render('cats', { cats })
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    res.render('subreddit', { ...data })
});

app.listen(PORT, () => console.log('App is listening on port', PORT));