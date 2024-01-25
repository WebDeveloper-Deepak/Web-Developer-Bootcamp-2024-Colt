const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/productsApp')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log(err);
    });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number.']
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },

    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log('Hi');
    console.log(`from ${this.name}`);
};

const Product = mongoose.model('Product', productSchema);


// const p = new Product({name: 'bike rag', price: 5});
// p.greet();

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    foundProduct.greet();
};

findProduct();

// const bike = new Product({ name: 'Wheels', price: 20.00, categories: ['Cycling', 'Safety'], size: 'S'});


// bike.save()
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

