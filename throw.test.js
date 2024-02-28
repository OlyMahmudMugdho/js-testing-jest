const divide = require('./throw')
test('should throw an error', () => { 
    expect(() => {divide(9,0)}).toThrow()
 })