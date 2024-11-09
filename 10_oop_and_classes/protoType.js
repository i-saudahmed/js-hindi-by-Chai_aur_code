// let myName = "hitesh     ";
// let mychannel = "chai     ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// Testing the getSpiderPower method
// heroPower.getSpiderPower(); // Output: Spidy power is sling

// Testing the hitesh method on heroPower object
// heroPower.hitesh(); // Output: hitesh is present in all objects

// myHeros.heyHitesh();
// heroPower.heyHitesh();

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TASupport.isAvailable);  // Output: false (found in TeachingSupport)
console.log(TASupport.makeVideo);    // Output: true (found in Teacher)
console.log(TASupport.name);  

let anotherUsername = "ChaiAurCode     ";

// String.prototype.trueLength = function () {
//   console.log(`${this}`);
//   console.log(`True length is: ${this.trim().length}`);
// };

// anotherUsername.trueLength();
// "hitesh".trueLength();
// "iceTea".trueLength();
