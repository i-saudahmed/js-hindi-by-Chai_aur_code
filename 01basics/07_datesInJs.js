// let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 5, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-18-2024");
// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate);

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now() / 1000));

const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// console.log(newDate.getFullYear());

// `Today is ${newDate.getDay()} and time  is ${newDate.getTIme()}`

console.log(newDate.toLocaleString("default", { weekday: "short" }));
