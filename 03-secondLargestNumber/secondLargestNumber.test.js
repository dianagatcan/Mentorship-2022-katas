const secondLargestNumber = require("./03-secondLargestNumber.js")

describe('it should return the second largest item in given array', () => {
    //test cases [input and expected result]
    const cases = [[[1, -2, 3], 1], [[5, 5, 5], undefined], [[2, '3', 4], 3]]
    
    test.each(cases)('return second largest in array', (array, expectedResult) => {
        const result = secondLargestNumber(array);
        expect(result).toEqual(expectedResult);
    })
})