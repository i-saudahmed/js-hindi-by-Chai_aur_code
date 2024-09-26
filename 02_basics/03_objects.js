// singleton --> if it created from constructor it will be singleton if it is from literals it is not
//object.create

// object literals

const mySym = Symbol("key1");

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

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])