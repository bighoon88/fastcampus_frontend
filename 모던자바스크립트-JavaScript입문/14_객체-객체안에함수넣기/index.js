//객체
//객체 안에 함수 넣기
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() {
      console.log(this.sound);
    }
  };
  
  const cat = {
    name: '야옹이',
    sound: '야옹~'
  };
  
  dog.say();
  cat.say = dog.say;
  cat.say();