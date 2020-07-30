//함수
const add = (a, b) => {
    return a + b;
}
const add1 = (a, b) => a + b;
const sum = add(1, 2);
const sum1 = add1(1, 2);
console.log(sum);
console.log(sum1);
  
const hello = (name) => {
    console.log(`Hello, ${name}!`);
}
hello('taehoon');