//조건문
const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

const a1 = 10;
if (a1 > 15) {
  console.log('a가 15보다 큽니다.');
} else {
  console.log('a가 15보다 크지 않습니다.');
}

if (a1 === 5) {
  console.log('5 입니다.');
} else if (a === 10) {
  console.log('10 입니다.')
} else {
  console.log('5도 아니고 10도 아닙니다.')
}