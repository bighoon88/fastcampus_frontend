// scope
// global scope
// function scope
// block scope

// const value = 'hello!'; // value는 global scope
// function myFunction() {
//   console.log('myFunction: ');
//   console.log(value);
// }
// function otherFunction() {
//   console.log('otherFunction: ');
//   const value = 'bye!'; // value는 function scope
//   console.log(value);
// }
// myFunction();
// otherFunction();
// console.log('global scope: ');
// console.log(value);

// const value = 'hello!';
// function myFunction() {
//   const value = 'bye!';
//   const anotherValue = 'word'; // function scope
//   function functionInside() {
//     console.log('functionInside: ');
//     console.log(value);
//     console.log(anotherValue);
//   }
//   functionInside();
// }
// myFunction();
// console.log('global scope: ');
// console.log(value);
// console.log(anotherValue);

const value = 'hello!';
function myFunction() {
  const value = 'bye!';
  if (true) {
    const value = 'word';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}
myFunction();
console.log('global scope: ');
console.log(value);