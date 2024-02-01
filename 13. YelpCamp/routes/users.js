const router = require('express').Router();

const passport = require('passport');

const catchAsync = require('../utils/catchAsync');

const { storeReturnTo } = require('../middleware');
const userController = require('../controllers/userController');

router.route('/register')
    .get(userController.registerForm)
    .post(catchAsync(userController.register));

router.route('/login')
    .get(userController.loginForm)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), userController.login);

router.get('/logout', userController.logout);

module.exports = router;