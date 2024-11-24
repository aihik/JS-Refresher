// length: Returns the number of characters in a string, including spaces.

const str1 = "Hello World";
console.log(str1.length); // Output: 11

// charAt(index): Returns the character at the specified index.

const str2 = "Hello";
console.log(str2.charAt(1)); // Output: e

// indexOf(substring): Returns the index of the first occurrence of a specified substring, or -1 if not found.

const str3 = "Hello World";
console.log(str3.indexOf("o")); // Output: 4

// lastIndexOf(substring): Returns the index of the last occurrence of a specified substring.

const str4 = "Hello World, Hello!";
console.log(str4.lastIndexOf("Hello")); // Output: 13

// includes(substring): Checks if a string contains a specified substring, returning true or false.

const str5 = "Hello World";
console.log(str5.includes("World")); // Output: true

// startsWith(prefix): Determines whether a string begins with a specified prefix.

const str6 = "Hello World";
console.log(str.startsWith("Hello")); // Output: true

// endsWith(suffix): Checks if a string ends with a specified suffix.

const str7 = "Hello World";
console.log(str7.endsWith("World")); // Output: true

// slice(start, end): Extracts a section of a string and returns it as a new string.

const str8 = "Hello World";
console.log(str8.slice(0, 5)); // Output: Hello

// substring(start, end): Similar to slice, but does not accept negative indices.

const str9 = "Hello World";
console.log(str9.substring(0, 5)); // Output: Hello

// substr(start, length): Returns a portion of the string starting at the specified index and extending for a given number of characters.

const str10 = "Hello World";
console.log(str10.substr(6, 5)); // Output: World

// toLowerCase(): Converts all characters in a string to lowercase.

const str11 = "Hello World";
console.log(str11.toLowerCase()); // Output: hello world

// toUpperCase(): Converts all characters in a string to uppercase.

const str12 = "Hello World";
console.log(str12.toUpperCase()); // Output: HELLO WORLD

// trim(): Removes whitespace from both ends of a string.

const str13 = "   Hello World   ";
console.log(str13.trim()); // Output: Hello World

// replace(searchValue, newValue): Replaces the first occurrence of a specified value in a string with another value.

const str14 = "Hello World";
console.log(str14.replace("World", "")); // Output: Hello 

// split(separator): Splits a string into an array of substrings based on the specified separator.

const str15 = "Hello World";
console.log(str15.split(" ")); // Output: ["Hello", "World"]

// concat(): Joins two or more strings together.

const str16 = "Hello ";
const str17 = "World";
console.log(str16.concat(str17)); // Output: Hello World