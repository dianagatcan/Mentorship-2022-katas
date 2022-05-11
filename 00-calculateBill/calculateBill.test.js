const CalculateBill= require("./00-calculateBill.js");

test('it should return `total` formatted as a currency string', ()=>{

    const formatedTotal = '$178.20'; 
    const actualTotal = CalculateBill(162, 7, 3);

    expect(actualTotal).toEqual(formatedTotal); 
    expect(actualTotal).toContain('$'); 
})