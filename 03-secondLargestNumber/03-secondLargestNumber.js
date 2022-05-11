function secondLargestNumber(array){

        if(!Array.isArray(array) || array.every( v => v === array[0] )) return undefined;
        let newArr = array.filter(elem => typeof elem =='number' || typeof elem == 'string').filter(elem => !isNaN(elem));
          const max = Math.max(...newArr)
          return Math.max(...newArr.filter(x => x !== max))
}

module.exports = secondLargestNumber;
