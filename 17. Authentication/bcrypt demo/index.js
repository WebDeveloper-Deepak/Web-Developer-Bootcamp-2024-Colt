const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 12);
    console.log(hash);
};

const login = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword);

    if (result) {
        console.log('Logged you in.');
    } else {
        console.log('Try again.');
    }
};

hashPassword('anotheroasswird');
login('anotheroasswird', '$2b$12$4ZsQCEmYkArnml5JMiBQLe3uvUiyK3CZxKaIwvxr837M5sSd5KCn6');
