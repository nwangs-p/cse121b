// Function declaration to add two numbers
function add(number1, number2) {
  return number1 + number2;
}

// Function declaration to get the values of two HTML form controls and call the add function
function addNumbers() {
  const addNumber1 = Number(document.querySelector('#add1').value);
  const addNumber2 = Number(document.querySelector('#add2').value);

  const sum = add(addNumber1, addNumber2);

  document.querySelector('#sum').value = sum;
}

// Add a click event listener to the HTML button with an ID of addNumbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


// Function expressions to subtract and divide two numbers
const subtract = (subtract1, subtract2) => subtract1 - subtract2;

// Function declarations to get the values of two HTML form controls and call the subtract and divide functions
function subtractNumbers() {
  const subtract1Value = subtract(document.querySelector('#subtract1').value);
  const subtract2Value = subtract(document.querySelector('#subtract2').value);

  document.querySelector('#product').value = subtract(subtract1Value, subtract2Value)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)


const multiply = (factor1, factor2) => factor1 * factor2;

function multiplyNumbers() {
  const multiply1 = document.querySelector('#factor1').value;
  const multiply2 = document.querySelector('#factor2').value;

  document.querySelector('#difference').value = multiply(multiply1, multiply2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)


const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers() {
  const dividendValue = document.querySelector('#dividend').value;
  const divisorValue = document.querySelector('#divisor').value;

  const quotient = divide(dividendValue, divisorValue);

  document.querySelector('#quotient').innerHTML = quotient;
}

// Decision structures and program branching
// Get the current date
const today = new Date();

// Get the current year
const currentYear = today.getFullYear();

// Assign the current year to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = currentYear;

// Array variable to hold the numbers 1 through 13
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array
document.querySelector('#array').innerHTML = array;

// Use the filter() array method to find all of the odd numbers of the array variable
const odds = array.filter(number => number % 2 !== 0);

// Assign the result to the HTML element with an ID of odds
document.querySelector('#odds').innerHTML = odds;

// Use the filter() array method to find all of the even numbers of the array variable
const evens = array.filter(number => number % 2 === 0);

// Assign the result to the HTML element with an ID of evens
document.querySelector('#evens').innerHTML = evens;

// Use the reduce() array method to sum the array variable elements
const sumOfArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Assign the result to the HTML element with an ID of sumOfArray
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

// Use the map() array method to multiple each element in the array variable by 2
const multiplied = array.map(number => number * 2);

// Assign the result to the HTML element with an ID of multiplied
document.querySelector('#multiplied').innerHTML = multiplied;

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two
const sumOfMultiplied = multiplied.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Assign the result to the HTML element with an ID of sumOfMultiplied
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;