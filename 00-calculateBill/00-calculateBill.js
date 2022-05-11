function CalculateBill(bill, vat, tip){
    const total = bill + (bill * vat /100) + (bill * tip / 100)
    //Format total as a currency string with Intl.NumberFormat
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
}

module.exports = CalculateBill;
