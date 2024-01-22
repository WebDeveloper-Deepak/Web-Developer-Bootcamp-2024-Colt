String.prototype.yell = function () {
    return `Checking custom method ${this.toUpperCase()}!!!`
};

Array.prototype.pop = function () {
    return 'Replacing the existing pop method'
};