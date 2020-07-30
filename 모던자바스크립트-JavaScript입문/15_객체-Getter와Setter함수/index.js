//객체
//Getter Setter
const numbers = {
    a: 1,
    b: 2
};
numbers.a = 5;
console.log(numbers);
  
const numbers1 = {
    a: 1,
    b: 2,
    get sum() {
      console.log('sum 함수가 실행됩니다!');
      return this.a + this.b
    }
};
console.log(numbers1.sum);
numbers1.b = 5;
console.log(numbers1.sum);
  
const dog = {
    _name: '멍멍이',
    set name(value) {
      console.log('이름이 바뀝니다..' + value);
      this._name = value;
    }
};
  
console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);
  
const numbers2 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      this._a = value;
      this.calculate();
    },
    set b(value) {
      this._b = value;
      this.calculate();
    }
};
  
console.log(numbers2.sum);
numbers2.a = 5;
console.log(numbers2.sum);
numbers2.b = 7;
console.log(numbers2.sum);
numbers2.a = 9;
console.log(numbers2.sum);
console.log(numbers2.sum);