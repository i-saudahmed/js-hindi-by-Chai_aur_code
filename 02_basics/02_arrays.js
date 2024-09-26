const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // add in existing array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 

// const allHeros = marvel_heros.concat(dc_heros)  // concat will return new array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator to join two arrays together

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // array in array in depth 

const real_another_array = another_array.flat(Infinity)  // it will give a one simple array it will crop or like terminate the depth 
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) // check if it is an array
console.log(Array.from("Hitesh")) // it will create array of hitesh 
console.log(Array.from({name: "hitesh"})) // interesting  it cant be directly converted in array 
console.log(Object.values({name : "Saud"})); // this way you can fetch value of it , object.keys will give you just key and object.entries will give you both key and valuev in array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // it will give you an array which will contain all the given variables values