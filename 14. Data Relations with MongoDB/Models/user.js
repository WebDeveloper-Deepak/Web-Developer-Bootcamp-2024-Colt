const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationShipDemo')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log(err);
    });


const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true,
            },
        },
    ],
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const user = new User({
        first: 'John',
        last: 'Doe',
    });

    user.addresses.push({
        street: '123 Street',
        city: 'New Orleans',
        state: 'NY',
        country: 'USA'
    });
    const res = await user.save();
    console.log(res);
};

const addAddress = async (id) => {
    const user = await User.findById(id);

    user.addresses.push({
        street: '99 Third Street',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });

    const res = await user.save();
    console.log(res);
}

makeUser();
addAddress('65b789790abf470380508d68');
