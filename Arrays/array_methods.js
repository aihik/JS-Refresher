// Array.map()
// This method creates a new array populated with the results of 
// calling a provided function on every element in the calling array. 
// It is often used for transforming data.

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]

// Array.forEach()
// The forEach method executes a provided function once 
// for each array element. 
// It is primarily used for executing side effects 
// rather than creating a new array.

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit)); // Logs each fruit

// Array.filter()
// This method creates a new array with all elements 
// that pass the test implemented by the provided function. 
// It is useful for filtering out unwanted elements.

const ages = [32, 33, 16, 40];
const adults = ages.filter(age => age >= 18); // [32, 33, 40]

// Array.reduce()
// The reduce method executes a reducer function (that you provide) 
// on each element of the array, resulting in a single output value. 
// It is powerful for aggregating data.

const total = [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue); // 6

// Array.find()
// This method returns the value of the first element in the provided array
// that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.

const simpleNumbers = [5, 12, 8, 130, 44];
const found = simpleNumbers.find(num => num > 10); // 12

// Array.sort()
// The sort method sorts the elements of an array in place and 
// returns the sorted array. By default, it sorts elements as strings.

const items = ['banana', 'apple', 'cherry'];
items.sort(); // ['apple', 'banana', 'cherry']

// Array.includes()
// This method determines whether an array includes a certain value 
// among its entries, returning true or false as appropriate.

const pets = ['cat', 'dog', 'bat'];
const hasDog = pets.includes('dog'); // true

// Array.concat()
// The concat method is used to merge two or more arrays. 
// This method does not change the existing arrays 
// but instead returns a new array.

const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2); // [1, 2, 3, 4]

// Array.slice()
// The slice method returns a shallow copy of a portion of an array 
// into a new array object selected from start to end (end not included).

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const sliced = animals.slice(2); // ['camel', 'duck', 'elephant']

// Array.splice()
// The splice method changes the contents of an array by 
// removing or replacing existing elements and/or adding new elements 
// in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
// months is now ['Jan', 'Feb', 'March', 'April', 'June']