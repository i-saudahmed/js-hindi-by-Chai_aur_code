// singleton --> if it created from constructor it will be singleton if it is from literals it is not
//object.create

// object literals

const mySym = Symbol("key1");
const mySym1 = Symbol("key2");

const JsUser = {
  name: "Saud",
  "full name": "Saud Ahmed",
  [mySym]: "mySymbolKey",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)

// console.log(JsUser);

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

JsUser.greetingThree = function () {
  console.log(`Hello saud this is me ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greetingThree());
