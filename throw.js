const divide = (a, b) => {
    if (b === 0) {
        throw new Exception("cannot divide by zero")
    }
    else {
        return a / b;
    }
}

module.exports = divide;