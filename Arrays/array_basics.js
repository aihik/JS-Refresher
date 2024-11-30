const array_name = ["item1", "item2", "item3"]
// It is a common practice to declare arrays with the const keyword.

// You can also create an array, and then provide the elements:
const cars =[];
cars[0] = 'BMW';
cars[1] = 'Saab';
cars[2] = 'Volvo';

// Array indexes start with 0, 
// access an array element by referring to the index number.

console.log('Initial Value:', cars[0]);

// Change the value of 1st element of "cars" array
cars[0] = 'Ford'
console.log('Updated Value:', cars[0]);

// Arrays are a special type of objects.
console.log(typeof(cars));

// Looping through an array
// Using For loop
const fruits = ['apple', 'banana', 'mango']
let fLen = fruits.length;

for (let index = 0; index < fLen; index++) {
    console.log(fruits[index]);
}

// Using forEach function
console.log('---- Using forEach function ----');

fruits.forEach((array) => {
    console.log(array);
});

// ---- The Difference Between Arrays and Objects ----
// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

// ---- When to Use Arrays. When to use Objects ----
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

