const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const User = require('./models/user');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://127.0.0.1:27017/ExpressBcrypt')
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

app.use(express.urlencoded({ extended: true }));
app.use(session({secret: 'notagoodsecret'}));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    };

    next();
};

app.get('/', (req, res) => {
    res.send('register complete')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', async (req, res) => {
    const { password, username } = req.body;

    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hashPassword,
    });

    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    const foundUser = await User.findAndValidate(username, password)
   
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    };

});

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
});

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
});

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('top secret')
});


app.listen(3000, () => console.log('App is listening on port 3000'))