const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('All dogs')
});

router.post('', (req, res) => {
    res.send('Post all dogs')
});

router.get('/:id', (req, res) => {
    res.send('Id all dogs')
});

router.get('/:id/edit', (req, res) => {
    res.send('Edit all dogs')
});

module.exports = router;