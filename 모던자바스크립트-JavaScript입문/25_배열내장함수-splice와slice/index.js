//배열내장함수
const numbers = [10, 20, 30, 40];
const numbers1 = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index);
const spliced = numbers.splice(index, 1);
console.log(spliced);
console.log(numbers);

const sliced = numbers1.slice(0, 2);
console.log(sliced);
console.log(numbers1);