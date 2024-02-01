const router = require('express').Router({ mergeParams: true });

const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

const reviewController = require('../controllers/reviewController')

const catchAsync = require('../utils/catchAsync');


router.post('/', isLoggedIn, validateReview, catchAsync(reviewController.index));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviewController.delete));


module.exports = router;