const reverseString = function(string) {
    //Create a variable to store array of strings
     //Take each letter from a string (use loops) and add it to the empty array as an individual elements
     let arrayContainer = string.split('')
     console.log(arrayContainer)    
     //Use array.reverse() to reverse the order of the elements inside the array
     arrayContainer.reverse();    
     console.log(arrayContainer)    
     //Create a variable and use array.toString() to convert the array into a new string
     let newString = arrayContainer.join();
     console.log(newString) //returns o,l,l,e,h    
     //Remove commas with string.replaceAll() method
     newString = newString.replaceAll(',','')
     console.log(newString)
     return newString;
};

// Do not edit below this line
module.exports = reverseString;
