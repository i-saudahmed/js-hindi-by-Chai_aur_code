// for array , string , or map method iteration for of is used
// for object iteration for in   is used
// for in cant be applied on map method
const myObject = {  
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}


// if we are using for in loop in array it is giving the index
// whereas for of gives the values of array
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
//   console.log(key);
}

for (const key in programming) {
//   console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }