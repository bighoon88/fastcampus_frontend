//숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
function countBiggerThanTen(numbers) {
    let sum = 0;
    for (let number of numbers) {
      if (number > 10) {
        sum += 1
      }
    };
    return sum;
};
  
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
  
export default countBiggerThanTen;

//function countBiggerThanTen(numbers) {
//    return numbers.reduce((acc, current) => {
//      if (current > 10) {
//        return acc + 1;
//      } else {
//        return acc;
//      }
//    }, 0);
//}
  
//const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
//console.log(count); // 5
  
//export default countBiggerThanTen;
  
  