function isAnimal(text) {
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
}
console.log(isAnimal('개'));
console.log(isAnimal('노트북'));
  
function isAnimal1(text) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(text);
}
console.log(isAnimal1('개'));
console.log(isAnimal1('노트북'));
  
const isAnimal2 = (text) => {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(text);
}
console.log(isAnimal2('개'));
console.log(isAnimal2('노트북'));
  
function getSound(animal) {
    if (animal === '개') return '멍멍!';
    if (animal === '고양이') return '야옹~';
    if (animal === '참새') return '짹짹';
    if (animal === '비둘기') return '구구 구 구';
    return '...?';
}
console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));
  
function getSound1(animal) {
    switch (animal) {
        case '개':
            return '멍멍!';
        case '고양이':
            return '야옹';
        case '참새':
            return '짹짹';
        case '비둘기':
            return '구구 구 구';
        default:
            return '...?';
    }
}
console.log(getSound1('개'));
console.log(getSound1('비둘기'));
console.log(getSound1('인간'));
  
function getSound2(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}
console.log(getSound2('개'));
console.log(getSound2('비둘기'));
console.log(getSound2('인간'));
  
function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기: function() {
            console.log('구구 구 구');
        }
    };
    const task = tasks[animal];
    if (!task) {
        console.log('...?');
        return;
    }
    task();
}
makeSound('개');
makeSound('비둘기');
makeSound('인간');