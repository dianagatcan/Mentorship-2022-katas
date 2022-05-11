
function countingMonkeys(number){
    return Array.from({length:number}, ( _, i)=> i + 1)
}
module.exports = countingMonkeys;
