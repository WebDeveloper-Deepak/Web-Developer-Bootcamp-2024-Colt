const router = require('express').Router();


router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();     
    };

    res.send('Sorry not an Admin!')
});

router.get('/topsecret', (req, res) => {
    res.send('Top secret');
});

router.get('/deleteeverything', (req, res) => {
    res.send('Delete it all as a secret');
});

module.exports = router;