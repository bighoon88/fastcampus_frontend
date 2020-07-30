//배열내장함수
const numbers = [10, 20, 30, 40];

const value = numbers.shift();
console.log(value);
console.log(numbers);

const numbers1 = [10, 20, 30, 40];
const value1 = numbers1.pop();
console.log(value1);
console.log(numbers1);

const numbers2 = [10, 20, 30, 40];
numbers2.unshift(5);
console.log(numbers2);

const numbers3 = [10, 20, 30, 40];
numbers3.push(50);
const value3 = numbers3.pop();
console.log(value3);
console.log(numbers3);

const numbers4 = [10, 20, 30, 40];
numbers4.unshift(0);
const value4 = numbers4.shift();
console.log(value4);
console.log(numbers4);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);
const concated2 = [...arr1, ...arr2];
console.log(concated2);

const array = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));