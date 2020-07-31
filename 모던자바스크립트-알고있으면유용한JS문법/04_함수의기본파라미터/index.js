//함수의 기본 파라미터
function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}
function calculateCircleArea1(r = 1) {
    return Math.PI * r * r;
}
const calculateCircleArea2 = (r = 1) => {
    return Math.PI * r * r;
}
const calculateCircleArea3 = (r = 1) => Math.PI * r * r;
  
const area = calculateCircleArea();
console.log(area);
const area1 = calculateCircleArea1();
console.log(area1);
const area2 = calculateCircleArea2();
console.log(area2);
const area3 = calculateCircleArea3();
console.log(area3);