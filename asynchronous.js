const callback = () => {
    return new Promise((resolve, reject) => {
        {
            resolve("promise was resolved")
        }
    })
}

module.exports = callback