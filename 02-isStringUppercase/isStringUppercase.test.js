const isStringUppercase = require("./02-isStringUppercase.js")

describe('should check if each input is UpperCase', () => {
    //test cases [input and expected result]
    const cases = [['HELLO', true], ['Hello there', false], ['HELLO!!!', 'Invalid input']]
    
    test.each(cases)('given input, return result', (input, expectedResult) => {
        const result = isStringUppercase(input);
        expect(result).toEqual(expectedResult);
    })
})

