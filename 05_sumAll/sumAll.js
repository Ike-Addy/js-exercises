const sumAll = function(a, b) {
    let sumOfNumbers = 0;
    if (!a || !b || isNaN(a) || isNaN(b)) {
        sumOfNumbers = 'ERROR';
    } else if (a < b){
        for (let i = a; i <= b; i++) {
            sumOfNumbers += i;
        }            
    } else if (a > b){
        for (let i = b; i <= a; i++) {
            sumOfNumbers += i;
        }
    } else {
        sumOfNumbers = 'ERROR';
    }
    return sumOfNumbers
};

// Do not edit below this line
module.exports = sumAll;
