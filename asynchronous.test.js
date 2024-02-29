const callback = require("./asynchronous")

test('should resolve', () => { 
    return expect(callback()).resolves.toBe("promise was resolved")
 })

 test("alternative code", async () => {
    const data = await callback();
    expect(data).toBe("promise was resolved")
 })