// spread 와 rest
// ...
// spread 연산자

// 같은 객체에 대입한 결과로 나옴
// const slime = {
//   name: '슬라임'
// };
// const cuteSlime = slime;
// cuteSlime.attribute = 'cute';

// const purpleCuteSlime = cuteSlime;
// purpleCuteSlime.color = 'purple';

const slime = {
    name: '슬라임'
  };
  
  const cuteSlime = {
    ...slime,
    attribute: 'cute'
  };
  
  const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
  };
  
  const greenCuteSlime = { // color 값을 덮어씀
    color: 'green',
    ...purpleCuteSlime,
  };
  
  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);
  console.log(greenCuteSlime);
  
  const animals = ['개', '고양이', '참새'];
  const anoterAnimals = [...animals, '비둘기']; // animals.concat('비둘기') 와 같은 코드
  console.log(animals);
  console.log(anoterAnimals);
  
  const numbers = [1, 2, 3, 4, 5];
  const spreadNumbers = [...numbers, 1000, ...numbers]; // spread 연산자 자리에 값이 들어감
  console.log(spreadNumbers);