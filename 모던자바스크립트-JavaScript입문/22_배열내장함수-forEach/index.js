//배열내장함수
const superheroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];
for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
};
function print(hero) {
    console.log(hero);
};
superheroes.forEach(print);
superheroes.forEach(function(hero) {
    console.log(hero);
});
superheroes.forEach(hero => {
    console.log(hero);
});