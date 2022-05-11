const countingMonkeys= require("./02-countingMonkeys.js"); 

test('it should create an array of `n` elements, starting from 1', () => { 
    const number = 8; 
    const result = [1,2,3,4,5,6,7,8]; 
    const actualResult = countingMonkeys(number);
    
    expect(actualResult[0]).toBe(1); 
    expect(actualResult).toEqual(result);
});
