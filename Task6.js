const max = (arr) => {
    const oneArr = arr.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    });
    let result;
        oneArr.reduce((accumulator, currentValue) => {
            if(accumulator > currentValue) return result = accumulator
            return result = currentValue;        
        });
    return result;
};


// Example:
// console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]));