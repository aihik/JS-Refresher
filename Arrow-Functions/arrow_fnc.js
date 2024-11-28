// -------- Normal function --------
let func = function (a, b){
    return a + b;
}

// -------- Arrow function --------
let arrow_func = (a, b) => a + b;
// If there is a single parameter, then no need to
// use parenthesis (let arrow_func = a => a * 2;)
// Also note that we can remove the use of "return"
// keyword if the function is within a single line.

// -------- Multi-line arrow function --------
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3