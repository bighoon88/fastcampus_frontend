//비구조화 할당
const object = { a: 1, b: 2};
const { a, b } = object;
console.log(a);
console.log(b);

function print({a, b}) {
  console.log(a);
  console.log(b);
}
print(object);

const object1 = { a: 1 };
function print1({a, b = 2}) {
  console.log(a);
  console.log(b);
}
print1(object1);

const object2 = { a1: 1 };
const { a1, b1 = 2 } = object2;
console.log(a1);
console.log(b1);

const animal = {
  name: '멍멍이',
  type: '개'
};
const nickname = animal.name;
console.log(nickname);

const { name: nickname1 } = animal;
console.log(nickname1);

// 배열 비구조화 할당
const array = [1, 2];
const one = array[0];
const two = array[1];
console.log(one);
console.log(two);

const [one1, two1] = array;
console.log(one1);
console.log(two1);

const array1 = [1];
const [one2, two2 = 2] = array1;
console.log(one2);
console.log(two2);

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
}
const {name, languages} = deepObject.state.information;
const {value} = deepObject;
const extracted = {
  name,
  languages,
  value
};
console.log(extracted);

const deepObject1 = {
  state1: {
    information1: {
      name1: 'velopert',
      languages1: ['korean', 'english', 'chinese']
    }
  },
  value1: 5
}
const {
  state1: {
    information1: {
      name1, languages1
    }
  },
  value1
} = deepObject1;
const extracted1 = {
  name1,
  languages1,
  value1
}
console.log(extracted1)
