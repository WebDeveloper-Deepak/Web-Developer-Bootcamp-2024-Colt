const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

const mongoose = require('mongoose');
const Product = require('./models/product');

const Farm = require('./models/farm');

const AppError = require('./AppError');

const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/farmAppTake2')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log(err);
    });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const sessionOptions = { secret: 'thisisasecretmessage', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
});

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.get('/farms/:id', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate('products');
    res.render('farms/show', { farm });
});

app.delete('/farms/:id', async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully made a new farm!');
    res.redirect('/farms')
});

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm });
});

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });

    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();

    res.redirect(`/farms/${farm._id}`);

});

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;

    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    };
});

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.get('/products/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name');


    // if (!product) {
    //     next(new AppError('Product not found', 404));  
    // };

    res.render('products/details', { product })

});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
});

// app.use((err, req, res, next) => {
//     const { status = 500, message = 'Something went wrong' } = err;
//     res.status().send(message);
// });


app.listen(PORT, () => console.log('App is listening on port', PORT));

