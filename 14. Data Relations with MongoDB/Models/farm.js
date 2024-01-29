const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/relationShipDemo')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log(err);
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    },
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{
        type: Schema.Types.ObjectId, ref: 'Product'
    }],
});


const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Ginda, CA' });
    const melon = await Product.findOne({ name: 'Strawberry Melon' });

    farm.products.push(melon)
    await farm.save()
};

makeFarm()

Product.insertMany([
    { name: 'Strawberry', price: 4.99, season: 'Spring' },
    { name: 'Apples', price: 2.99, season: 'Summer' },
    { name: 'Pears', price: 3.99, season: 'Fall' },
]);


const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Fully Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });

    farm.products.push(watermelon);

    farm.save();
};

Product.findOne({ name: 'Strawberry' }).populate('products')
.then(farm => console.log(farm))