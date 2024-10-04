const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(curElem) {
//   console.log(curElem);
// }

// coding.forEach(printMe); // gives values without array not array

coding.forEach((curElem, curIndex, arrList) => {
  console.log(curElem, curIndex, arrList);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((curElem) => {
  console.log(curElem.languageName);
}); 
