const convertToCelsius = function(fahrenheit) {
  if (fahrenheit === 32) return 0;    
  let converted = (fahrenheit - 32) * 5/9;
  let oneDecimalPlace = converted.toFixed(1);
  return Number(oneDecimalPlace);
};

const convertToFahrenheit = function(celsius) {
  if (celsius === 0) return 32;    
  let converted = (celsius * 9/5 + 32);
  let oneDecimalPlace = converted.toFixed(1);
  return Number(oneDecimalPlace);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
