const Campground = require('../models/campground');
const { cloudinary } = require('../cloudinary');

module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
}

module.exports.renderCreateFrom = (req, res) => {
    res.render('campgrounds/create')
};

module.exports.create = async (req, res) => {
    const campground = new Campground(req.body.campground);
    campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    campground.author = req.user._id;
    await campground.save();
    console.log(campground);
    req.flash('success', 'Successfully made a new campground')

    res.redirect(`/campgrounds/${campground._id}`)
};

module.exports.campgroundDetails = async (req, res) => {
    const campground = await Campground.findById(req.params.id)
        .populate({
            path: 'reviews',
            populate: {
                path: 'author'
            }
        })
        .populate('author');

    if (!campground) {
        req.flash('error', 'Cannot find that campground');
        res.redirect('/campgrounds')
    }

    res.render('campgrounds/details', { campground })
};

module.exports.editForm = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);

    if (!campground) {
        req.flash('error', 'Cannot find that campground');
        res.redirect('/campgrounds')
    };

    res.render('campgrounds/edit', { campground })
};

module.exports.edit = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    campground.images.push(...imgs);
    await campground.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } });
        console.log(campground);
    }
    req.flash('success', 'Successfully updated the campground.')
    res.redirect(`/campgrounds/${campground._id}`)
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);

    if (!campground.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to edit this particular post.');
        return res.redirect(`/campgrounds/${id}`)
    };

    req.flash('success', 'Successfully deleted campground')
    res.redirect('/campgrounds');
};