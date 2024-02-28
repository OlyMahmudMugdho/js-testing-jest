const mathValues = require("./object")

test('pi is 3.14, e = 2.7182', () => {
    expect(mathValues).toEqual({
        pi: 3.14,
        e: 2.7182
    })
})