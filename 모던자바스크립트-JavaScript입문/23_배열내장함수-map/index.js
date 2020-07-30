//배열내장함수
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
};
console.log(squared);

const squared1 = [];
array.forEach(n => {
  squared1.push(n * n);
});
console.log(squared1);

const square = n => n * n;
const squared2 = array.map(square);
console.log(squared2);

const squared3 = array.map(n => n * n);
console.log(squared3);

const items = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'bye'
  }
];
const texts = items.map(item => item.text);
console.log(texts);

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
const index1 = todos.findIndex(todo => todo.id === 3);
console.log(index1);