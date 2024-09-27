// const tinderUser = new Object(); // singleton

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "saud";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign(obj1, obj2, obj4); // values in obj1 will be same as the output obj3 bcz using the assign property copy all the values into obj1
// like obj2 and obj4 wil be copied in obj1
// console.log(obj1 == obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4); // here we assigning into another object so it will not be true
// console.log(obj1 == obj3);

// const obj3 = {...obj1, ...obj2 }; // spread operator
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "haa@gmail.com",
  },
  {
    id: 1,
    email: "hww@gmail.com",
  },
  {
    id: 1,
    email: "h22@gmail.com",
  },
];

// console.log(users[1].email);
 
// console.log(tinderUser); 

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));  
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty("name")); // you have to enter key not value
 

const course = {
    coursename: "js in hindi",
    price: "999", 
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor , price} = course

// console.log(courseInstructor);
console.log(instructor);
console.log(price);

// JSON ....     keys are also string here 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// also type of json   api
// [
//     {},
//     {},
//     {}
// ]