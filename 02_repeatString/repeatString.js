const repeatString = function(string, num) {
    let counter = 1;
    if (num === 0 || string === ''){
        return '';
    } else if (num < 0) {
        return 'ERROR';
    } else {    
        while (counter < num) {
            string += 'hey';
            counter++;
        }
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
