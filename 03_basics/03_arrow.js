const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// this can be used only in object not in function
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// here this keyword will give you details and show properties but in anonymous or arrow function it will just show you this  {}
// const chai = function () {
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "saud" });

console.log(addTwo(3, 4));
