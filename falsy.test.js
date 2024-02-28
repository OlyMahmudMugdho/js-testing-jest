const isOff = false
const isPresent = 0
const quantity = null

test("false test", () => {
    expect(isOff).toBeFalsy()
    expect(isPresent).toBeFalsy()
    expect(quantity).toBeFalsy()
})