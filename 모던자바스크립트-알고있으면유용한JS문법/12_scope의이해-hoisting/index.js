// Hoisting
// jascript에 선언되지 않은 함수또는 변수를 끌어올려서 사용하는 작동 방식

myFunction(); // 자바스크립트 작동 방식이 생성하는 함수를 먼저 불러서 함수 실행문이 위에있어도 사용가능

function myFunction() {
  console.log('hello word');
}

// 변수는 생성하는 변수를 위에서 초기화하고 밑에서 입력하는 방식으로 인식
console.log(number);
var number = 2;

// 방지하는 방법
myFunction1();
const myFunction1 = function myFunction1() {
  console.log('hello world');
}
