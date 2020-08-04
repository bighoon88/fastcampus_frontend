// spread 와 rest
// rest
// spread 와 똑같이 ...을 사용
// rest 는 spread와 반대

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};
// const {color, ...rest} = purpleCuteSlime; // 객체 비구조화 할당을 하면서 ...rest를 넣어줌
// console.log(color);
// console.log(rest); // rest 객체에 color를 제외한 나머지 값이 들어옴
const {color, ...cuteSlime} = purpleCuteSlime; // rest 대신 다른이름도 가능
console.log(color);
console.log(cuteSlime); // rest 객체에 color를 제외한 나머지 값이 들어옴
const {attribute, ...slime} = cuteSlime;
console.log(slime);
  
// 배열
  
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers; // 비구조화 할당
//const [...rest, one, two] = numbers; // rest가 앞에 위치할수는 없음
console.log(one);
console.log(two);
console.log(rest);
  