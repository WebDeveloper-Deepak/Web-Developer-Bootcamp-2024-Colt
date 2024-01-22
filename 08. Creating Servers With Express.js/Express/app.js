const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    console.log('Response for home page');
    res.send('<h1>This is a home page. Check if nodemon works </h1>')
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`This is a subreddit for ${subreddit}`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`This is a subreddit for ${subreddit} with ID of ${postId}`);
});

app.get('/about', (req, res) => {
    res.send('<h1>This is a about page</h1>')
});

app.post('/postpage', (req, res) => {
    res.send('<h1>This is a post page. Post something.</h1>')
});

app.get('*', (req, res) => {
    res.send('Nothing here')
});


app.listen(PORT, () => console.log('App is listening on port', PORT))

