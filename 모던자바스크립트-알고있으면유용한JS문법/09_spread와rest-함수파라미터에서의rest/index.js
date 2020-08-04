// spread 와 rest
// 함수 파라미터에서의 rest

function sum(...rest) { // ...rest는 입력 받는 파라미터의 값들을 []로 만듬
    return rest.reduce((acc, current) => acc + current, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6));