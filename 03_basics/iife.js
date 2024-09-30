// global scope k pollution sa problem hoti h kae baar global ma jo b variable han ya pollution ha usko hatany k liye iife use hota ha

// Immediately Invoked Function Expressions (IIFE)

// (function chai(){   // named iife
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ((name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
// })("hitesh");

(() => {        // without name anonymous
  console.log("hello");
})();

//creating a private scope for variables and functions to avoid polluting  global space

// Variables declared inside an IIFE are not accessible from outside, preventing potential conflicts in the global namespace.
// use semi colon to terminate or end function
(function() {
    var secret = "IIFE secret!";
    console.log(secret); // Output: IIFE secret!
})();

console.log(secret); // Error: secret is not defined
