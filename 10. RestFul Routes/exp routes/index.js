const express = require('express');
const app = express();
const path = require('path');
const { v4: getId } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: getId(),
        username: 'Todd',
        comment: 'LOL that is funny'
    },
    {
        id: getId(),
        username: 'Skyler',
        comment: 'I like birdwatch with my dog'
    },
    {
        id: getId(),
        username: 'SkateBoi',
        comment: 'Delete your acc,  Todd'
    },
    {
        id: getId(),
        username: 'bully',
        comment: 'wuff, wuff, wuff'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: getId() })
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/details', { comment })
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);

    foundComment.comment = newCommentText;

    res.redirect('/comments');

});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    
    res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send('POST /tacos response');
});

app.listen(5000, () => console.log('App is listening on port 5000'));

