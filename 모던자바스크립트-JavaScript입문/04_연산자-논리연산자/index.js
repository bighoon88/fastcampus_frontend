//논리연산자
//NOT !
//AND &&
//OR ||

const a = !true;
console.log(a);

const a1 = true && false;
console.log(a1);

const a2 = true || false;
console.log(a2);

const value = !(true && false || true && false || !false);
// !(true && false || true && false || true)
// !(false || false || true)
// !(true)
// false
console.log(value);