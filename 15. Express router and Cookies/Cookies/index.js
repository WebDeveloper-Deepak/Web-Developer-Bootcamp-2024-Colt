const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('thisIsaSecretKey'));

app.get('/greet', (req, res) => {
    const { name = 'No Name' } = req.cookies;
    res.send(`Hey ${name}`);
});


app.get('/setname', (req, res) => {
    res.cookie('name', 'kyki');
    res.cookie('animal', 'cat');
    res.send('Cookie sent');
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('Cookie signed')
})

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies);
})


app.listen(3000, () => console.log('App is listening on port 3000'));