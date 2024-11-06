// Way 1: for

const sum1 = (...args) => {
    let result = 0;
    const numArr = [...args];
    for(let step = 0; step < numArr.length; step++) {
        result += numArr[step];
    }
    return result;
};

/*
Checking:
console.log(sum1(1, 2, 3));
console.log(sum1(0));
console.log(sum1());
console.log(sum1(1, -1, 1));
console.log(sum1(10, -1, -1, -1), "\n");
*/


// Way 2: for..of

const sum2 = (...args) => {
    let result = 0;
    for(num of args) result += num;
    return result;
};

/*
Checking:
console.log(sum2(1, 2, 3));
console.log(sum2(0));
console.log(sum2());
console.log(sum2(1, -1, 1));
console.log(sum2(10, -1, -1, -1), "\n");
*/


// Way 3: while

const sum3 = (...args) => {
    let result = 0;
    let step = 0;
    while(step < args.length){
        result += args[step];
        step++;
    };
    return result;
};

/*
Checking:
console.log(sum3(1, 2, 3));
console.log(sum3(0));
console.log(sum3());
console.log(sum3(1, -1, 1));
console.log(sum3(10, -1, -1, -1), "\n");
*/


// Way 4: do...while

const sum4 = (...args) => {
    let result = 0;
    if(args.length === 0) return 0;
    do {
        result += args.pop();
    } while(args.length > 0);
    return result;
};

/*
Checking:
console.log(sum4(1, 2, 3));
console.log(sum4(0));
console.log(sum4());
console.log(sum4(1, -1, 1));
console.log(sum4(10, -1, -1, -1), "\n");
*/


// Way 5: Array.prototype.reduce()

const sum5 = (...args) => {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0 ) 
};

/*
Checking:
console.log(sum5(1, 2, 3));
console.log(sum5(0));
console.log(sum5());
console.log(sum5(1, -1, 1));
console.log(sum5(10, -1, -1, -1), "\n");
*/