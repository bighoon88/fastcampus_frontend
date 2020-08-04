// spread 와 rest
// 함수의 인자에서 spread 연산자 사용

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...numbers1));
  
function subtract(x, y) {
    return x - y;
}
const numbers = [1, 2];
const result = subtract(...numbers);
console.log(result)
  
function max(...rest) {
    return rest.sort((a, b) => b - a)[0];
}
  
const result1 = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result1);
  
// 테스트 코드에서 불러오기 위하여 사용하는 코드
export default max;
  