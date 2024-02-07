const router = require('express').Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');

const campgroundController = require('../controllers/campgroundController');

router.route('/')
    .get(catchAsync(campgroundController.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgroundController.create));
  

router.get('/create', isLoggedIn, campgroundController.renderCreateFrom);

router.route('/:id')
    .get(catchAsync(campgroundController.campgroundDetails))
    .put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgroundController.edit))
    .delete(isLoggedIn, isAuthor, catchAsync(campgroundController.delete))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgroundController.editForm));

module.exports = router;