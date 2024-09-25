// array

const myArr = [1, 2, 3, 4, 5, 6];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(34); // not optimized we are forwarding the index of every value
// myArr.shift();
// myArr.shift();

// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(5));

// join will change the type of arr into string 
const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
// slice will keep original array same whereas the splice will crop or change the original array also slice doesn't include the range whereas splice will conside the range to crop 
console.log("A ", myArr); 
 
const myn1 = myArr.slice(1, 3) 
console.log(myn1); // 1, 2 

console.log("B ", myArr);
   
const myn2 = myArr.splice(1, 3)  
console.log(myn2); // 1,2,3 
 
console.log("C ", myArr);        