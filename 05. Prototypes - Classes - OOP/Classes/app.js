class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    };

    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    hex() {
        const { r, g, b } = this;

        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
};

const white = new Color(255, 255, 255, 'snow');
const red = new Color(255, 67, 89, 'tomato');

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    eat() {
        return `${this.name} is eating!`
    };
}

class Cat extends Pet{
    meaw() {
        return `${this.name} says meaw!`
    };
};

class Dog extends Pet{
    wuff() {
        return `${this.name} says wuff!`
    };
};