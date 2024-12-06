// Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";
// ______________________________________________________________________________

// On one single line, declare three variables with the following names and values:
let firstName = "John";
let lastName = "Doe"
let age = 35;
// _______________________________________________________________________________

// Use the correct assignment operator that will result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
x *= y; // 50
// _______________________________________________________________________________

// Use comments to describe the correct data type of the following variables:
let length = 16; // int ?
let lastName = "Johnson"; // string ?

const x = {
  firstName: "John",
  lastName: "Doe"
};    // object ?
// _________________________________________________________________________

// Execute the function named myFunction.
function myFunction() {
    alert("Hello World!");
  }
myFunction()
// _________________________________________________________________________

// Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
let person = {
    name: "John",
    age: 30,
}
alert(`${person.name} is 50`)
// _________________________________________________________________________

// The <button> element should do something when someone clicks on it. Try to fix it!

let button = document.querySelector(".clickBtn");
button.addEventListener("click", function() {
  alert("Hello World!");
});
// ________________________________________________________________________

// Array Related Question
// 1. Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length)

// 2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
// ________________________________________________________________________

// Math Related Problems
// Use the correct Math method to create a random number.
let randomNumber = Math.random();

// Use the correct Math method to return the largest number of 10 and 20.
let maxNumber = Math.max(10, 20);

// Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9);
// ________________________________________________________________________

// comparison operator related problems!
// 1. Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;

alert(x > y);

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 15;

alert(age < 18? "Too young" : "Old enough");
// __________________________________________________________________________

// Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
function convertToFahrenheit(celcius) {
    console.log(celcius * 9/5 + 32)
}
console.log(convertToFahrenheit(15))
// __________________________________________________________________________

// Write a function to check if a number is even. The function should take a single argument, which is the number to check.
function checkEven(num) {
    return num % 2 === 0 ? true : false;
}
console.log(checkEven(10));
// __________________________________________________________________________
// Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
function sumUp(a, b) {
    return a + b;
  }

console.log(sumUp(2, 3))
// __________________________________________________________________________

// Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
    return Math.min(...arr);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findSmallestNum(arr))
// __________________________________________________________________________

// Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Hello!"));
// __________________________________________________________________________

// Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(array) {
    return array[0];
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getFirstElement(arr))
// __________________________________________________________________________

// Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
    return arr.length === 0 ? true : false;
}

console.log(isArrayEmpty([1]));
// __________________________________________________________________________

// Write a function to return the factorial of a number. The function should take a single argument, which is the number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
// __________________________________________________________________________

// Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello World!"));
// __________________________________________________________________________

// Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toLowerCase("HELLO!"));
// ____________________________________________________________________________

// Write a function to find the length of a string. The function should take a single argument, which is the string.

function stringLength(str) {
    return str.length
}

console.log(stringLength("Hello World!"));
// ____________________________________________________________________________

// Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));
// ____________________________________________________________________________

// Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3, 4, 5]));
// ____________________________________________________________________________

// Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {
    return str[0];
}
console.log(getFirstCharacter("Hello!"));
// ____________________________________________________________________________

// Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

function sumArray(arr) {
    return arr.reduce((acc, pre) => acc + pre, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
