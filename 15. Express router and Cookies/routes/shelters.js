const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('All shelters')
});

router.post('', (req, res) => {
    res.send('Post all shelters')
});

router.get('/:id', (req, res) => {
    res.send('Id all shelters')
});

router.get('/:id/edit', (req, res) => {
    res.send('Edit all shelters')
});

module.exports = router;