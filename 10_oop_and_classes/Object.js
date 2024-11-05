function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// Example usage:
const user1 = new createUser("Chai", 10);
console.log(user1.score); // Output: 10

user1.increment();
console.log(user1.score); // Output: 11

console.log(user1.printMe());
   